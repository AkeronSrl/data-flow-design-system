import * as React from 'react';

export interface DfOption {
  /** Value emitted on selection. */
  value: string;
  /** Card title. */
  title: React.ReactNode;
  /** Muted supporting line. */
  subtitle?: React.ReactNode;
  /** Font Awesome name (without the `fa-` prefix, e.g. "database") or an icon node. */
  icon?: React.ReactNode;
}

/**
 * Grid of selectable option cards (dataset/connector/join type, export
 * destination). Single-select by default; `multiple` switches to a set.
 */
export interface DfOptionSelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  options?: DfOption[];
  /** Controlled selection — a value (single) or array of values (`multiple`). */
  value?: string | string[] | null;
  /** Initial selection in uncontrolled mode. */
  defaultValue?: string | string[] | null;
  /** Allow selecting several cards. */
  multiple?: boolean;
  /** Fired with the new selection. */
  onChange?: (value: string | string[] | null) => void;
}

export declare function DfOptionSelect(props: DfOptionSelectProps): React.JSX.Element;
