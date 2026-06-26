import * as React from 'react';

export interface DfSideMenuItem {
  /** Stable id, matched against `activeId`. */
  id?: string;
  /** Row label, shown when the rail is expanded. */
  label?: React.ReactNode;
  /** Font Awesome class string (e.g. "fa-solid fa-database") or an icon node. */
  icon?: React.ReactNode;
  /** Eyebrow divider — render `{ section: "Build" }` instead of a nav row. */
  section?: React.ReactNode;
  /** Truthy if the item has a fly-out submenu (shows a trailing caret). */
  children?: boolean;
}

/**
 * Data Flow app-shell navigation rail. Collapsed to a 64px icon strip; expands
 * to 248px on hover or when `expanded` is set. Dark slate, fixed across themes.
 */
export interface DfSideMenuProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
  /** Wordmark shown next to the logo when expanded. */
  brand?: React.ReactNode;
  /** Logo glyph node (defaults to the pipeline mark). */
  logoIcon?: React.ReactNode;
  /** Nav rows and section eyebrows, in order. */
  items?: DfSideMenuItem[];
  /** Id of the active row. */
  activeId?: string;
  /** Controlled expand state. Omit to use hover-to-expand. */
  expanded?: boolean;
  /** Initial expand state in uncontrolled mode. */
  defaultExpanded?: boolean;
  /** Show the search affordance under the brand. */
  searchable?: boolean;
  /** Fired with the clicked item. */
  onSelect?: (item: DfSideMenuItem) => void;
}

export declare function DfSideMenu(props: DfSideMenuProps): React.JSX.Element;
