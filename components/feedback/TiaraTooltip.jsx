import React from 'react';

/** TiaraTooltip — hover label wrapping its trigger child. CSS-only reveal. */
export function TiaraTooltip({ label, children, className = '', ...rest }) {
  return (
    <span className={['tia-tooltip', className].filter(Boolean).join(' ')} {...rest}>
      {children}
      <span className="tia-tooltip__bubble" role="tooltip">{label}</span>
    </span>
  );
}
