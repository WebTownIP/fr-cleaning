import React, { useMemo } from 'react';

const getStyles = align => ({
  textAlign: align,
});

export const BlockAlignment = ({ align, children }) => {
  const styles = useMemo(() => getStyles(align), [align]);

  return (
    <div style={styles}>
      {children}
    </div>
  );
};
