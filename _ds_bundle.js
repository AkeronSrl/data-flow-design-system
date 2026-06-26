/* @ds-bundle: {"format":3,"namespace":"TiaraDesignSystemNyma_96297e","components":[{"name":"TiaraAvatar","sourcePath":"components/display/TiaraAvatar.jsx"},{"name":"TiaraBadge","sourcePath":"components/display/TiaraBadge.jsx"},{"name":"TiaraCard","sourcePath":"components/display/TiaraCard.jsx"},{"name":"TiaraChip","sourcePath":"components/display/TiaraChip.jsx"},{"name":"TiaraProgressBar","sourcePath":"components/display/TiaraProgressBar.jsx"},{"name":"TiaraSeparator","sourcePath":"components/display/TiaraSeparator.jsx"},{"name":"TiaraSkeleton","sourcePath":"components/display/TiaraSkeleton.jsx"},{"name":"TiaraSpinner","sourcePath":"components/display/TiaraSpinner.jsx"},{"name":"TiaraStatCard","sourcePath":"components/display/TiaraStatCard.jsx"},{"name":"TiaraAlert","sourcePath":"components/feedback/TiaraAlert.jsx"},{"name":"TiaraTooltip","sourcePath":"components/feedback/TiaraTooltip.jsx"},{"name":"TiaraButton","sourcePath":"components/forms/TiaraButton.jsx"},{"name":"TiaraCheckbox","sourcePath":"components/forms/TiaraCheckbox.jsx"},{"name":"TiaraIconButton","sourcePath":"components/forms/TiaraIconButton.jsx"},{"name":"TiaraInput","sourcePath":"components/forms/TiaraInput.jsx"},{"name":"TiaraRadioGroup","sourcePath":"components/forms/TiaraRadioGroup.jsx"},{"name":"TiaraSelect","sourcePath":"components/forms/TiaraSelect.jsx"},{"name":"TiaraTextarea","sourcePath":"components/forms/TiaraTextarea.jsx"},{"name":"TiaraToggleSwitch","sourcePath":"components/forms/TiaraToggleSwitch.jsx"},{"name":"TiaraBreadcrumb","sourcePath":"components/navigation/TiaraBreadcrumb.jsx"},{"name":"TiaraTabs","sourcePath":"components/navigation/TiaraTabs.jsx"}],"sourceHashes":{"components/display/TiaraAvatar.jsx":"a64552bd421e","components/display/TiaraBadge.jsx":"6575e55b6b2f","components/display/TiaraCard.jsx":"4d648997e54e","components/display/TiaraChip.jsx":"eed62e556a3f","components/display/TiaraProgressBar.jsx":"a48d9013f062","components/display/TiaraSeparator.jsx":"4ba790d22cef","components/display/TiaraSkeleton.jsx":"bf32cdcebe78","components/display/TiaraSpinner.jsx":"10ce5f8557cb","components/display/TiaraStatCard.jsx":"acd4ba7d0d61","components/feedback/TiaraAlert.jsx":"e064ffec11ec","components/feedback/TiaraTooltip.jsx":"96c96c444917","components/forms/TiaraButton.jsx":"5e15403de70b","components/forms/TiaraCheckbox.jsx":"47ed471d8777","components/forms/TiaraIconButton.jsx":"b9dd9ef44fbd","components/forms/TiaraInput.jsx":"ffa8f6d5ef58","components/forms/TiaraRadioGroup.jsx":"c4a2d2bd32a6","components/forms/TiaraSelect.jsx":"c0bc4c86b12f","components/forms/TiaraTextarea.jsx":"80a8214ab116","components/forms/TiaraToggleSwitch.jsx":"73927e56edbf","components/navigation/TiaraBreadcrumb.jsx":"2b44084f00c1","components/navigation/TiaraTabs.jsx":"fb1abe5be93e","ui_kits/nyma-backoffice/kit-app.jsx":"d87957d9967b","ui_kits/nyma-backoffice/kit-screens.jsx":"1afdfcc95b9d","ui_kits/nyma-backoffice/kit-shell.jsx":"4708325408a3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TiaraDesignSystemNyma_96297e = window.TiaraDesignSystemNyma_96297e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/TiaraAvatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** TiaraAvatar — circular user mark; shows image, else initials. */
function TiaraAvatar({
  src,
  initials,
  size = 'md',
  alt = '',
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['tia-avatar', `tia-avatar--${size}`, className].filter(Boolean).join(' '),
    style: style
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : initials);
}
Object.assign(__ds_scope, { TiaraAvatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TiaraAvatar.jsx", error: String((e && e.message) || e) }); }

// components/display/TiaraBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DOT_COLORS = {
  accent: 'var(--color-accent-500)',
  neutral: 'var(--color-neutral-140)',
  red: 'var(--color-badge-red)',
  'dark-red': 'var(--color-badge-dark-red)',
  orange: 'var(--color-badge-orange)',
  amber: 'var(--color-badge-amber)',
  green: 'var(--color-badge-green)',
  blue: 'var(--color-badge-blue)',
  purple: 'var(--color-badge-purple)',
  'dark-purple': 'var(--color-badge-dark-purple)',
  pink: 'var(--color-badge-pink)',
  'dark-pink': 'var(--color-badge-dark-pink)'
};

/**
 * TiaraBadge — compact status / count label. Modes: word, number, dot,
 * dot-word. `type` solid (filled) or light (text-only).
 */
function TiaraBadge({
  mode = 'word',
  type = 'solid',
  color = 'accent',
  size = 'sm',
  text,
  count,
  children,
  className = '',
  ...rest
}) {
  const hue = DOT_COLORS[color] || DOT_COLORS.accent;
  const label = children ?? text ?? count;
  if (mode === 'dot') {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: ['tia-badge__dot', className].filter(Boolean).join(' '),
      style: {
        background: hue
      }
    }, rest));
  }
  if (mode === 'dot-word') {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: ['tia-badge', 'tia-badge--light', size === 'lg' && 'tia-badge--lg', className].filter(Boolean).join(' '),
      style: {
        color: color === 'accent' ? 'var(--color-foreground)' : hue
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      className: "tia-badge__dot",
      style: {
        background: hue
      }
    }), label);
  }
  const cls = ['tia-badge', `tia-badge--${type === 'light' ? 'light' : 'solid'}`, size === 'lg' && 'tia-badge--lg', className].filter(Boolean).join(' ');
  const style = type === 'light' ? {
    color: color === 'accent' ? 'var(--color-foreground-alt3)' : hue
  } : {
    background: hue
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: style
  }, rest), label);
}
Object.assign(__ds_scope, { TiaraBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TiaraBadge.jsx", error: String((e && e.message) || e) }); }

// components/display/TiaraCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** TiaraCard — surface container with optional title header. */
function TiaraCard({
  title,
  headerActions,
  flat = false,
  children,
  className = '',
  bodyClassName = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['tia-card', flat && 'tia-card--flat', className].filter(Boolean).join(' ')
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    className: "tia-card__header",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--spacing-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "tia-card__title"
  }, title), headerActions), /*#__PURE__*/React.createElement("div", {
    className: ['tia-card__body', bodyClassName].filter(Boolean).join(' ')
  }, children));
}
Object.assign(__ds_scope, { TiaraCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TiaraCard.jsx", error: String((e && e.message) || e) }); }

// components/display/TiaraChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** TiaraChip — removable token for filters and selections. */
function TiaraChip({
  label,
  accent = false,
  onRemove,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['tia-chip', accent && 'tia-chip--accent', className].filter(Boolean).join(' ')
  }, rest), children ?? label, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "tia-chip__close",
    "aria-label": "Rimuovi",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    style: {
      fontSize: 10
    }
  })));
}
Object.assign(__ds_scope, { TiaraChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TiaraChip.jsx", error: String((e && e.message) || e) }); }

// components/display/TiaraProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** TiaraProgressBar — determinate horizontal progress (0–100). */
function TiaraProgressBar({
  value = 0,
  className = '',
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['tia-progress', className].filter(Boolean).join(' '),
    role: "progressbar",
    "aria-valuenow": pct,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "tia-progress__fill",
    style: {
      width: `${pct}%`
    }
  }));
}
Object.assign(__ds_scope, { TiaraProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TiaraProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/display/TiaraSeparator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** TiaraSeparator — thin divider, horizontal or vertical. */
function TiaraSeparator({
  orientation = 'horizontal',
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    "aria-orientation": orientation,
    className: ['tia-sep', orientation === 'vertical' ? 'tia-sep--v' : 'tia-sep--h', className].filter(Boolean).join(' '),
    style: style
  }, rest));
}
Object.assign(__ds_scope, { TiaraSeparator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TiaraSeparator.jsx", error: String((e && e.message) || e) }); }

// components/display/TiaraSkeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** TiaraSkeleton — shimmering placeholder while content loads. */
function TiaraSkeleton({
  shape = 'text',
  width,
  height,
  className = '',
  style,
  ...rest
}) {
  const cls = ['tia-skel', shape === 'text' && 'tia-skel--text', shape === 'circle' && 'tia-skel--circle', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      display: 'block',
      width,
      height,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { TiaraSkeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TiaraSkeleton.jsx", error: String((e && e.message) || e) }); }

// components/display/TiaraSpinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 16,
  md: 24,
  lg: 36
};

/** TiaraSpinner — indeterminate loading spinner. */
function TiaraSpinner({
  size = 'md',
  className = '',
  style,
  ...rest
}) {
  const px = SIZES[size] || size;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['tia-spinner', className].filter(Boolean).join(' '),
    style: {
      width: px,
      height: px,
      ...style
    },
    role: "status",
    "aria-label": "Caricamento"
  }, rest));
}
Object.assign(__ds_scope, { TiaraSpinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TiaraSpinner.jsx", error: String((e && e.message) || e) }); }

// components/display/TiaraStatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** TiaraStatCard — KPI tile: label, value, optional icon and delta. */
function TiaraStatCard({
  label,
  value,
  icon,
  delta,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['tia-stat', className].filter(Boolean).join(' ')
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "tia-stat__icon",
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "tia-stat__label"
  }, label), /*#__PURE__*/React.createElement("p", {
    className: "tia-stat__value"
  }, value)), delta != null && /*#__PURE__*/React.createElement("span", {
    className: `tia-stat__delta tia-stat__delta--${delta.startsWith('-') ? 'down' : 'up'}`
  }, delta));
}
Object.assign(__ds_scope, { TiaraStatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TiaraStatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/TiaraAlert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  info: 'fa-circle-info',
  success: 'fa-circle-check',
  warning: 'fa-triangle-exclamation',
  error: 'fa-circle-exclamation'
};

/** TiaraAlert — inline contextual message banner. */
function TiaraAlert({
  variant = 'info',
  title,
  action,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['tia-alert', `tia-alert--${variant}`, className].filter(Boolean).join(' '),
    role: "alert"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "tia-alert__icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${ICONS[variant]}`
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("p", {
    className: "tia-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "tia-alert__body"
  }, children)), action);
}
Object.assign(__ds_scope, { TiaraAlert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/TiaraAlert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/TiaraTooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** TiaraTooltip — hover label wrapping its trigger child. CSS-only reveal. */
function TiaraTooltip({
  label,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['tia-tooltip', className].filter(Boolean).join(' ')
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "tia-tooltip__bubble",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { TiaraTooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/TiaraTooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/TiaraButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TiaraButton — the primary action control of the Tiara design system.
 * Variants map to the brand's button token sets; sizes match the Figma scale.
 */
function TiaraButton({
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
  const cls = ['tia-btn', `tia-btn--${variant}`, `tia-btn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: isDisabled,
    "aria-busy": loading || undefined
  }, rest), loading ? /*#__PURE__*/React.createElement("svg", {
    className: "tia-btn__spinner",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4",
    opacity: "0.25"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
  })) : leftIcon && /*#__PURE__*/React.createElement("span", {
    className: "tia-btn__ico",
    "aria-hidden": "true"
  }, leftIcon), children, !loading && rightIcon && /*#__PURE__*/React.createElement("span", {
    className: "tia-btn__ico",
    "aria-hidden": "true"
  }, rightIcon));
}
Object.assign(__ds_scope, { TiaraButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TiaraButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/TiaraCheckbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** TiaraCheckbox — labelled checkbox using the brand accent when checked. */
function TiaraCheckbox({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['tia-check', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "tia-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.5l2.5 2.5 4.5-5",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { TiaraCheckbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TiaraCheckbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/TiaraIconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TiaraIconButton — square, icon-only button. Pass a FontAwesome <i> or any
 * icon node as `icon`. Always supply `aria-label`.
 */
function TiaraIconButton({
  icon,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['tia-iconbtn', `tia-iconbtn--${variant}`, `tia-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon));
}
Object.assign(__ds_scope, { TiaraIconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TiaraIconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/TiaraInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TiaraInput — single-line text field with optional left icon, clear button
 * and validation state. Wrapper owns the border; the inner input is bare.
 */
function TiaraInput({
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
  const cls = ['tia-input', `tia-input--${inputSize}`, state !== 'default' && `tia-input--${state}`, disabled && 'tia-input--disabled', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    className: "tia-input__icon",
    "aria-hidden": "true"
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    className: "tia-input__field",
    disabled: disabled,
    value: value
  }, rest)), clearable && !disabled && value && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "tia-input__icon",
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      padding: 0
    },
    "aria-label": "Clear",
    onClick: onClear,
    tabIndex: -1
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark"
  })));
}
Object.assign(__ds_scope, { TiaraInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TiaraInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/TiaraRadioGroup.jsx
try { (() => {
/** TiaraRadioGroup — vertical group of radio options sharing a `name`. */
function TiaraRadioGroup({
  name,
  value,
  onChange,
  options = [],
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['tia-radiogroup', className].filter(Boolean).join(' '),
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-2)'
    }
  }, options.map(opt => /*#__PURE__*/React.createElement("label", {
    className: "tia-check",
    key: opt.value
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: opt.value,
    checked: value === opt.value,
    onChange: () => onChange && onChange(opt.value),
    disabled: opt.disabled
  }), /*#__PURE__*/React.createElement("span", {
    className: "tia-check__box tia-radio__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tia-radio__dot"
  })), /*#__PURE__*/React.createElement("span", null, opt.label))));
}
Object.assign(__ds_scope, { TiaraRadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TiaraRadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/TiaraSelect.jsx
try { (() => {
/** TiaraSelect — styled native select with a chevron affordance. */
function TiaraSelect({
  options = [],
  placeholder,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['tia-select', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("select", rest, placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.value,
    value: opt.value,
    disabled: opt.disabled
  }, opt.label))), /*#__PURE__*/React.createElement("span", {
    className: "tia-select__chevron",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-down"
  })));
}
Object.assign(__ds_scope, { TiaraSelect });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TiaraSelect.jsx", error: String((e && e.message) || e) }); }

// components/forms/TiaraTextarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** TiaraTextarea — multi-line text field, vertically resizable. */
function TiaraTextarea({
  rows = 3,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: ['tia-textarea', className].filter(Boolean).join(' '),
    rows: rows
  }, rest));
}
Object.assign(__ds_scope, { TiaraTextarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TiaraTextarea.jsx", error: String((e && e.message) || e) }); }

// components/forms/TiaraToggleSwitch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** TiaraToggleSwitch — on/off switch with optional label. */
function TiaraToggleSwitch({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['tia-switch', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "tia-switch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tia-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { TiaraToggleSwitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TiaraToggleSwitch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TiaraBreadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** TiaraBreadcrumb — path trail; last item is the current page. */
function TiaraBreadcrumb({
  items = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ['tia-breadcrumb', className].filter(Boolean).join(' '),
    "aria-label": "Breadcrumb"
  }, rest), items.map((item, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      className: "tia-breadcrumb__current",
      "aria-current": "page"
    }, item.label) : /*#__PURE__*/React.createElement("a", {
      href: item.href || '#'
    }, item.label), !last && /*#__PURE__*/React.createElement("span", {
      className: "tia-breadcrumb__sep",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-chevron-right",
      style: {
        fontSize: 10
      }
    })));
  }));
}
Object.assign(__ds_scope, { TiaraBreadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TiaraBreadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TiaraTabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** TiaraTabs — underline tab bar. Controlled via `value` / `onChange`. */
function TiaraTabs({
  tabs = [],
  value,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['tia-tabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), tabs.map(tab => {
    const active = tab.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      role: "tab",
      "aria-selected": active,
      className: ['tia-tab', active && 'tia-tab--active'].filter(Boolean).join(' '),
      onClick: () => onChange && onChange(tab.value)
    }, tab.icon && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        marginRight: 6
      }
    }, tab.icon), tab.label);
  }));
}
Object.assign(__ds_scope, { TiaraTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TiaraTabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nyma-backoffice/kit-app.jsx
try { (() => {
/* global React */
// Nyma backoffice — interactive app shell tying screens together.
const {
  NymaSidebar,
  NymaTopBar,
  LoginScreen,
  Dashboard,
  OrdersList,
  OrderDetail
} = window;
function NymaApp() {
  const [authed, setAuthed] = React.useState(false);
  const [nav, setNav] = React.useState('dashboard');
  const [order, setOrder] = React.useState(null);
  if (!authed) return /*#__PURE__*/React.createElement(LoginScreen, {
    onLogin: () => setAuthed(true)
  });
  const openOrder = o => {
    setOrder(o);
    setNav('orders');
  };
  const goto = id => {
    setNav(id);
    setOrder(null);
  };
  let content;
  if (nav === 'orders' && order) content = /*#__PURE__*/React.createElement(OrderDetail, {
    order: order,
    onBack: () => setOrder(null)
  });else if (nav === 'orders') content = /*#__PURE__*/React.createElement(OrdersList, {
    onOpenOrder: openOrder
  });else if (nav === 'dashboard') content = /*#__PURE__*/React.createElement(Dashboard, {
    onOpenOrders: () => goto('orders')
  });else content = /*#__PURE__*/React.createElement(Placeholder, {
    nav: nav
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(NymaSidebar, {
    active: nav,
    onNavigate: goto
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(NymaTopBar, {
    onLogout: () => {
      setAuthed(false);
      setNav('dashboard');
      setOrder(null);
    }
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflowY: 'auto',
      background: 'var(--color-background)'
    }
  }, content)));
}
const LABELS = {
  'purchase-orders': 'Ordini fornitore',
  companies: 'Aziende',
  pricing: 'Listini',
  products: 'Prodotti',
  collections: 'Collezioni',
  seasons: 'Stagioni',
  colors: 'Colori',
  stock: 'Giacenze',
  picking: 'Task picking',
  returns: 'Resi cliente'
};
function Placeholder({
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      margin: 0
    }
  }, LABELS[nav] || nav), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 24px',
      fontSize: 14,
      color: 'var(--color-foreground-alt3)'
    }
  }, "Modulo del backoffice Nyma."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      padding: '64px 0',
      color: 'var(--color-foreground-alt3)',
      border: '1px dashed var(--color-border)',
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-layer-group",
    style: {
      fontSize: 36,
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "Schermata dimostrativa \u2014 apri ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--color-foreground)'
    }
  }, "Dashboard"), " o ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--color-foreground)'
    }
  }, "Ordini"), " per il flusso completo.")));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(NymaApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nyma-backoffice/kit-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nyma-backoffice/kit-screens.jsx
try { (() => {
/* global React */
// Nyma backoffice screens: Login, Dashboard, OrdersList, OrderDetail.
const DS = window.TiaraDesignSystemNyma_96297e;
const {
  TiaraButton,
  TiaraIconButton,
  TiaraInput,
  TiaraSelect,
  TiaraBadge,
  TiaraStatCard,
  TiaraCard,
  TiaraAlert,
  TiaraTabs,
  TiaraBreadcrumb,
  TiaraSeparator
} = DS;

// ---- Mock data ----
const STATUS = {
  DRAFT: {
    label: 'Bozza',
    color: 'neutral'
  },
  CONFIRMED: {
    label: 'Confermato',
    color: 'green'
  },
  IN_PREPARATION: {
    label: 'In preparazione',
    color: 'amber'
  },
  SHIPPED: {
    label: 'Spedito',
    color: 'blue'
  },
  CANCELLED: {
    label: 'Annullato',
    color: 'red'
  }
};
const ORDERS = [{
  id: 'ORD-1042',
  customer: 'Boutique Marlene',
  type: 'B2B',
  status: 'CONFIRMED',
  total: '€ 12.480,00',
  date: '24 giu 2026',
  items: 18
}, {
  id: 'ORD-1041',
  customer: 'Anna Lombardi',
  type: 'B2C',
  status: 'SHIPPED',
  total: '€ 318,00',
  date: '24 giu 2026',
  items: 3
}, {
  id: 'ORD-1040',
  customer: 'Atelier Nord Srl',
  type: 'B2B',
  status: 'IN_PREPARATION',
  total: '€ 8.940,50',
  date: '23 giu 2026',
  items: 11
}, {
  id: 'ORD-1039',
  customer: 'Marco Esposito',
  type: 'B2C',
  status: 'CONFIRMED',
  total: '€ 96,50',
  date: '23 giu 2026',
  items: 1
}, {
  id: 'ORD-1038',
  customer: 'Showroom Quattro',
  type: 'Agente',
  status: 'DRAFT',
  total: '€ 24.110,00',
  date: '22 giu 2026',
  items: 42
}, {
  id: 'ORD-1037',
  customer: 'La Maison du Lin',
  type: 'B2B',
  status: 'SHIPPED',
  total: '€ 5.220,00',
  date: '22 giu 2026',
  items: 9
}, {
  id: 'ORD-1036',
  customer: 'Giulia Ferrari',
  type: 'B2C',
  status: 'CANCELLED',
  total: '€ 142,00',
  date: '21 giu 2026',
  items: 2
}, {
  id: 'ORD-1035',
  customer: 'Concept Store 12',
  type: 'B2B',
  status: 'CONFIRMED',
  total: '€ 16.730,00',
  date: '21 giu 2026',
  items: 27
}];

// ===================== LOGIN =====================
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-background-alt1)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(TiaraCard, {
    style: {
      width: 380
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/nyma-mark.svg",
    width: "48",
    height: "48",
    alt: "Nyma"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700
    }
  }, "Accedi a Nyma"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-foreground-alt3)'
    }
  }, "ERP operations \xB7 fashion")), /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, "Tenant", /*#__PURE__*/React.createElement(TiaraInput, {
    inputSize: "md",
    defaultValue: "bottega-aurora",
    leftIcon: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-building"
    })
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, "Email", /*#__PURE__*/React.createElement(TiaraInput, {
    inputSize: "md",
    defaultValue: "m.rossi@bottega-aurora.it",
    type: "email"
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, "Password", /*#__PURE__*/React.createElement(TiaraInput, {
    inputSize: "md",
    type: "password",
    defaultValue: "\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7"
  })), /*#__PURE__*/React.createElement(TiaraButton, {
    variant: "primary",
    size: "lg",
    onClick: onLogin,
    style: {
      width: '100%',
      marginTop: 4
    }
  }, "Login"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--color-accent-600)',
      textDecoration: 'none'
    }
  }, "Password dimenticata?")))));
}

