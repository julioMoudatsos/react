import React from 'react';
const tipos = {
  cep: {
    regex: /^\d{5}-\d{3}$/,
    menssagem: 'Cep invalido',
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    menssagem: 'Email invalido',
  },
};
export const useForm = (tipo) => {
  const [valor, setValor] = React.useState('');
  const [erro, setErro] = React.useState(false);

  function validacao(valor) {
    console.log('valor recebido: ', valor);
    const validacao = !tipos[tipo].regex.test(valor);
    console.log(validacao);
    if (valor.length <= 0) {
      setErro('Preencha um campo');
      return false;
    } else if (!tipos[tipo].regex.test(valor)) {
      setErro(tipos[tipo].menssagem);
      return false;
    } else {
      setErro(null);
      return true;
    }
  }
  function onChange({ target }) {
    if (erro) validacao(target.value);
    setValor(target.value);
  }

  function onBlur() {
    validacao(valor);
  }
  return {
    valor,
    setValor,
    erro,
    onChange,
    onBlur,
    validate: () => validacao(valor),
  };
};
