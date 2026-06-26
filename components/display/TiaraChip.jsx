import React from 'react';

/** TiaraChip — removable token for filters and selections. */
export function TiaraChip({ label, accent = false, onRemove, className = '', children, ...rest }) {
  return (
    <span className={['tia-chip', accent && 'tia-chip--accent', className].filter(Boolean).join(' ')} {...rest}>
      {children ?? label}
      {onRemove && (
        <button type="button" className="tia-chip__close" aria-label="Rimuovi" onClick={onRemove}>
          <i className="fa-solid fa-xmark" style={{ fontSize: 10 }} />
        </button>
      )}
    </span>
  );
}
