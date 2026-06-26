import * as React from 'react';

export interface TiaraTab {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
}

/** Underline tab bar (controlled). */
export interface TiaraTabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tab definitions. */
  tabs: TiaraTab[];
  /** Active tab value. */
  value?: string;
  /** Called with the selected tab value. */
  onChange?: (value: string) => void;
}

export declare function TiaraTabs(props: TiaraTabsProps): React.JSX.Element;
