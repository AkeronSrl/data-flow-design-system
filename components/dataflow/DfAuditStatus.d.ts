import * as React from 'react';

/**
 * Compact audit-snapshot status pill for a pipeline: label + enabled/disabled
 * state + retained copy count when enabled.
 */
export interface DfAuditStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether audit snapshots are on. */
  enabled?: boolean;
  /** Number of retained snapshot copies (shown only when enabled). */
  maxCopies?: number;
  label?: React.ReactNode;
  enabledText?: React.ReactNode;
  disabledText?: React.ReactNode;
  copiesLabel?: React.ReactNode;
}

export declare function DfAuditStatus(props: DfAuditStatusProps): React.JSX.Element;
