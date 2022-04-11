import React from 'react';

export const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [carregar, setCarregar] = React.useState(null);
  const [erro, setErro] = React.useState(null);

  const req = React.useCallback(async (url, opt) => {
    let response;
    let json;
    try {
      setCarregar(true);
      response = await fetch(url, opt);
      json = await response.json();
      setErro(null);
    } catch (error) {
      setErro('Algo deu errado :( ');
    } finally {
      setData(json);
      setCarregar(false);
      return { response, json };
    }
  }, []);

  return { data, carregar, erro, req };
};
