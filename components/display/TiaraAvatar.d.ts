import * as React from 'react';

/** Circular avatar — renders an image when `src` is set, else `initials`. */
export interface TiaraAvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. */
  src?: string;
  /** Fallback initials shown when there is no image. */
  initials?: string;
  /** Size. @default 'md' */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /** Alt text for the image. */
  alt?: string;
}

export declare function TiaraAvatar(props: TiaraAvatarProps): React.JSX.Element;
