import * as React from 'react';

export interface DfExpressionWarning {
  /** Machine code, e.g. "unknown-function". */
  code?: string;
  /** Human-readable message shown in the warning chip. */
  message: React.ReactNode;
}

/**
 * Formula / SQL expression editor with column + function autocomplete and
 * inline lint warnings. Suggestions open on typing or Ctrl+Space;
 * ArrowUp/Down + Enter/Tab/Esc drive the dropdown.
 */
export interface DfExpressionEditorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Controlled expression text. */
  value?: string;
  /** Initial text in uncontrolled mode. */
  defaultValue?: string;
  placeholder?: string;
  /** Column names offered as `column` suggestions. */
  columns?: string[];
  /** Function names offered as `function` suggestions (defaults to a formula set). */
  functions?: string[];
  /** Cap on visible suggestions. */
  maxSuggestions?: number;
  /** Textarea rows. */
  rows?: number;
  /** Validation state — `invalid` paints the border red. */
  validationState?: 'none' | 'valid' | 'invalid';
  /** Provide warnings explicitly; omit to auto-detect unknown function calls. */
  warnings?: DfExpressionWarning[];
  onChange?: (value: string) => void;
}

export declare function DfExpressionEditor(props: DfExpressionEditorProps): React.JSX.Element;
