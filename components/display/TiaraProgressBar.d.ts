import * as React from 'react';

/** Determinate horizontal progress bar. */
export interface TiaraProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Progress 0–100. @default 0 */
  value?: number;
}

export declare function TiaraProgressBar(props: TiaraProgressBarProps): React.JSX.Element;
