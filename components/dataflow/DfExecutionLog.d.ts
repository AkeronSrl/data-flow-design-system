import * as React from 'react';

export interface DfExecutionDetail {
  /** Step outcome — drives the icon colour. */
  outcome?: 'ok' | 'ko' | 'warning';
  /** Step description. */
  description?: React.ReactNode;
  /** When the step ran (formatted). */
  occurredAt?: React.ReactNode;
  /** Step duration (formatted, e.g. "1.2s"). */
  duration?: React.ReactNode;
  /** Who triggered it. */
  user?: React.ReactNode;
}

export interface DfExecution {
  /** Stable id (correlation id). */
  id: string;
  /** Overall state. */
  status: 'succeeded' | 'failed' | 'warning' | 'running' | string;
  /** Pipeline name. */
  pipeline?: React.ReactNode;
  /** Human status line. */
  statusText?: React.ReactNode;
  workspace?: React.ReactNode;
  /** Start timestamp (formatted). */
  startTime?: React.ReactNode;
  /** Total duration (formatted). */
  duration?: React.ReactNode;
  user?: React.ReactNode;
  /** Per-step breakdown shown when the row is expanded. */
  details?: DfExecutionDetail[];
  /** Enables the "open data audit" action in the expanded panel. */
  hasAudit?: boolean;
}

/**
 * Execution monitor: a list of status-coded, expandable pipeline-run rows with
 * a per-step detail breakdown.
 */
export interface DfExecutionLogProps extends React.HTMLAttributes<HTMLDivElement> {
  executions?: DfExecution[];
  /** Row expanded on mount. */
  defaultExpandedId?: string | null;
  /** Allow several rows open at once. */
  multiExpand?: boolean;
  /** Fired when "open data audit" is clicked (requires `hasAudit`). */
  onOpenAudit?: (execution: DfExecution) => void;
}

export declare function DfExecutionLog(props: DfExecutionLogProps): React.JSX.Element;
