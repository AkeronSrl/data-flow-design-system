import * as React from 'react';

export interface TiaraSelectOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

/** Styled single-select dropdown (native <select> under the hood). */
export interface TiaraSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  /** Options to render. */
  options: TiaraSelectOption[];
  /** Placeholder shown as the empty-value first option. */
  placeholder?: string;
}

export declare function TiaraSelect(props: TiaraSelectProps): React.JSX.Element;
