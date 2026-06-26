import * as React from 'react';

/** On/off switch; fills with the brand accent when on. */
export interface TiaraToggleSwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional text label after the switch. */
  label?: React.ReactNode;
}

export declare function TiaraToggleSwitch(props: TiaraToggleSwitchProps): React.JSX.Element;
