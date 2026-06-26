import React from 'react';

/**
 * TiaraButton — the primary action control of the Tiara design system.
 * Variants map to the brand's button token sets; sizes match the Figma scale.
 */
export function TiaraButton({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const isDisabled = disabled || loading;
  const cls = ['tia-btn', `tia-btn--${variant}`, `tia-btn--${size}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={cls} disabled={isDisabled} aria-busy={loading || undefined} {...rest}>
      {loading ? (
        <svg className="tia-btn__spinner" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
          <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      ) : (
        leftIcon && <span className="tia-btn__ico" aria-hidden="true">{leftIcon}</span>
      )}
      {children}
      {!loading && rightIcon && <span className="tia-btn__ico" aria-hidden="true">{rightIcon}</span>}
    </button>
  );
}
