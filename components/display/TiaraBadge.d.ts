import * as React from 'react';

export type TiaraBadgeMode = 'word' | 'number' | 'dot' | 'dot-word';
export type TiaraBadgeType = 'solid' | 'light';
export type TiaraBadgeColor =
  | 'accent' | 'neutral' | 'red' | 'dark-red' | 'orange' | 'amber'
  | 'green' | 'blue' | 'purple' | 'dark-purple' | 'pink' | 'dark-pink';

/**
 * Compact status / count label. `solid` fills with the hue, `light` shows
 * coloured text only. `dot` and `dot-word` modes draw a status dot.
 */
export interface TiaraBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Rendering mode. @default 'word' */
  mode?: TiaraBadgeMode;
  /** Fill style. @default 'solid' */
  type?: TiaraBadgeType;
  /** Colour hue. @default 'accent' */
  color?: TiaraBadgeColor;
  /** Size. @default 'sm' */
  size?: 'sm' | 'lg';
  /** Text label (or use children). */
  text?: React.ReactNode;
  /** Number for `number` mode. */
  count?: number;
}

export declare function TiaraBadge(props: TiaraBadgeProps): React.JSX.Element;
