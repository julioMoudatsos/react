import React from 'react';
export const novoContexto = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  function mostrarDados() {
    console.log(dados);
  }
  React.useEffect(() => {
    const url = 'https://ranekapi.origamid.dev/json/api/produto/notebook';
    async function carregarDados() {
      const dadoJson = await (await fetch(url)).json();
      setDados(dadoJson);
    }
    carregarDados();
  }, []);

  return (
    <novoContexto.Provider value={{ dados, mostrarDados }}>
      {children}
    </novoContexto.Provider>
  );
};
