import * as React from 'react';

export type TiaraAlertVariant = 'info' | 'success' | 'warning' | 'error';

/** Inline contextual message banner with a leading status icon. */
export interface TiaraAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Severity — drives colour + icon. @default 'info' */
  variant?: TiaraAlertVariant;
  /** Bold title line. */
  title?: React.ReactNode;
  /** Optional trailing action node (e.g. a ghost button). */
  action?: React.ReactNode;
}

export declare function TiaraAlert(props: TiaraAlertProps): React.JSX.Element;
