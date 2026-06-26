import * as React from 'react';

/** Thin divider line. */
export interface TiaraSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';
}

export declare function TiaraSeparator(props: TiaraSeparatorProps): React.JSX.Element;
