import React from 'react';

const DOT_COLORS = {
  accent: 'var(--color-accent-500)', neutral: 'var(--color-neutral-140)',
  red: 'var(--color-badge-red)', 'dark-red': 'var(--color-badge-dark-red)',
  orange: 'var(--color-badge-orange)', amber: 'var(--color-badge-amber)',
  green: 'var(--color-badge-green)', blue: 'var(--color-badge-blue)',
  purple: 'var(--color-badge-purple)', 'dark-purple': 'var(--color-badge-dark-purple)',
  pink: 'var(--color-badge-pink)', 'dark-pink': 'var(--color-badge-dark-pink)',
};

/**
 * TiaraBadge — compact status / count label. Modes: word, number, dot,
 * dot-word. `type` solid (filled) or light (text-only).
 */
export function TiaraBadge({
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
    return <span className={['tia-badge__dot', className].filter(Boolean).join(' ')} style={{ background: hue }} {...rest} />;
  }
  if (mode === 'dot-word') {
    return (
      <span className={['tia-badge', 'tia-badge--light', size === 'lg' && 'tia-badge--lg', className].filter(Boolean).join(' ')} style={{ color: color === 'accent' ? 'var(--color-foreground)' : hue }} {...rest}>
        <span className="tia-badge__dot" style={{ background: hue }} />{label}
      </span>
    );
  }

  const cls = ['tia-badge', `tia-badge--${type === 'light' ? 'light' : 'solid'}`, size === 'lg' && 'tia-badge--lg', className].filter(Boolean).join(' ');
  const style = type === 'light' ? { color: color === 'accent' ? 'var(--color-foreground-alt3)' : hue } : { background: hue };
  return <span className={cls} style={style} {...rest}>{label}</span>;
}
