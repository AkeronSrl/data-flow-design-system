import * as React from 'react';

export interface DfPreviewColumn {
  /** Key into each row object. */
  field: string;
  /** Header label (defaults to `field`). */
  caption?: React.ReactNode;
  /** Data type — drives the header chip and numeric right-alignment. */
  type?: 'string' | 'number' | 'date' | 'datetime' | 'boolean' | string;
  /** Show the cast badge on the type chip. */
  cast?: boolean;
  /** Force right-alignment regardless of type. */
  numeric?: boolean;
}

/**
 * Tabular dataset / query-result preview with typed, sticky column headers and
 * a toolbar counter + actions slot. Numeric columns right-align with tabular
 * figures; empty cells render a muted dash.
 */
export interface DfPreviewGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: DfPreviewColumn[];
  /** Row objects keyed by column `field`. */
  rows?: Record<string, unknown>[];
  /** Selected column count for the toolbar (defaults to all). */
  selectedCount?: number;
  /** Total column count for the toolbar (defaults to all). */
  totalCount?: number;
  /** Toolbar action nodes (buttons). */
  actions?: React.ReactNode;
  /** Show a per-column actions (kebab) menu button. */
  columnMenu?: boolean;
  loading?: boolean;
  emptyText?: React.ReactNode;
  /** Fired with the column when its menu button is clicked. */
  onColumnMenu?: (column: DfPreviewColumn) => void;
}

export declare function DfPreviewGrid(props: DfPreviewGridProps): React.JSX.Element;
