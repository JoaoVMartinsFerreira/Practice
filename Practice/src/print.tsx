import React, { useState } from 'react';
import Button from './Button';
import styled from 'styled-components';

export default function print() {
  const [name, setName] = useState('');
  const [state, setState] = useState(false);

  const alertName = () => {
    alert(name);
  };
  const handleClick = () => {
    // Alterna o estado mostrado
    setState(current => !current);
    handleButtonName;
  };
  const handleNameInput = e => {
    setName(e.target.value);
  };
  const handleButtonName = () => {
    setState(!state);
  };
  return (
    <>
      <div>
        <h3>Componente funcional</h3>
        <input
          type='text'
          onChange={handleNameInput}
          value={name}
          placeholder='Insira seu nome'
          className='estilo'
        />
        <Button className='exibir' name='Clicar' onclick={alertName} />
      </div>
      <Button
        className='exibir'
        name={state ? 'Ocultar' : 'Exibir'}
        onclick={handleClick}
      />
      {state && <p> Olá {name}!</p>}
    </>
  );
}
