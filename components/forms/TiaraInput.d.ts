import * as React from 'react';

export type TiaraInputSize = 'sm' | 'md' | 'lg';
export type TiaraInputState = 'default' | 'success' | 'warning' | 'error';

/**
 * Single-line text input. The wrapper carries the border, hover and focus
 * ring; the inner field is borderless. Supports a leading icon and a clear
 * button.
 */
export interface TiaraInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Control height. @default 'sm' */
  inputSize?: TiaraInputSize;
  /** Validation state — drives border / ring color. @default 'default' */
  state?: TiaraInputState;
  /** Icon node rendered at the start of the field. */
  leftIcon?: React.ReactNode;
  /** Show a clear (×) button when there is a value. @default false */
  clearable?: boolean;
  /** Called when the clear button is pressed. */
  onClear?: () => void;
}

export declare function TiaraInput(props: TiaraInputProps): React.JSX.Element;
