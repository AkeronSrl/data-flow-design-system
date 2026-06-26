import React from 'react';

/** TiaraStatCard — KPI tile: label, value, optional icon and delta. */
export function TiaraStatCard({ label, value, icon, delta, className = '', ...rest }) {
  return (
    <div className={['tia-stat', className].filter(Boolean).join(' ')} {...rest}>
      {icon && <span className="tia-stat__icon" aria-hidden="true">{icon}</span>}
      <div style={{ minWidth: 0 }}>
        <p className="tia-stat__label">{label}</p>
        <p className="tia-stat__value">{value}</p>
      </div>
      {delta != null && (
        <span className={`tia-stat__delta tia-stat__delta--${delta.startsWith('-') ? 'down' : 'up'}`}>
          {delta}
        </span>
      )}
    </div>
  );
}
