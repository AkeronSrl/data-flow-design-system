import React from 'react';

/** Dot stepper used in the wizard footer. */
export function DfStepper({ totalSteps = 1, selectedStep = 1 }) {
  const dots = Array.from({ length: Math.max(1, totalSteps) }, (_, i) => i + 1);
  return (
    <div className="df-stepper">
      <span className="df-stepper__label">Step {selectedStep} of {totalSteps}</span>
      <div className="df-stepper__dots">
        {dots.map((n) => (
          <span
            key={n}
            className={[
              'df-stepper__dot',
              n < selectedStep && 'df-stepper__dot--done',
              n === selectedStep && 'df-stepper__dot--current',
            ].filter(Boolean).join(' ')}
          />
        ))}
      </div>
    </div>
  );
}

/**
 * DfFlowWizard — multi-step flow shell (Alkyra `akn-flow-wizard`).
 *
 * A panel with a titled header, a scrollable body and a footer carrying the
 * step indicator plus Back / Next / Cancel actions. Drive it declaratively with
 * a `steps` array (it tracks the active step itself and fires `onComplete` at
 * the end), or control it via `step` + `children`.
 */
export function DfFlowWizard({
  title = '',
  steps,
  step,
  defaultStep = 1,
  totalSteps,
  showStepper = true,
  nextLabel = 'Next',
  backLabel = 'Back',
  cancelLabel = 'Cancel',
  completeLabel = 'Finish',
  nextDisabled = false,
  onNext,
  onBack,
  onCancel,
  onComplete,
  onStepChange,
  children,
  className = '',
  style,
  ...rest
}) {
  const controlled = step != null;
  const [internal, setInternal] = React.useState(defaultStep);
  const current = controlled ? step : internal;
  const total = totalSteps ?? (steps ? steps.length : 1);
  const isFirst = current <= 1;
  const isLast = current >= total;

  const go = (next) => {
    if (!controlled) setInternal(next);
    onStepChange?.(next);
  };
  const handleNext = () => {
    onNext?.(current);
    if (isLast) { onComplete?.(); return; }
    go(current + 1);
  };
  const handleBack = () => {
    onBack?.(current);
    if (!isFirst) go(current - 1);
  };

  const body = children ?? (steps ? steps[current - 1]?.content : null);
  const stepTitle = steps?.[current - 1]?.label;

  return (
    <section
      className={['df-wizard', className].filter(Boolean).join(' ')}
      style={{ width: 560, height: 420, ...style }}
      role="dialog"
      aria-label={typeof title === 'string' ? title : undefined}
      {...rest}
    >
      <div className="df-wizard__head">
        <h2 className="df-wizard__title">{title}{stepTitle ? <span style={{ color: 'var(--color-foreground-alt3)', fontWeight: 400 }}> · {stepTitle}</span> : null}</h2>
        <button type="button" className="tia-iconbtn tia-iconbtn--sm tia-iconbtn--ghost" aria-label="Close" onClick={onCancel}>
          <i className="fa-solid fa-xmark" />
        </button>
      </div>

      <div className="df-wizard__body">{body}</div>

      <div className={['df-wizard__foot', !showStepper && 'df-wizard__foot--end'].filter(Boolean).join(' ')}>
        {showStepper && <DfStepper totalSteps={total} selectedStep={current} />}
        <div className="df-wizard__actions">
          {!isFirst && (
            <button type="button" className="tia-btn tia-btn--outline-secondary tia-btn--md" onClick={handleBack}>
              {backLabel}
            </button>
          )}
          <button type="button" className="tia-btn tia-btn--primary tia-btn--md" disabled={nextDisabled} onClick={handleNext}>
            {isLast ? completeLabel : nextLabel}
          </button>
          <button type="button" className="tia-btn tia-btn--ghost tia-btn--md" onClick={onCancel}>
            {cancelLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
