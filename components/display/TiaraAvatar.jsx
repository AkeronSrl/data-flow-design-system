import React from 'react';

/** TiaraAvatar — circular user mark; shows image, else initials. */
export function TiaraAvatar({ src, initials, size = 'md', alt = '', className = '', style, ...rest }) {
  return (
    <span className={['tia-avatar', `tia-avatar--${size}`, className].filter(Boolean).join(' ')} style={style} {...rest}>
      {src ? <img src={src} alt={alt} /> : initials}
    </span>
  );
}
