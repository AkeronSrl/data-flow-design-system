import * as React from 'react';

/** Hover tooltip wrapping its trigger child (revealed on hover/focus). */
export interface TiaraTooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tooltip content. */
  label: React.ReactNode;
  /** The trigger element. */
  children: React.ReactNode;
}

export declare function TiaraTooltip(props: TiaraTooltipProps): React.JSX.Element;
