import React, { useEffect } from 'react';

const Toggler = ({ toggle, onToggle }) => {
  useEffect(() => {
    <p>Alterna apenas se a variável "toggle" mudar</p>;
  }, [toggle]); // Array de depencências vazio significa que o componente só renderiza uma vez,
  // A variável dentro do array indica que o componente será atualizado somente quando a variável sofrer uma alteração.

  const handleToggle = event => {
    onToggle(event.target.value);
  };

  return (
    <div>
      <button type='button' onClick={onToggle}>
        Toggle
      </button>
      {toggle && <h1>Hello</h1>}
      <input
        type='text'
        value={toggle}
        onChange={handleToggle}
        className='estilo'
      ></input>
    </div>
  );
};
export default Toggler;
