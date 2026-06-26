import React from 'react';

/** TiaraCheckbox — labelled checkbox using the brand accent when checked. */
export function TiaraCheckbox({ label, className = '', ...rest }) {
  return (
    <label className={['tia-check', className].filter(Boolean).join(' ')}>
      <input type="checkbox" {...rest} />
      <span className="tia-check__box" aria-hidden="true">
        <svg viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
