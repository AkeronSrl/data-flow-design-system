import React from 'react';

const KNOWN = ['string', 'number', 'date', 'datetime', 'boolean'];

/**
 * DfDataTypeChip — monospace chip naming a column's data type, colour-coded by
 * family (string / number / date / boolean), with an optional cast badge.
 * Sourced from the Alkyra column preview-grid type chips.
 */
export function DfDataTypeChip({ type = 'string', label, cast = false, className = '', ...rest }) {
  const family = KNOWN.includes(type) ? type : 'string';
  return (
    <span className={['df-type', className].filter(Boolean).join(' ')} {...rest}>
      <span className={`df-type__chip df-type__chip--${family}`}>{label ?? type}</span>
      {cast && <span className="df-type__cast" title="Cast applied" aria-label="Cast applied">C</span>}
    </span>
  );
}
