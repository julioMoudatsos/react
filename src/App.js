import React from 'react';

import { Radio } from './Components/Radio';

function App() {
  const perguntas = [
    {
      id: 'p1',
      pergunta: 'Qual seu nome ?',
      opcoes: ['Julio', 'Jorge', 'Luis', 'Carlos'],
      resposta: 'Julio',
    },
    {
      id: 'p2',
      pergunta: 'Qual sua Idade ?',
      opcoes: ['12', '124', '23'],
      resposta: '23',
    },
    {
      id: 'p3',
      pergunta: 'Qual sua cor favorita ?',
      opcoes: ['Azul', 'Verde', 'Vermelho'],
      resposta: 'Azul',
    },
    {
      id: 'p4',
      pergunta: 'Qual seu Sobrenome ?',
      opcoes: ['Junior', 'Silva', 'Moudatsos'],
      resposta: 'Moudatsos',
    },
  ];

  const [respostas, setResposta] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [slide, setSlide] = React.useState(0);
  const [acerto, setAcerto] = React.useState('');
  function mudanca({ target }) {
    setResposta({ ...respostas, [target.id]: target.value });
  }
  function responder() {
    if (slide >= perguntas.length - 1) {
      setSlide(slide + 1);
      acertos();
    } else {
      setSlide(slide + 1);
    }
  }

  function acertos() {
    const resposta = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    setAcerto(resposta.length);
  }

  return (
    <>
      <form
        onSubmit={(event) => event.preventDefault()}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {perguntas.map((p, index) => {
          if (slide !== index) return null;
          return (
            <Radio
              slide={slide}
              key={p.id}
              {...p}
              onchange={mudanca}
              valor={respostas[p.id]}
            />
          );
        })}
        <button onClick={responder}>Responder</button>
      </form>
      {acerto}
    </>
  );
}

export default App;
