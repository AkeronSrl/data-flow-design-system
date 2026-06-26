import React from 'react';

/**
 * TiaraInput — single-line text field with optional left icon, clear button
 * and validation state. Wrapper owns the border; the inner input is bare.
 */
export function TiaraInput({
  inputSize = 'sm',
  state = 'default',
  leftIcon,
  clearable = false,
  onClear,
  disabled = false,
  className = '',
  value,
  ...rest
}) {
  const cls = [
    'tia-input',
    `tia-input--${inputSize}`,
    state !== 'default' && `tia-input--${state}`,
    disabled && 'tia-input--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cls}>
      {leftIcon && <span className="tia-input__icon" aria-hidden="true">{leftIcon}</span>}
      <input className="tia-input__field" disabled={disabled} value={value} {...rest} />
      {clearable && !disabled && value && (
        <button
          type="button"
          className="tia-input__icon"
          style={{ border: 0, background: 'transparent', cursor: 'pointer', padding: 0 }}
          aria-label="Clear"
          onClick={onClear}
          tabIndex={-1}
        >
          <i className="fa-solid fa-xmark" />
        </button>
      )}
    </div>
  );
}
