import React from 'react';

export const Input = ({
  tipo,
  placeholder,
  id,
  label,
  valor,
  onChange,
  onBlur,
  erro,
}) => {
  return (
    <label htmlFor={id}>
      {label + ' '}
      <input
        type={tipo}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={valor}
      />
      <p>{erro}</p>
    </label>
  );
};
