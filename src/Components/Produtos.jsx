import React from 'react';
import { Link } from 'react-router-dom';
import '../css/container.css';
export const Produtos = () => {
  const apiUrl = 'https://ranekapi.origamid.dev/json/api/produto';
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    async function gerarDados() {
      const dadosJson = await (await fetch(apiUrl)).json();
      setDados(dadosJson);
    }
    gerarDados();
    return null;
  }, []);

  if (dados === null) return null;

  return (
    <>
      <div>Produtos</div>
      <section>
        {dados.map((produto) => {
          return (
            <Link
              className="container"
              key={produto.id}
              to={`/produto/${produto.id}`}
            >
              <p>id:{produto.id}</p>
              <p>nome:{produto.nome}</p>
              <p>preco:{produto.preco}</p>
              <img src={produto.fotos[0].src} alt={produto.fotos[0].alt} />
            </Link>
          );
        })}
      </section>
    </>
  );
};
