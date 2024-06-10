import './Page404.style.css';
import { Link } from 'react-router-dom';
import Panda from '../../assets/img/Page404/Panda.png';
import React from 'react';

export function Page404() {
  return (
    <>
      <section id='page-404'>
        <div id='primeira-apresentacao'>
          <img src={Panda} alt="ImagemPrincipal" id='imagem-homepage' />
        </div>

          <Link to='/' id='botao-voltar-ao-inicio'>Volte ao Início</Link>
      </section>
    </>
  );
}