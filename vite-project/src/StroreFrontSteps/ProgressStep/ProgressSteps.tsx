import styles from './ProgressSteps.module.css';

const ProgressSteps = () => {
    const steps = [
        {
          label: 'Storefront Layout ',
          step: 1,
        },
        {
          label: 'Brand Elements',
          step: 2,
        },
        {
          label: 'Content Setup',
          step: 3,
        },
        {
          label: 'Product Placement',
          step: 4,
        },
        {
          label: 'Content Placement',
          step: 5,
        },
        {
          label: 'Visitor Experience',
          step: 6,
        },
      ]
    return <div className={styles.MainContainer}>
      <div className={styles.StepContainer}>
        {steps.map(({ step, label }) => (
          <div className={styles.StepWrapper}>
            <div className={styles.StepStyle}>
              <div className={styles.StepCount}>{step}</div>
            </div>
            <div className={styles.StepsLabelContainer}>
              <div className={styles.StepLabel}>{label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
}

export default ProgressSteps;