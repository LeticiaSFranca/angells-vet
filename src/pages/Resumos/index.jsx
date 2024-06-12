import './Resumos.style.css';
import Baleia from '../../assets/img/Resumos/Capa-Resumos.png';
import Pintinho from '../../assets/img/Construcao/Capa-Construcao.png';
import React from 'react';

export function Resumos() {
  return (
    <>
      <section id='page-404'>
        <div id='primeira-apresentacao'>
          <img src={Baleia} alt="ImagemPrincipal" id='imagem-homepage' />
        </div>

        <img src={Pintinho} alt="Pintinho" id='imagem-construcao' />
      </section>
    </>
  );
}