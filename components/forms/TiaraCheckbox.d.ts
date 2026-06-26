import * as React from 'react';

/** Labelled checkbox; fills with the brand accent when checked. */
export interface TiaraCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Text label rendered next to the box. */
  label?: React.ReactNode;
}

export declare function TiaraCheckbox(props: TiaraCheckboxProps): React.JSX.Element;
