import { useEffect } from 'react';
import React from 'react';
import ImagemPrincipal from '../../assets/img/Home/Capa-Principal.png';
import './Home.style.css';

export function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id='primeira-apresentacao'>
                <img src={ImagemPrincipal} alt="ImagemPrincipal" id='imagem-homepage' />
            </section>

            <section id='botoes-home'>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='link-botoes-inicio'>Resumos</a>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='link-botoes-inicio'>Lojinha</a>
                <a href="http://" target="_blank" rel="noopener noreferrer" className='link-botoes-inicio'>Registros</a>
            </section>
        </>
    );
}