// ===================== DASHBOARD =====================
function Dashboard({
  onOpenOrders
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      margin: 0
    }
  }, "Dashboard"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      color: 'var(--color-foreground-alt3)'
    }
  }, "Panoramica operativa \xB7 Bottega Aurora")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(TiaraStatCard, {
    label: "Ordini aperti",
    value: "248",
    delta: "+12%",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-cart-shopping"
    })
  }), /*#__PURE__*/React.createElement(TiaraStatCard, {
    label: "Da spedire",
    value: "63",
    delta: "-4%",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-truck-fast"
    })
  }), /*#__PURE__*/React.createElement(TiaraStatCard, {
    label: "Valore mese",
    value: "\u20AC 184k",
    delta: "+8%",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-euro-sign"
    })
  }), /*#__PURE__*/React.createElement(TiaraStatCard, {
    label: "Stock sotto soglia",
    value: "17",
    delta: "+3",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-triangle-exclamation"
    })
  })), /*#__PURE__*/React.createElement(TiaraAlert, {
    variant: "warning",
    title: "17 varianti sotto la soglia minima",
    action: /*#__PURE__*/React.createElement(TiaraButton, {
      size: "sm",
      variant: "ghost"
    }, "Vedi rifornimenti")
  }, "Genera i suggerimenti di riordino per evitare rotture di stock sulle collezioni in corso."), /*#__PURE__*/React.createElement(TiaraCard, {
    title: "Ordini recenti",
    headerActions: /*#__PURE__*/React.createElement(TiaraButton, {
      size: "sm",
      variant: "ghost",
      rightIcon: /*#__PURE__*/React.createElement("i", {
        className: "fa-solid fa-arrow-right"
      }),
      onClick: onOpenOrders
    }, "Tutti gli ordini")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, ORDERS.slice(0, 4).map((o, i) => /*#__PURE__*/React.createElement("div", {
    key: o.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 0',
      borderTop: i ? '1px solid var(--color-border-light)' : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--color-accent-600)',
      width: 96
    }
  }, o.id), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14
    }
  }, o.customer), /*#__PURE__*/React.createElement(TiaraBadge, {
    text: STATUS[o.status].label,
    color: STATUS[o.status].color,
    type: "light"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 120,
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 600,
      fontSize: 14
    }
  }, o.total))))));
}

