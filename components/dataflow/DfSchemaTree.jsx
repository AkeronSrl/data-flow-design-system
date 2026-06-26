import React from 'react';

function matchNode(node, q) {
  return [node.label, node.description, node.searchText]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
    .includes(q);
}

/** Returns a filtered copy of the tree (matching branches forced open), or null. */
function filterNode(node, q) {
  const matches = matchNode(node, q);
  const items = node.items ?? [];
  if (items.length === 0) return matches ? node : null;
  if (matches) return { ...node, __forceOpen: true };
  const children = items.map((c) => filterNode(c, q)).filter(Boolean);
  if (children.length === 0) return null;
  return { ...node, items: children, __forceOpen: true };
}

function Badge({ badge, fixed }) {
  if (!badge) return null;
  return (
    <span className={['df-node__badge', `df-node__badge--${badge.tone || 'neutral'}`, fixed && 'df-node__badge--fixed'].filter(Boolean).join(' ')}>
      {badge.text}
    </span>
  );
}

function SchemaNode({ node, depth, expanded, selectedId, onToggle, onSelect }) {
  const hasItems = (node.items && node.items.length > 0) || node.hasItems;
  const isOpen = node.__forceOpen || expanded.has(node.id);
  const isSelected = selectedId === node.id;

  return (
    <div>
      <div
        className={['df-node', node.selectable && 'df-node--selectable', isSelected && 'df-node--selected'].filter(Boolean).join(' ')}
        onClick={() => {
          if (hasItems) onToggle(node.id);
          if (node.selectable) onSelect(node);
        }}
        role="treeitem"
        aria-expanded={hasItems ? isOpen : undefined}
        aria-selected={isSelected || undefined}
      >
        <div className="df-node__main">
          <span className={['df-node__twisty', isOpen && 'df-node__twisty--open', !hasItems && 'df-node__twisty--leaf'].filter(Boolean).join(' ')}>
            <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          </span>
          {node.leadingBadge && <Badge badge={node.leadingBadge} fixed />}
          {node.icon && <i className={`df-node__ico ${node.icon}`} aria-hidden="true" />}
          <div className="df-node__text">
            <span className="df-node__label">{node.label}</span>
            {node.description && <span className="df-node__desc">{node.description}</span>}
          </div>
        </div>
        <div className="df-node__tail">
          {node.loading && <span className="tia-spinner" style={{ width: 14, height: 14 }} />}
          <Badge badge={node.badge} />
        </div>
      </div>
      {hasItems && isOpen && (
        <div className="df-node__children" role="group">
          {(node.items ?? []).map((child) => (
            <SchemaNode
              key={child.id}
              node={child}
              depth={depth + 1}
              expanded={expanded}
              selectedId={selectedId}
              onToggle={onToggle}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function collectDefaultOpen(nodes, set) {
  for (const n of nodes) {
    if (n.defaultExpanded) set.add(n.id);
    if (n.items) collectDefaultOpen(n.items, set);
  }
  return set;
}

/**
 * DfSchemaTree — searchable, expandable data-source explorer
 * (Alkyra `alk-schema-discovery`). Renders a recursive tree of schemas /
 * tables / columns with per-node icons, tone badges and an optional header
 * summary. Search filters and auto-expands matching branches; rows flagged
 * `selectable` emit `onSelect`.
 */
export function DfSchemaTree({
  title,
  summary,
  nodes = [],
  searchable = true,
  searchPlaceholder = 'Search schema…',
  selectedId,
  onSelect,
  onToggle,
  emptyText = 'No objects to show.',
  noResultsText = 'No matches.',
  className = '',
  ...rest
}) {
  const [query, setQuery] = React.useState('');
  const [expanded, setExpanded] = React.useState(() => collectDefaultOpen(nodes, new Set()));
  const [internalSel, setInternalSel] = React.useState(null);
  const sel = selectedId !== undefined ? selectedId : internalSel;

  const toggle = (id) => {
    setExpanded((s) => {
      const n = new Set(s);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
    onToggle?.(id);
  };
  const select = (node) => {
    if (selectedId === undefined) setInternalSel(node.id);
    onSelect?.(node);
  };

  const q = query.trim().toLowerCase();
  const visible = q ? nodes.map((n) => filterNode(n, q)).filter(Boolean) : nodes;

  return (
    <div className={['df-schema', className].filter(Boolean).join(' ')} {...rest}>
      {(title || summary) && (
        <div className="df-schema__head">
          {title && <span className="df-schema__title">{title}</span>}
          {summary && <span className="df-schema__summary">{summary}</span>}
        </div>
      )}

      {searchable && (
        <div className="tia-input tia-input--sm">
          <span className="tia-input__icon" aria-hidden="true"><i className="fa-solid fa-magnifying-glass" /></span>
          <input
            className="tia-input__field"
            value={query}
            placeholder={searchPlaceholder}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button type="button" className="tia-input__icon" style={{ border: 0, background: 'transparent', cursor: 'pointer', padding: 0 }} aria-label="Clear" onClick={() => setQuery('')}>
              <i className="fa-solid fa-xmark" />
            </button>
          )}
        </div>
      )}

      <div className="df-schema__tree" role="tree">
        {visible.length === 0 ? (
          <div className="df-schema__state">
            <span className="df-schema__state-ico"><i className={`fa-solid ${q ? 'fa-magnifying-glass' : 'fa-database'}`} /></span>
            <span>{q ? noResultsText : emptyText}</span>
          </div>
        ) : (
          visible.map((node) => (
            <SchemaNode
              key={node.id}
              node={node}
              depth={0}
              expanded={expanded}
              selectedId={sel}
              onToggle={toggle}
              onSelect={select}
            />
          ))
        )}
      </div>
    </div>
  );
}
