import * as React from 'react';

export interface TiaraBreadcrumbItem {
  label: React.ReactNode;
  href?: string;
}

/** Path trail; the final item renders as the current (non-link) page. */
export interface TiaraBreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Ordered crumbs, root first. */
  items: TiaraBreadcrumbItem[];
}

export declare function TiaraBreadcrumb(props: TiaraBreadcrumbProps): React.JSX.Element;
