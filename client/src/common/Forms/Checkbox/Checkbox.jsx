import React from 'react';

export const Checkbox = ({ label, name, ...rest }) => {
  return (
    <div>
      <label
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="checkbox"
        {...rest}
      />
    </div>
  );
};
