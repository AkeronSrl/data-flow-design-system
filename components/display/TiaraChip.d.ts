import * as React from 'react';

/** Removable token for active filters and multi-selections. */
export interface TiaraChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Chip text (or use children). */
  label?: React.ReactNode;
  /** Use the accent (blue tint) treatment. @default false */
  accent?: boolean;
  /** When provided, renders a × button calling this handler. */
  onRemove?: () => void;
}

export declare function TiaraChip(props: TiaraChipProps): React.JSX.Element;
