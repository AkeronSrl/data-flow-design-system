import React from 'react';

/**
 * DfSideMenu — the Data Flow app-shell rail (Alkyra `akn-side-menu`).
 *
 * A fixed dark-slate navigation rail that collapses to an icon strip and
 * expands on hover (or via the `expanded` prop). Renders a brand mark, a
 * search affordance, optional section eyebrows, and a flat list of nav items
 * with Font Awesome icons. The active item gets a blue-tinted row and a solid
 * accent icon tile.
 */
export function DfSideMenu({
  brand = 'Data Flow',
  logoIcon = <i className="fa-solid fa-diagram-project" />,
  items = [],
  activeId,
  expanded,
  defaultExpanded = false,
  searchable = true,
  onSelect,
  className = '',
  style,
  ...rest
}) {
  const isControlled = expanded != null;
  const [hovered, setHovered] = React.useState(defaultExpanded);
  const open = isControlled ? expanded : hovered;

  return (
    <nav
      className={['df-sidemenu', open && 'df-sidemenu--expanded', className].filter(Boolean).join(' ')}
      style={style}
      onMouseEnter={() => !isControlled && setHovered(true)}
      onMouseLeave={() => !isControlled && setHovered(false)}
      aria-label="Main navigation"
      {...rest}
    >
      <div className="df-sidemenu__brand">
        <span className="df-sidemenu__logo" aria-hidden="true">{logoIcon}</span>
        <span className="df-sidemenu__wordmark">{brand}</span>
      </div>

      {searchable && (
        <div className="df-sidemenu__search">
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
          <input type="text" placeholder="Search…" aria-label="Search" />
        </div>
      )}

      <div className="df-sidemenu__items">
        {items.map((it, i) =>
          it.section ? (
            <div className="df-sidemenu__section" key={`s-${i}`}>{it.section}</div>
          ) : (
            <button
              type="button"
              key={it.id ?? i}
              className={['df-sidemenu__item', (activeId === it.id) && 'df-sidemenu__item--active'].filter(Boolean).join(' ')}
              onClick={() => onSelect?.(it)}
              aria-current={activeId === it.id ? 'page' : undefined}
              title={it.label}
            >
              <span className="df-sidemenu__item-ico" aria-hidden="true">
                {typeof it.icon === 'string' ? <i className={it.icon} /> : it.icon}
              </span>
              <span className="df-sidemenu__item-label">{it.label}</span>
              {it.children && <i className="fa-solid fa-angle-right df-sidemenu__item-caret" aria-hidden="true" />}
            </button>
          )
        )}
      </div>
    </nav>
  );
}
