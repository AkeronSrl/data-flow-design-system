import * as React from 'react';

export interface DfListItem {
  /** Stable row id. */
  id: string;
  /** Editable text value. */
  description: string;
}

export interface DfListRowAction {
  /** Font Awesome class string or icon node. */
  icon?: React.ReactNode;
  /** Accessible label / tooltip. */
  label?: string;
  /** Tints the button red (e.g. delete). */
  danger?: boolean;
  /** Fired with the row's item. */
  onClick?: (item: DfListItem) => void;
}

/**
 * Inline-editable list with an add button and per-row actions. Controlled via
 * `items` + handlers, or uncontrolled via `defaultItems` (a default delete
 * action is supplied when `rowActions` is empty).
 */
export interface DfEditableListProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onAdd'> {
  /** Controlled rows. */
  items?: DfListItem[];
  /** Initial rows in uncontrolled mode. */
  defaultItems?: DfListItem[];
  /** Add-button label. */
  addLabel?: string;
  /** Per-row action buttons. */
  rowActions?: DfListRowAction[];
  /** Shown when there are no rows. */
  emptyText?: React.ReactNode;
  onAdd?: () => void;
  onUpdate?: (id: string, description: string) => void;
  onDelete?: (id: string) => void;
}

export declare function DfEditableList(props: DfEditableListProps): React.JSX.Element;
