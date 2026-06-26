import React from 'react';

const STATUS_ICON = {
  succeeded: 'fa-circle-check',
  failed: 'fa-circle-xmark',
  warning: 'fa-circle-exclamation',
  running: 'fa-clock',
};
const DETAIL_ICON = { ok: 'fa-circle-check', ko: 'fa-circle-xmark', warning: 'fa-circle-exclamation' };

function ExecRow({ exec, expanded, onToggle, onOpenAudit }) {
  const status = STATUS_ICON[exec.status] ? exec.status : 'running';
  const details = exec.details || [];
  return (
    <div className="df-exec__row">
      <button type="button" className="df-exec__summary" onClick={() => onToggle(exec.id)} aria-expanded={expanded}>
        <span className={`df-exec__status df-exec__status--${status}`} aria-hidden="true">
          <i className={`fa-solid ${STATUS_ICON[status]}`} />
        </span>
        <span className="df-exec__cell"><span className="df-exec__cell-label">Pipeline</span><span className="df-exec__cell-value df-exec__cell-value--strong" title={exec.pipeline}>{exec.pipeline}</span></span>
        <span className="df-exec__cell"><span className="df-exec__cell-label">Status</span><span className="df-exec__cell-value" title={exec.statusText}>{exec.statusText}</span></span>
        <span className="df-exec__cell"><span className="df-exec__cell-label">Workspace</span><span className="df-exec__cell-value">{exec.workspace}</span></span>
        <span className="df-exec__cell"><span className="df-exec__cell-label">Started</span><span className="df-exec__cell-value">{exec.startTime}</span></span>
        <span className="df-exec__cell df-exec__cell--num"><span className="df-exec__cell-label">Duration</span><span className="df-exec__cell-value">{exec.duration}</span></span>
        <span className="df-exec__cell"><span className="df-exec__cell-label">User</span><span className="df-exec__cell-value">{exec.user}</span></span>
        {details.length > 0
          ? <i className={['fa-solid fa-chevron-right df-exec__chev', expanded && 'df-exec__chev--open'].filter(Boolean).join(' ')} aria-hidden="true" />
          : <span style={{ width: 12 }} />}
      </button>

      {expanded && details.length > 0 && (
        <div className="df-exec__details">
          {details.map((d, i) => {
            const di = DETAIL_ICON[d.outcome] || DETAIL_ICON.ok;
            return (
              <div className="df-exec__detail" key={i}>
                <i className={`fa-solid ${di} df-exec__detail-ico df-exec__detail-ico--${d.outcome || 'ok'}`} aria-hidden="true" />
                <span className="df-exec__detail-name" title={d.description}>{d.description}</span>
                <span className="df-exec__detail-meta">{d.occurredAt}</span>
                <span className="df-exec__detail-meta df-exec__detail-meta--num">{d.duration}</span>
                <span className="df-exec__detail-meta">{d.user}</span>
              </div>
            );
          })}
          {onOpenAudit && exec.hasAudit && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 4 }}>
              <button type="button" className="tia-btn tia-btn--outline-secondary tia-btn--sm" onClick={() => onOpenAudit(exec)}>
                Open data audit
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * DfExecutionLog — pipeline execution monitor (Alkyra `alk-logs`).
 *
 * A list of execution rows, each status-coded (succeeded / failed / warning /
 * running) with pipeline, status text, workspace, start time, duration and
 * user. Rows with step details expand to a per-step breakdown and an optional
 * "open data audit" action. Single row open at a time by default, or
 * `multiExpand` for several.
 */
export function DfExecutionLog({
  executions = [],
  defaultExpandedId = null,
  multiExpand = false,
  onOpenAudit,
  className = '',
  ...rest
}) {
  const [open, setOpen] = React.useState(() => (defaultExpandedId ? [defaultExpandedId] : []));
  const toggle = (id) => {
    setOpen((cur) => {
      if (multiExpand) return cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
      return cur.includes(id) ? [] : [id];
    });
  };

  return (
    <div className={['df-exec', className].filter(Boolean).join(' ')} {...rest}>
      {executions.map((exec) => (
        <ExecRow key={exec.id} exec={exec} expanded={open.includes(exec.id)} onToggle={toggle} onOpenAudit={onOpenAudit} />
      ))}
    </div>
  );
}
