import React from 'react';
import { novoContexto } from './GlobalStorage';
export const Btncontext = ({ setar }) => {
  const usarContexto = React.useContext(novoContexto);

  return (
    <>
      <p>{usarContexto.nome}</p>
      <button
        onClick={() => {
          setar((c) => (c = 'teste2'));
        }}
      >
        Click
      </button>
    </>
  );
};
