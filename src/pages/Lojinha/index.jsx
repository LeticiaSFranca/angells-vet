import './Lojinha.style.css';
import Girafa from '../../assets/img/Lojinha/Capa-Lojinha.png';
import Pintinho from '../../assets/img/Construcao/Capa-Construcao.png';
import React from 'react';

export function Lojinha() {
  return (
    <>
      <section id='page-404'>
        <div id='primeira-apresentacao'>
          <img src={Girafa} alt="ImagemPrincipal" id='imagem-homepage' />
        </div>

        <img src={Pintinho} alt="Pintinho" id='imagem-construcao' />
      </section>
    </>
  );
}