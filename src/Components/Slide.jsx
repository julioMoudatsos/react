import React from 'react';
import '../css/geral.css';

export const Slide = ({ slides }) => {
  const [lado, setLado] = React.useState(0);
  const [index, setIndex] = React.useState(1);
  const div = React.useRef();
  const ul = React.useRef();

  function praFrente() {
    const { width } = div.current.getBoundingClientRect();

    if (index >= slides.length) {
      div.current.classList.add('classe');
    } else {
      setIndex(index + 1);
      console.log('Frente: ', index, width);
      setLado(-(index * width));
    }
  }

  function gerarLista() {
    return (
      <>
        {slides.map((s) => {
          return (
            <li
              ref={div}
              key={s.id}
              style={{ transform: `translateX(${lado}px)` }}
            >
              <div>
                <p>id: {s.id}</p>
                <p>nome: {s.nome}</p>
                <img style={{ width: '100px' }} src={s.foto} alt="foto" />

                <p>desc: {s.desc}</p>
              </div>
            </li>
          );
        })}
      </>
    );
  }

  function praTras() {
    const { width } = div.current.getBoundingClientRect();
    setIndex(index + 1);
    console.log(slides.length);

    if (index >= slides.length + 10) {
      console.log('fim');
    } else {
      console.log('Frente');
      setLado(index * width);
    }
  }

  console.log('lado', lado);
  return (
    <section className="containerGeral">
      <div className="container">
        <ul ref={ul}>{gerarLista()}</ul>
      </div>
      <nav>
        <button onClick={praTras}>Anterior</button>
        <button onClick={praFrente}>Proximo</button>
      </nav>
    </section>
  );
};
