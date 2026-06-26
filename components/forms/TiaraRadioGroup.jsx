import React from 'react';

/** TiaraRadioGroup — vertical group of radio options sharing a `name`. */
export function TiaraRadioGroup({ name, value, onChange, options = [], className = '' }) {
  return (
    <div className={['tia-radiogroup', className].filter(Boolean).join(' ')} role="radiogroup" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
      {options.map((opt) => (
        <label className="tia-check" key={opt.value}>
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange && onChange(opt.value)}
            disabled={opt.disabled}
          />
          <span className="tia-check__box tia-radio__box" aria-hidden="true">
            <span className="tia-radio__dot" />
          </span>
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
