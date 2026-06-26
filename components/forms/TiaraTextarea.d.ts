import * as React from 'react';

/** Multi-line text field, vertically resizable. */
export interface TiaraTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Initial visible rows. @default 3 */
  rows?: number;
}

export declare function TiaraTextarea(props: TiaraTextareaProps): React.JSX.Element;
