import * as React from 'react';

/**
 * Data Flow top bar: view title + optional subtitle on the left, a flexible
 * center slot, and a right-aligned action/avatar cluster.
 */
export interface DfHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Current view title (large, bold). */
  title?: React.ReactNode;
  /** Secondary line under the title (e.g. workspace path). */
  subtitle?: React.ReactNode;
  /** Node rendered before the title (back button, breadcrumb). */
  lead?: React.ReactNode;
  /** Centered slot (e.g. global search, environment switcher). */
  center?: React.ReactNode;
  /** Right-aligned cluster (buttons, status, avatar). */
  actions?: React.ReactNode;
}

export declare function DfHeader(props: DfHeaderProps): React.JSX.Element;

/** Thin vertical divider for separating clusters of header actions. */
export declare function DfHeaderDivider(): React.JSX.Element;
