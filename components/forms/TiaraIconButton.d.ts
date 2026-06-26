import * as React from 'react';

export type TiaraIconButtonVariant = 'ghost' | 'secondary' | 'primary';
export type TiaraIconButtonSize = 'xs' | 'sm' | 'md' | 'lg';

/**
 * Square icon-only button — toolbar actions, row actions, close affordances.
 * `aria-label` is required for accessibility.
 */
export interface TiaraIconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Icon node (e.g. a FontAwesome <i> element). */
  icon: React.ReactNode;
  /** Visual style. @default 'ghost' */
  variant?: TiaraIconButtonVariant;
  /** Control size. @default 'md' */
  size?: TiaraIconButtonSize;
  /** Accessible label describing the action. */
  'aria-label': string;
}

export declare function TiaraIconButton(props: TiaraIconButtonProps): React.JSX.Element;
