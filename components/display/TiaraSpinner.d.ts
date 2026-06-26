import * as React from 'react';

/** Indeterminate loading spinner. */
export interface TiaraSpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Named size or a pixel number. @default 'md' */
  size?: 'sm' | 'md' | 'lg' | number;
}

export declare function TiaraSpinner(props: TiaraSpinnerProps): React.JSX.Element;
