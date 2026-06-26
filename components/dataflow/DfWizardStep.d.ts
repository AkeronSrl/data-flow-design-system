import * as React from 'react';

/**
 * Titled step container — a step title + subtitle header above the body.
 * Pairs with DfFlowWizard.
 */
export interface DfWizardStepProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function DfWizardStep(props: DfWizardStepProps): React.JSX.Element;
