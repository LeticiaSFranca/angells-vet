import './Registros.style.css';
import Porquinho from '../../assets/img/Registros/Capa-Registros.png';
import Pintinho from '../../assets/img/Construcao/Capa-Construcao.png';
import React from 'react';

export function Registros() {
  return (
    <>
      <section id='page-404'>
        <div id='primeira-apresentacao'>
          <img src={Porquinho} alt="ImagemPrincipal" id='imagem-homepage' />
        </div>

        <img src={Pintinho} alt="Pintinho" id='imagem-construcao' />
      </section>
    </>
  );
}