import * as React from 'react';

export type TiaraButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-danger'
  | 'ghost';

export type TiaraButtonSize = 'xs' | 'sm' | 'md' | 'lg';

/**
 * Branded button. Use `primary` for the single most important action on a
 * view, `secondary`/`ghost` for everything else, and the status fills for
 * destructive or confirming actions.
 *
 * @startingPoint section="Forms" subtitle="Branded button — all variants & sizes" viewport="700x150"
 */
export interface TiaraButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default 'primary' */
  variant?: TiaraButtonVariant;
  /** Control height. @default 'md' */
  size?: TiaraButtonSize;
  /** Icon node rendered before the label. */
  leftIcon?: React.ReactNode;
  /** Icon node rendered after the label. */
  rightIcon?: React.ReactNode;
  /** Shows a spinner and disables the button. @default false */
  loading?: boolean;
}

export declare function TiaraButton(props: TiaraButtonProps): React.JSX.Element;
