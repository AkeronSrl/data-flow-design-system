import * as React from 'react';

export interface DfSchemaBadge {
  text: React.ReactNode;
  /** Colour family. */
  tone?: 'neutral' | 'info' | 'success' | 'warning' | 'danger';
}

export interface DfSchemaNode {
  /** Stable id (used for expand/selection state). */
  id: string;
  /** Primary label. */
  label: React.ReactNode;
  /** Secondary muted line (e.g. data type, row count). */
  description?: React.ReactNode;
  /** Font Awesome class string for the leading glyph. */
  icon?: string;
  /** Trailing badge (e.g. column count). */
  badge?: DfSchemaBadge;
  /** Fixed-width leading badge (e.g. PK / data type). */
  leadingBadge?: DfSchemaBadge;
  /** Extra text included in search matching. */
  searchText?: string;
  /** Child nodes. */
  items?: DfSchemaNode[];
  /** Force a twisty even before children load. */
  hasItems?: boolean;
  /** Open by default. */
  defaultExpanded?: boolean;
  /** Emits `onSelect` and shows a selected background when clicked. */
  selectable?: boolean;
  /** Show a spinner in the tail (lazy load). */
  loading?: boolean;
}

/**
 * Searchable, expandable schema/data-source tree. Search filters and
 * auto-expands matching branches. Selection is controlled via `selectedId` or
 * tracked internally.
 */
export interface DfSchemaTreeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Header title (rendered uppercase). */
  title?: React.ReactNode;
  /** Right-aligned header summary. */
  summary?: React.ReactNode;
  /** Root nodes. */
  nodes?: DfSchemaNode[];
  /** Show the search field. */
  searchable?: boolean;
  searchPlaceholder?: string;
  /** Controlled selected node id (`null` for none). */
  selectedId?: string | null;
  onSelect?: (node: DfSchemaNode) => void;
  onToggle?: (id: string) => void;
  emptyText?: React.ReactNode;
  noResultsText?: React.ReactNode;
}

export declare function DfSchemaTree(props: DfSchemaTreeProps): React.JSX.Element;
