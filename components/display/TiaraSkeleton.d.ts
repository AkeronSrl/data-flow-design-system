import * as React from 'react';

/** Shimmering placeholder for loading states. */
export interface TiaraSkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'text' */
  shape?: 'text' | 'rect' | 'circle';
  /** CSS width (e.g. '120px', '60%'). */
  width?: string | number;
  /** CSS height. */
  height?: string | number;
}

export declare function TiaraSkeleton(props: TiaraSkeletonProps): React.JSX.Element;
