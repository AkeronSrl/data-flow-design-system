import React from 'react';

/**
 * DfWizardStep — titled content container for a single wizard step (Alkyra
 * `tiara-suite-wizard-step`). Renders a step title + subtitle header above the
 * step body; drop it inside a DfFlowWizard step's content.
 */
export function DfWizardStep({ title, subtitle, children, className = '', ...rest }) {
  return (
    <div className={['df-step', className].filter(Boolean).join(' ')} {...rest}>
      {(title || subtitle) && (
        <div className="df-step__head">
          {title && <h3 className="df-step__title">{title}</h3>}
          {subtitle && <p className="df-step__subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="df-step__body">{children}</div>
    </div>
  );
}
