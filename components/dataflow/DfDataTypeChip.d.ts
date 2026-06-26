import * as React from 'react';

/**
 * Monospace data-type chip (string / number / date / datetime / boolean), with
 * an optional "C" cast badge. Unknown types fall back to the string style.
 */
export interface DfDataTypeChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Data-type family — drives the chip colour. */
  type?: 'string' | 'number' | 'date' | 'datetime' | 'boolean' | string;
  /** Override the visible label (defaults to `type`). */
  label?: React.ReactNode;
  /** Show the cast badge. */
  cast?: boolean;
}

export declare function DfDataTypeChip(props: DfDataTypeChipProps): React.JSX.Element;
