import React from 'react';

/** TiaraCard — surface container with optional title header. */
export function TiaraCard({ title, headerActions, flat = false, children, className = '', bodyClassName = '', ...rest }) {
  return (
    <div className={['tia-card', flat && 'tia-card--flat', className].filter(Boolean).join(' ')} {...rest}>
      {title && (
        <div className="tia-card__header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--spacing-3)' }}>
          <h3 className="tia-card__title">{title}</h3>
          {headerActions}
        </div>
      )}
      <div className={['tia-card__body', bodyClassName].filter(Boolean).join(' ')}>{children}</div>
    </div>
  );
}
