import * as React from 'react';

export interface TiaraRadioOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

/** Vertical group of mutually-exclusive radio options. */
export interface TiaraRadioGroupProps {
  /** Shared input name. */
  name: string;
  /** Currently selected value. */
  value?: string;
  /** Called with the newly selected value. */
  onChange?: (value: string) => void;
  /** The options to render. */
  options: TiaraRadioOption[];
  className?: string;
}

export declare function TiaraRadioGroup(props: TiaraRadioGroupProps): React.JSX.Element;
