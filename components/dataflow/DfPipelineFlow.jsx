import React from 'react';

/** Topological level for each node from connections (sources at level 0). */
function computeLevels(nodes, connections) {
  const incoming = new Map();
  nodes.forEach((n) => incoming.set(n.id, []));
  connections.forEach((c) => { if (incoming.has(c.to)) incoming.get(c.to).push(c.from); });
  const levels = new Map();
  const visiting = new Set();
  const resolve = (id) => {
    if (levels.has(id)) return levels.get(id);
    if (visiting.has(id)) return 0;
    visiting.add(id);
    const src = incoming.get(id) || [];
    const lvl = src.length ? Math.max(...src.map(resolve)) + 1 : 0;
    levels.set(id, lvl);
    visiting.delete(id);
    return lvl;
  };
  nodes.forEach((n) => resolve(n.id));
  return levels;
}

function nodeKind(type) {
  if (type === 'source') return 'source';
  if (type === 'join') return 'join';
  return 'derived';
}

/**
 * DfPipelineFlow — the visual transformation DAG (Alkyra `alk-pipeline-flow`).
 *
 * Lays dataset nodes out in columns by dependency depth and draws curved SVG
 * links between them, each carrying an operation label (join / union / subset /
 * aggregation / transformation). Nodes are colour-ruled by role — source
 * (blue), join (green), derived (grey) — with an icon, description and a role
 * badge. Clicking a node fires `onSelect`; hovering a link label highlights it.
 */
export function DfPipelineFlow({
  title = 'Pipeline flow',
  subtitle,
  nodes = [],
  connections = [],
  selectedId,
  onSelect,
  actions,
  emptyText = 'No datasets in this pipeline yet.',
  className = '',
  ...rest
}) {
  const canvasRef = React.useRef(null);
  const nodeRefs = React.useRef({});
  const [paths, setPaths] = React.useState([]);
  const [hover, setHover] = React.useState(null);
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  const levels = React.useMemo(() => computeLevels(nodes, connections), [nodes, connections]);
  const columns = React.useMemo(() => {
    const map = new Map();
    nodes.forEach((n) => {
      const lvl = n.level ?? levels.get(n.id) ?? 0;
      if (!map.has(lvl)) map.set(lvl, []);
      map.get(lvl).push(n);
    });
    return [...map.entries()].sort((a, b) => a[0] - b[0]).map(([level, ns]) => ({ level, nodes: ns }));
  }, [nodes, levels]);

  const measure = React.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cRect = canvas.getBoundingClientRect();
    setSize({ width: canvas.scrollWidth, height: canvas.scrollHeight });
    const next = [];
    for (const c of connections) {
      const fromEl = nodeRefs.current[c.from];
      const toEl = nodeRefs.current[c.to];
      if (!fromEl || !toEl) continue;
      const f = fromEl.getBoundingClientRect();
      const t = toEl.getBoundingClientRect();
      const startX = f.right - cRect.left;
      const startY = f.top + f.height / 2 - cRect.top;
      const endX = t.left - cRect.left;
      const endY = t.top + t.height / 2 - cRect.top;
      const cx = startX + (endX - startX) / 2;
      next.push({
        id: `${c.from}-${c.to}`,
        d: `M ${startX} ${startY} C ${cx} ${startY}, ${cx} ${endY}, ${endX} ${endY}`,
        labelX: (startX + 6 * cx + endX) / 8,
        labelY: (startY + endY) / 2,
        label: c.operation,
      });
    }
    setPaths(next);
  }, [connections]);

  React.useLayoutEffect(() => { measure(); }, [measure, columns]);
  React.useEffect(() => {
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  return (
    <div className={['df-flow', className].filter(Boolean).join(' ')} {...rest}>
      <div className="df-flow__head">
        <div>
          <h3 className="df-flow__title">{title}</h3>
          {subtitle && <p className="df-flow__subtitle">{subtitle}</p>}
        </div>
        {actions && <div>{actions}</div>}
      </div>

      <div className="df-flow__graph">
        {nodes.length === 0 ? (
          <div className="df-flow__empty">{emptyText}</div>
        ) : (
          <div className="df-flow__canvas" ref={canvasRef}>
            <svg className="df-flow__links" width={size.width} height={size.height} aria-hidden="true">
              <defs>
                <marker id="df-flow-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M 0 0 L 6 3 L 0 6 z" className="df-flow__arrow" />
                </marker>
                <marker id="df-flow-arrow-hl" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M 0 0 L 6 3 L 0 6 z" className="df-flow__arrow df-flow__arrow--highlight" />
                </marker>
              </defs>
              {paths.map((p) => (
                <path
                  key={p.id}
                  className={['df-flow__link', hover === p.id && 'df-flow__link--highlight'].filter(Boolean).join(' ')}
                  d={p.d}
                  markerEnd={hover === p.id ? 'url(#df-flow-arrow-hl)' : 'url(#df-flow-arrow)'}
                />
              ))}
            </svg>

            <div className="df-flow__labels">
              {paths.map((p) => p.label && (
                <button
                  type="button"
                  key={p.id}
                  className={['df-flow__label', hover === p.id && 'df-flow__label--highlight'].filter(Boolean).join(' ')}
                  style={{ left: p.labelX, top: p.labelY }}
                  onMouseEnter={() => setHover(p.id)}
                  onMouseLeave={() => setHover(null)}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="df-flow__levels">
              {columns.map((col) => (
                <div className="df-flow__col" key={col.level}>
                  {col.nodes.map((node) => {
                    const kind = nodeKind(node.type);
                    return (
                      <button
                        type="button"
                        key={node.id}
                        ref={(el) => { nodeRefs.current[node.id] = el; }}
                        className={['df-flow__node', `df-flow__node--${kind}`, selectedId === node.id && 'df-flow__node--selected'].filter(Boolean).join(' ')}
                        onClick={() => onSelect?.(node)}
                      >
                        <div className="df-flow__node-head">
                          {node.icon && (
                            <span className="df-flow__node-ico" aria-hidden="true">
                              {typeof node.icon === 'string' && node.icon.includes('/')
                                ? <img src={node.icon} alt="" />
                                : typeof node.icon === 'string'
                                  ? <i className={`fa-solid fa-${node.icon}`} />
                                  : node.icon}
                            </span>
                          )}
                          <span className="df-flow__node-name">{node.name}</span>
                        </div>
                        {node.description && <div className="df-flow__node-desc">{node.description}</div>}
                        {node.connector && <div className="df-flow__node-meta">{node.connector}</div>}
                        {(node.badge || kind) && (
                          <div className="df-flow__node-badges">
                            <span className={`df-flow__badge df-flow__badge--${kind}`}>{node.badge ?? kind}</span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