// ===================== ORDERS LIST =====================
function OrdersList({
  onOpenOrder
}) {
  const [q, setQ] = React.useState('');
  const [status, setStatus] = React.useState('');
  const rows = ORDERS.filter(o => (!q || o.customer.toLowerCase().includes(q.toLowerCase()) || o.id.toLowerCase().includes(q.toLowerCase())) && (!status || o.status === status));
  const TH = {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 600,
    color: 'var(--color-foreground-alt3)',
    padding: '0 16px',
    height: 40,
    whiteSpace: 'nowrap'
  };
  const TD = {
    padding: '0 16px',
    height: 52,
    fontSize: 14,
    borderTop: '1px solid var(--color-border-light)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      margin: 0
    }
  }, "Ordini"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      color: 'var(--color-foreground-alt3)'
    }
  }, "Gestisci ordini cliente B2B e B2C")), /*#__PURE__*/React.createElement(TiaraButton, {
    variant: "primary",
    leftIcon: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-plus"
    })
  }, "Nuovo ordine")), /*#__PURE__*/React.createElement(TiaraCard, {
    flat: true,
    style: {
      overflow: 'hidden'
    },
    bodyClassName: "kit-grid-body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginBottom: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(TiaraInput, {
    value: q,
    onChange: e => setQ(e.target.value),
    clearable: true,
    onClear: () => setQ(''),
    placeholder: "Cerca per N. ordine o cliente\u2026",
    leftIcon: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-magnifying-glass"
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement(TiaraSelect, {
    value: status,
    onChange: e => setStatus(e.target.value),
    placeholder: "Tutti gli stati",
    options: Object.keys(STATUS).map(k => ({
      value: k,
      label: STATUS[k].label
    }))
  })), (q || status) && /*#__PURE__*/React.createElement(TiaraButton, {
    size: "sm",
    variant: "ghost",
    onClick: () => {
      setQ('');
      setStatus('');
    }
  }, "Resetta filtri")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--color-border-light)',
      borderRadius: 10,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", {
    style: {
      background: 'var(--color-background-alt1)'
    }
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: TH
  }, "N. Ordine"), /*#__PURE__*/React.createElement("th", {
    style: TH
  }, "Cliente"), /*#__PURE__*/React.createElement("th", {
    style: TH
  }, "Canale"), /*#__PURE__*/React.createElement("th", {
    style: TH
  }, "Stato"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      textAlign: 'right'
    }
  }, "Totale"), /*#__PURE__*/React.createElement("th", {
    style: TH
  }, "Data"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      textAlign: 'center'
    }
  }, "Azioni"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(o => /*#__PURE__*/React.createElement("tr", {
    key: o.id,
    style: {
      cursor: 'pointer'
    },
    onClick: () => onOpenOrder(o),
    onMouseEnter: e => e.currentTarget.style.background = 'var(--color-table-bg-hover)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      fontWeight: 600,
      color: 'var(--color-accent-600)'
    }
  }, o.id), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, o.customer), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      color: 'var(--color-foreground-alt3)'
    }
  }, o.type), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, /*#__PURE__*/React.createElement(TiaraBadge, {
    text: STATUS[o.status].label,
    color: STATUS[o.status].color,
    type: "light"
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 600
    }
  }, o.total), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      color: 'var(--color-foreground-alt3)'
    }
  }, o.date), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(TiaraIconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-eye"
    }),
    "aria-label": `Apri ${o.id}`,
    onClick: e => {
      e.stopPropagation();
      onOpenOrder(o);
    }
  })))), rows.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 7,
    style: {
      ...TD,
      textAlign: 'center',
      color: 'var(--color-foreground-alt3)',
      height: 80
    }
  }, "Nessun ordine corrisponde ai filtri."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 12,
      fontSize: 13,
      color: 'var(--color-foreground-alt3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, rows.length, " di ", ORDERS.length, " ordini"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(TiaraButton, {
    size: "sm",
    variant: "secondary",
    disabled: true
  }, "Precedente"), /*#__PURE__*/React.createElement(TiaraButton, {
    size: "sm",
    variant: "secondary"
  }, "Successivo")))));
}

