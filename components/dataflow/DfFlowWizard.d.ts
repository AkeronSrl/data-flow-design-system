import * as React from 'react';

export interface DfWizardStep {
  /** Optional per-step label shown next to the wizard title. */
  label?: React.ReactNode;
  /** Step body. */
  content?: React.ReactNode;
}

/**
 * Multi-step flow shell with a header, scrollable body and a footer that holds
 * the step indicator and Back / Next / Cancel actions.
 */
export interface DfFlowWizardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onProgress'> {
  /** Wizard title. */
  title?: React.ReactNode;
  /** Declarative steps; the wizard tracks the active one and fires `onComplete` at the end. */
  steps?: DfWizardStep[];
  /** Controlled active step (1-indexed). Omit to let the wizard manage it. */
  step?: number;
  /** Initial step in uncontrolled mode. */
  defaultStep?: number;
  /** Total steps when not using `steps`. */
  totalSteps?: number;
  /** Show the footer step indicator. */
  showStepper?: boolean;
  nextLabel?: React.ReactNode;
  backLabel?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  /** Label for the Next button on the final step. */
  completeLabel?: React.ReactNode;
  /** Disable forward navigation (e.g. failed validation). */
  nextDisabled?: boolean;
  onNext?: (current: number) => void;
  onBack?: (current: number) => void;
  onCancel?: () => void;
  /** Fired when Next is pressed on the last step. */
  onComplete?: () => void;
  onStepChange?: (next: number) => void;
  /** Active step body when not using `steps`. */
  children?: React.ReactNode;
}

export declare function DfFlowWizard(props: DfFlowWizardProps): React.JSX.Element;

export interface DfStepperProps {
  totalSteps?: number;
  selectedStep?: number;
}

export declare function DfStepper(props: DfStepperProps): React.JSX.Element;
