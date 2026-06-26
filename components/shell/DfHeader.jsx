import React from 'react';

/**
 * DfHeader — the Data Flow top bar (Alkyra `app-header`).
 *
 * A sticky, hairline-bordered surface that shows the current view title (and
 * optional subtitle / breadcrumb node), a flexible center slot, and a
 * right-aligned cluster for actions, status and the user avatar.
 */
export function DfHeader({ title, subtitle, lead, center, actions, className = '', ...rest }) {
  return (
    <header className={['df-header', className].filter(Boolean).join(' ')} {...rest}>
      {lead}
      {(title || subtitle) && (
        <div>
          {title && <h1 className="df-header__title">{title}</h1>}
          {subtitle && <p className="df-header__subtitle">{subtitle}</p>}
        </div>
      )}
      {center && <div className="df-header__center">{center}</div>}
      {actions && <div className="df-header__right">{actions}</div>}
    </header>
  );
}

/** Thin vertical divider for separating clusters of header actions. */
export function DfHeaderDivider() {
  return <span className="df-header__divider" aria-hidden="true" />;
}
