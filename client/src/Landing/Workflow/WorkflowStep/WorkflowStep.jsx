import React from 'react';

import styles from './WorkflowStep.scss';

export const WorkflowStep = ({ img, title, description, step }) => {
  return (
    <div className={styles.workflowStep}>
      <span className={styles.workflowStepNumber}>
        {step}
        &nbsp;
        шаг
      </span>
      <span className={styles.workflowStepTitle}>{title}</span>
      <img
        className={styles.workflowStepImg}
        alt={title}
        src={img}
      />
      <span className={styles.workflowStepDescription}>{description}</span>
    </div>
  );
};
