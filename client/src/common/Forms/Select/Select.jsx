import React from 'react';

export const Select = ({ label, name, options, ...rest }) => {
  return (
    <div>
      <label
        htmlFor={name}
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        {...rest}
      >
        <option value="">Не установлено</option>

        {
          options.map((option) => {
            return (
              <option
                key={option.id}
                value={option.id}
              >
                {option.name}
              </option>
            );
          })
        }
      </select>
    </div>
  );
};
