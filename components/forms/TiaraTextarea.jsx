import React from 'react';

/** TiaraTextarea — multi-line text field, vertically resizable. */
export function TiaraTextarea({ rows = 3, className = '', ...rest }) {
  return <textarea className={['tia-textarea', className].filter(Boolean).join(' ')} rows={rows} {...rest} />;
}
