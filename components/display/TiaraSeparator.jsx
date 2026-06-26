import React from 'react';

/** TiaraSeparator — thin divider, horizontal or vertical. */
export function TiaraSeparator({ orientation = 'horizontal', className = '', style, ...rest }) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={['tia-sep', orientation === 'vertical' ? 'tia-sep--v' : 'tia-sep--h', className].filter(Boolean).join(' ')}
      style={style}
      {...rest}
    />
  );
}
