import React from 'react';

const ICONS = {
  error: 'fa-solid fa-circle-xmark',
  warning: 'fa-solid fa-triangle-exclamation',
  info: 'fa-solid fa-circle-info',
};

/**
 * DfFailViewer — validation / execution message list (Alkyra `akn-fail-viewer`).
 *
 * Stacks field-level messages, each colour-coded by level (error / warning /
 * info) with a leading status icon, a bold field title and an explanation line.
 * Use it for wizard validation, export pre-flight checks and execution faults.
 */
export function DfFailViewer({ messages = [], className = '', ...rest }) {
  return (
    <div className={['df-fails', className].filter(Boolean).join(' ')} role="list" {...rest}>
      {messages.map((m, i) => {
        const level = m.level === 'error' || m.level === 'warning' ? m.level : m.level === 'info' ? 'info' : 'error';
        return (
          <div className={`df-fail df-fail--${level}`} role="listitem" key={i}>
            <i className={`df-fail__ico ${ICONS[level]}`} aria-hidden="true" />
            <div style={{ minWidth: 0 }}>
              {m.field && <p className="df-fail__field">{m.field}</p>}
              <p className="df-fail__msg">{m.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
