import React from 'react';

/** TiaraSelect — styled native select with a chevron affordance. */
export function TiaraSelect({ options = [], placeholder, className = '', ...rest }) {
  return (
    <div className={['tia-select', className].filter(Boolean).join(' ')}>
      <select {...rest}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className="tia-select__chevron" aria-hidden="true"><i className="fa-solid fa-chevron-down" /></span>
    </div>
  );
}
