import React from 'react';

/**
 * TiaraIconButton — square, icon-only button. Pass a FontAwesome <i> or any
 * icon node as `icon`. Always supply `aria-label`.
 */
export function TiaraIconButton({
  icon,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['tia-iconbtn', `tia-iconbtn--${variant}`, `tia-iconbtn--${size}`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <button className={cls} disabled={disabled} {...rest}>
      <span aria-hidden="true">{icon}</span>
    </button>
  );
}
