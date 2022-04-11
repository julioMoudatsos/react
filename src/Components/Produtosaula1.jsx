import React from 'react';

export const Produtosaula1 = ({ produto }) => {
  React.useEffect(() => {
    console.log('alterado');
  }, [produto]);

  if (produto == null) return <div>Sem produtos no momento...</div>;
  return (
    <>
      <div>{produto.nome}</div>
      <div>{produto.preco}</div>
      <div>{produto.vendido}</div>
    </>
  );
};
