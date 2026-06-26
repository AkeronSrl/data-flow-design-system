import React from 'react';

/** TiaraTabs — underline tab bar. Controlled via `value` / `onChange`. */
export function TiaraTabs({ tabs = [], value, onChange, className = '', ...rest }) {
  return (
    <div className={['tia-tabs', className].filter(Boolean).join(' ')} role="tablist" {...rest}>
      {tabs.map((tab) => {
        const active = tab.value === value;
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={active}
            className={['tia-tab', active && 'tia-tab--active'].filter(Boolean).join(' ')}
            onClick={() => onChange && onChange(tab.value)}
          >
            {tab.icon && <span aria-hidden="true" style={{ marginRight: 6 }}>{tab.icon}</span>}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
