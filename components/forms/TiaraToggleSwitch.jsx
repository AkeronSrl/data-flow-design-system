import React from 'react';

/** TiaraToggleSwitch — on/off switch with optional label. */
export function TiaraToggleSwitch({ label, className = '', ...rest }) {
  return (
    <label className={['tia-switch', className].filter(Boolean).join(' ')}>
      <input type="checkbox" role="switch" {...rest} />
      <span className="tia-switch__track" aria-hidden="true">
        <span className="tia-switch__thumb" />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
