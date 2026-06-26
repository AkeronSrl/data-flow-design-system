import React from 'react';

/**
 * DfAuditStatus — compact pill summarising a pipeline's audit-snapshot setting
 * (Alkyra `alk-pipeline-audit-status`). Shows an uppercase label, an
 * enabled/disabled state pill (green when on) and, when enabled, the retained
 * copy count.
 */
export function DfAuditStatus({
  enabled = false,
  maxCopies = 1,
  label = 'Audit',
  enabledText = 'Enabled',
  disabledText = 'Disabled',
  copiesLabel = 'Copies',
  className = '',
  ...rest
}) {
  return (
    <div className={['df-audit', enabled && 'df-audit--on', className].filter(Boolean).join(' ')} {...rest}>
      <span className="df-audit__label">{label}</span>
      <span className="df-audit__value">{enabled ? enabledText : disabledText}</span>
      {enabled && <span className="df-audit__copies">{copiesLabel}: {maxCopies}</span>}
    </div>
  );
}
