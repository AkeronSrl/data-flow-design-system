import React from 'react';

/** TiaraBreadcrumb — path trail; last item is the current page. */
export function TiaraBreadcrumb({ items = [], className = '', ...rest }) {
  return (
    <nav className={['tia-breadcrumb', className].filter(Boolean).join(' ')} aria-label="Breadcrumb" {...rest}>
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {last ? (
              <span className="tia-breadcrumb__current" aria-current="page">{item.label}</span>
            ) : (
              <a href={item.href || '#'}>{item.label}</a>
            )}
            {!last && <span className="tia-breadcrumb__sep" aria-hidden="true"><i className="fa-solid fa-chevron-right" style={{ fontSize: 10 }} /></span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
