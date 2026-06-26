import * as React from 'react';

export interface DfFailMessage {
  /** Severity — drives colour and icon. Anything other than the three maps to error. */
  level: 'error' | 'warning' | 'info';
  /** Bold title, typically the offending field or step name. */
  field?: React.ReactNode;
  /** The message body. */
  message: React.ReactNode;
}

/**
 * Colour-coded list of validation / execution messages, grouped by severity.
 */
export interface DfFailViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  messages?: DfFailMessage[];
}

export declare function DfFailViewer(props: DfFailViewerProps): React.JSX.Element;
