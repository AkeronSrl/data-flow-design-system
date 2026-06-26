import React from 'react';

/** TiaraProgressBar — determinate horizontal progress (0–100). */
export function TiaraProgressBar({ value = 0, className = '', ...rest }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={['tia-progress', className].filter(Boolean).join(' ')} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} {...rest}>
      <div className="tia-progress__fill" style={{ width: `${pct}%` }} />
    </div>
  );
}