// ===================== ORDER DETAIL =====================
function OrderDetail({
  order,
  onBack
}) {
  const [tab, setTab] = React.useState('lines');
  const o = order || ORDERS[0];
  const lines = [{
    sku: 'BLZ-001 / 42 / Navy',
    name: 'Blazer lana',
    qty: 4,
    price: '€ 320,00'
  }, {
    sku: 'BLZ-001 / 44 / Navy',
    name: 'Blazer lana',
    qty: 3,
    price: '€ 320,00'
  }, {
    sku: 'SHR-220 / M / Avorio',
    name: 'Camicia popeline',
    qty: 6,
    price: '€ 96,00'
  }, {
    sku: 'TRS-118 / 46 / Antracite',
    name: 'Pantalone sartoriale',
    qty: 5,
    price: '€ 180,00'
  }];
  const TH = {
    textAlign: 'left',
    fontSize: 12,
    fontWeight: 600,
    color: 'var(--color-foreground-alt3)',
    padding: '0 16px',
    height: 40
  };
  const TD = {
    padding: '0 16px',
    height: 48,
    fontSize: 14,
    borderTop: '1px solid var(--color-border-light)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(TiaraBreadcrumb, {
    items: [{
      label: 'Ordini',
      href: '#'
    }, {
      label: o.id
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(TiaraIconButton, {
    icon: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-arrow-left"
    }),
    "aria-label": "Indietro",
    variant: "secondary",
    onClick: onBack
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      margin: 0
    }
  }, o.id), /*#__PURE__*/React.createElement(TiaraBadge, {
    text: STATUS[o.status].label,
    color: STATUS[o.status].color
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      color: 'var(--color-foreground-alt3)'
    }
  }, o.customer, " \xB7 ", o.type, " \xB7 ", o.date))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(TiaraButton, {
    variant: "secondary",
    leftIcon: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-print"
    })
  }, "Proforma"), /*#__PURE__*/React.createElement(TiaraButton, {
    variant: "primary",
    leftIcon: /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-check"
    })
  }, "Conferma ordine"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(TiaraCard, null, /*#__PURE__*/React.createElement(TiaraTabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: 'lines',
      label: 'Righe ordine'
    }, {
      value: 'ship',
      label: 'Spedizioni'
    }, {
      value: 'docs',
      label: 'Documenti'
    }]
  }), tab === 'lines' && /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--color-border-light)',
      borderRadius: 10,
      overflow: 'hidden',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", {
    style: {
      background: 'var(--color-background-alt1)'
    }
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: TH
  }, "SKU"), /*#__PURE__*/React.createElement("th", {
    style: TH
  }, "Prodotto"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      textAlign: 'center'
    }
  }, "Qt\xE0"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...TH,
      textAlign: 'right'
    }
  }, "Prezzo"))), /*#__PURE__*/React.createElement("tbody", null, lines.map((l, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      fontFamily: 'monospace',
      fontSize: 12.5,
      color: 'var(--color-foreground-alt2)'
    }
  }, l.sku), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, l.name), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      textAlign: 'center'
    }
  }, l.qty), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums',
      fontWeight: 600
    }
  }, l.price)))))), tab !== 'lines' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 0',
      textAlign: 'center',
      color: 'var(--color-foreground-alt3)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${tab === 'ship' ? 'fa-truck' : 'fa-file-lines'}`,
    style: {
      fontSize: 32,
      opacity: 0.4,
      display: 'block',
      marginBottom: 10
    }
  }), tab === 'ship' ? 'Nessuna spedizione registrata.' : 'Nessun documento generato.')), /*#__PURE__*/React.createElement(TiaraCard, {
    title: "Riepilogo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Row, {
    k: "Articoli",
    v: `${o.items} pezzi`
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Imponibile",
    v: "\u20AC 10.229,51"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "IVA 22%",
    v: "\u20AC 2.250,49"
  }), /*#__PURE__*/React.createElement(TiaraSeparator, null), /*#__PURE__*/React.createElement(Row, {
    k: "Totale",
    v: o.total,
    strong: true
  })))));
}
function Row({
  k,
  v,
  strong
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-foreground-alt3)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: strong ? 700 : 500,
      fontSize: strong ? 16 : 14,
      fontVariantNumeric: 'tabular-nums'
    }
  }, v));
}
Object.assign(window, {
  LoginScreen,
  Dashboard,
  OrdersList,
  OrderDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nyma-backoffice/kit-screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nyma-backoffice/kit-shell.jsx
try { (() => {
/* global React */
// Nyma backoffice shell — dark sidebar + sticky top bar.
// Recreation of NymaSidebar / NymaTopBar from apps/web (Tiara migration).
const {
  TiaraAvatar,
  TiaraBadge
} = window.TiaraDesignSystemNyma_96297e;
const NAV_SECTIONS = [{
  label: null,
  items: [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'fa-gauge-high'
  }, {
    id: 'orders',
    label: 'Ordini',
    icon: 'fa-cart-shopping',
    badge: 6
  }, {
    id: 'purchase-orders',
    label: 'Ordini fornitore',
    icon: 'fa-file-invoice'
  }, {
    id: 'companies',
    label: 'Aziende',
    icon: 'fa-building'
  }, {
    id: 'pricing',
    label: 'Listini',
    icon: 'fa-tags'
  }]
}, {
  label: 'Catalogo',
  items: [{
    id: 'products',
    label: 'Prodotti',
    icon: 'fa-shirt'
  }, {
    id: 'collections',
    label: 'Collezioni',
    icon: 'fa-layer-group'
  }, {
    id: 'seasons',
    label: 'Stagioni',
    icon: 'fa-calendar-days'
  }, {
    id: 'colors',
    label: 'Colori',
    icon: 'fa-palette'
  }]
}, {
  label: 'Magazzino',
  items: [{
    id: 'stock',
    label: 'Giacenze',
    icon: 'fa-boxes-stacked'
  }, {
    id: 'picking',
    label: 'Task picking',
    icon: 'fa-hand'
  }, {
    id: 'returns',
    label: 'Resi cliente',
    icon: 'fa-rotate-left'
  }]
}];
function NavItem({
  item,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: '8px 12px',
      borderRadius: 8,
      border: 0,
      cursor: 'pointer',
      background: active ? 'var(--sidebar-active-bg)' : 'transparent',
      color: active ? 'var(--sidebar-active-fg)' : 'var(--sidebar-fg)',
      font: 'inherit',
      fontSize: 14,
      fontWeight: active ? 600 : 400,
      textAlign: 'left',
      transition: 'background 150ms'
    },
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.background = 'var(--sidebar-hover)';
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.background = 'transparent';
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `fa-solid ${item.icon}`,
    style: {
      width: 18,
      textAlign: 'center',
      color: active ? 'var(--color-accent-400)' : 'var(--sidebar-fg-muted)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label), item.badge && /*#__PURE__*/React.createElement(TiaraBadge, {
    mode: "number",
    count: item.badge
  }));
}
function NymaSidebar({
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flexShrink: 0,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--sidebar-bg)',
      color: 'var(--sidebar-fg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '14px 16px',
      borderBottom: '1px solid var(--sidebar-border)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/nyma-mark.svg",
    width: "28",
    height: "28",
    alt: "Nyma"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: '#f8fafc'
    }
  }, "Nyma")), /*#__PURE__*/React.createElement("div", {
    className: "kit-scroll",
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 8px 16px'
    }
  }, NAV_SECTIONS.map((section, si) => /*#__PURE__*/React.createElement("div", {
    key: si,
    style: {
      marginTop: si ? 12 : 0
    }
  }, section.label && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 12px 2px',
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--sidebar-section)'
    }
  }, section.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, section.items.map(item => /*#__PURE__*/React.createElement(NavItem, {
    key: item.id,
    item: item,
    active: active === item.id,
    onClick: () => onNavigate(item.id)
  })))))));
}
function NymaTopBar({
  tenant = 'Bottega Aurora',
  onLogout
}) {
  const [menu, setMenu] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      height: 56,
      padding: '0 20px',
      background: 'var(--appbar-bg)',
      borderBottom: '1px solid var(--appbar-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--color-foreground)'
    }
  }, tenant), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--color-foreground-alt3)',
      border: '1px solid var(--color-border)',
      borderRadius: 8,
      padding: '4px 8px'
    }
  }, "IT"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenu(m => !m),
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(TiaraAvatar, {
    initials: "MR",
    size: "sm"
  })), menu && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 40,
      width: 200,
      background: 'var(--color-flyout-bg)',
      border: '1px solid var(--color-border-light)',
      borderRadius: 10,
      boxShadow: 'var(--shadow-panel)',
      padding: 6,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 10px',
      fontSize: 12,
      color: 'var(--color-foreground-alt3)'
    }
  }, "m.rossi@bottega-aurora.it"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--color-border-light)',
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      width: '100%',
      padding: '8px 10px',
      border: 0,
      borderRadius: 6,
      background: 'transparent',
      cursor: 'pointer',
      font: 'inherit',
      fontSize: 14,
      color: 'var(--color-danger-600)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-right-from-bracket"
  }), " Esci")))));
}
Object.assign(window, {
  NymaSidebar,
  NymaTopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nyma-backoffice/kit-shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.TiaraAvatar = __ds_scope.TiaraAvatar;

__ds_ns.TiaraBadge = __ds_scope.TiaraBadge;

__ds_ns.TiaraCard = __ds_scope.TiaraCard;

__ds_ns.TiaraChip = __ds_scope.TiaraChip;

__ds_ns.TiaraProgressBar = __ds_scope.TiaraProgressBar;

__ds_ns.TiaraSeparator = __ds_scope.TiaraSeparator;

__ds_ns.TiaraSkeleton = __ds_scope.TiaraSkeleton;

__ds_ns.TiaraSpinner = __ds_scope.TiaraSpinner;

__ds_ns.TiaraStatCard = __ds_scope.TiaraStatCard;

__ds_ns.TiaraAlert = __ds_scope.TiaraAlert;

__ds_ns.TiaraTooltip = __ds_scope.TiaraTooltip;

__ds_ns.TiaraButton = __ds_scope.TiaraButton;

__ds_ns.TiaraCheckbox = __ds_scope.TiaraCheckbox;

__ds_ns.TiaraIconButton = __ds_scope.TiaraIconButton;

__ds_ns.TiaraInput = __ds_scope.TiaraInput;

__ds_ns.TiaraRadioGroup = __ds_scope.TiaraRadioGroup;

__ds_ns.TiaraSelect = __ds_scope.TiaraSelect;

__ds_ns.TiaraTextarea = __ds_scope.TiaraTextarea;

__ds_ns.TiaraToggleSwitch = __ds_scope.TiaraToggleSwitch;

__ds_ns.TiaraBreadcrumb = __ds_scope.TiaraBreadcrumb;

__ds_ns.TiaraTabs = __ds_scope.TiaraTabs;

})();
