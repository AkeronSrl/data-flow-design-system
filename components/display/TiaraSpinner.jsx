import React from 'react';

const SIZES = { sm: 16, md: 24, lg: 36 };

/** TiaraSpinner — indeterminate loading spinner. */
export function TiaraSpinner({ size = 'md', className = '', style, ...rest }) {
  const px = SIZES[size] || size;
  return <span className={['tia-spinner', className].filter(Boolean).join(' ')} style={{ width: px, height: px, ...style }} role="status" aria-label="Caricamento" {...rest} />;
}
