import React from 'react';

/** TiaraSkeleton — shimmering placeholder while content loads. */
export function TiaraSkeleton({ shape = 'text', width, height, className = '', style, ...rest }) {
  const cls = ['tia-skel', shape === 'text' && 'tia-skel--text', shape === 'circle' && 'tia-skel--circle', className].filter(Boolean).join(' ');
  return <span className={cls} style={{ display: 'block', width, height, ...style }} {...rest} />;
}
