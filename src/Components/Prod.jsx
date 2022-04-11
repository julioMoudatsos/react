import React from 'react';
import { useParams } from 'react-router-dom';

export const Prod = () => {
  const [dados, setDados] = React.useState(null);
  const apiUrl = 'https://ranekapi.origamid.dev/json/api/produto';
  const parametro = useParams();
  console.log(parametro);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    const abortar = new AbortController();
    fetch(`${apiUrl}/${parametro.id}`, { signal: abortar.signal })
      .then((resposta) => resposta.json())
      .then((json) => {
        setDados(json);
      });
    return () => abortar.abort();
  }, [parametro.id]);

  console.log(dados);
  if (dados === null) return null;
  return (
    <>
      <p>id:{dados.id}</p>
      <p>nome:{dados.nome}</p>
      <p>preco:{dados.preco}</p>
    </>
  );
};
