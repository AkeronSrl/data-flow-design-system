import React from 'react';

const ICONS = {
  info: 'fa-circle-info',
  success: 'fa-circle-check',
  warning: 'fa-triangle-exclamation',
  error: 'fa-circle-exclamation',
};

/** TiaraAlert — inline contextual message banner. */
export function TiaraAlert({ variant = 'info', title, action, children, className = '', ...rest }) {
  return (
    <div className={['tia-alert', `tia-alert--${variant}`, className].filter(Boolean).join(' ')} role="alert" {...rest}>
      <span className="tia-alert__icon" aria-hidden="true"><i className={`fa-solid ${ICONS[variant]}`} /></span>
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <p className="tia-alert__title">{title}</p>}
        {children && <p className="tia-alert__body">{children}</p>}
      </div>
      {action}
    </div>
  );
}
