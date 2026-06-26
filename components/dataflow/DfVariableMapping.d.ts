import * as React from 'react';

export interface DfVariable {
  name: string;
}

/**
 * Row-per-variable mapping panel: `leftName → target`, where the target is a
 * select (default) or a text field (`textMode`). Variables may be passed as
 * plain strings or `{ name }` objects.
 */
export interface DfVariableMappingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Panel header title. */
  title?: React.ReactNode;
  /** Left-hand variables (the keys being mapped). */
  leftVariables?: (DfVariable | string)[];
  /** Candidate right-hand targets. */
  rightVariables?: (DfVariable | string)[];
  /** Controlled mapping: `{ [leftName]: rightName }`. */
  value?: Record<string, string>;
  /** Initial mapping in uncontrolled mode. */
  defaultValue?: Record<string, string>;
  /** Swap selects for free-text target fields. */
  textMode?: boolean;
  /** Narrow the candidate targets per left variable. */
  allowedFor?: (leftName: string, all: (DfVariable | string)[]) => (DfVariable | string)[];
  /** Shown when there are no left variables. */
  emptyText?: React.ReactNode;
  /** Fired on every change with the row, its new value, and the full mapping. */
  onChange?: (leftName: string, rightName: string, mapping: Record<string, string>) => void;
}

export declare function DfVariableMapping(props: DfVariableMappingProps): React.JSX.Element;
