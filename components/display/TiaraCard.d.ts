import * as React from 'react';

/** Surface container (panel) with an optional titled header. */
export interface TiaraCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional header title; omit for a bare surface. */
  title?: React.ReactNode;
  /** Node rendered at the right of the header (e.g. a button). */
  headerActions?: React.ReactNode;
  /** Drop the elevation shadow. @default false */
  flat?: boolean;
  /** Extra class on the body wrapper. */
  bodyClassName?: string;
}

export declare function TiaraCard(props: TiaraCardProps): React.JSX.Element;
