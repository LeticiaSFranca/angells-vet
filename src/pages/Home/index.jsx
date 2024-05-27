import { useEffect } from 'react';
import React from 'react';
import AnaSantos from '../../assets/img/Boneca-AnaSantos.png';
import Leticia from '../../assets/img/Boneca-Leticia.png';
import AnaBraga from '../../assets/img/Boneca-AnaBraga.png';

import { FiInstagram } from "react-icons/fi";
import ImagemPrincipal from '../../assets/img/imagem-principal.png';
import './Home.style.css';

export function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id='inicio-home'>
                <div id='texto-inicio-home'>
                    <h2>Bem-vindo(a) ao nosso espaço, AngellsVet!</h2>
                    <p>Somos um trio de estudantes de Medicina Veterinária, completamente apaixonadas
                    pelos animais e nos comprometemos em compartilhar nosso conhecimento e
                    experiência com o intuito de sanar as dúvidas de estudantes da área, assim como
                    nós, ou qualquer pessoa que tenha interesse no nosso conteúdo. <br /><br />

                    Reconhecemos a importância de ter acesso a recursos confiáveis, por isso
                    estamos comprometidas em fornecer uma grande variedade de materiais incluindo
                    artigos, vídeo aulas e resumos. <br /><br />

                    Estamos animadas para compartilhar nossos conhecimentos e experiências com
                    você e ajudá-lo(a) em sua jornada na Medicina Veterinária. Junte-se a nós e faça
                    parte dessa comunidade de aprendizado e crescimento!</p>
                </div>
                <div>
                    <img src={ImagemPrincipal} alt="Imagem Principal" />
                </div>
            </section>

            <section id='integrantes'>
                <div id='texto-integrantes'>
                    <h2>Conheça nossas futuras doutoras, e fundadoras da Angells Vet!</h2>
                    <p>Nosso time é composto por <b>3 estudantes</b> de <b>Medicina Veterinária</b> dedicadas e
                    curiosas: <b>Letícia França, Ana Clara Santos e Ana Clara Braga</b>. Nosso principal objetivo é fornecer conhecimento, dicas e orientações para
                    estudantes da veterinária disponibilizando resumos das matérias aplicadas no
                    curso!</p>
                </div>

                <div id='todos-cards-integrantes'>
                    <div className='cada-card-integrantes'>
                        <img src={AnaSantos} alt="AnaSantos" />
                        <p><b>Área de Pretenção:</b> Clínica de Pequenos</p>
                        <a href="https://" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
                    </div>

                    <div className='cada-card-integrantes'>
                        <img src={Leticia} alt="Leticia" />
                        <p><b>Área de Pretenção:</b> Animais de Fazenda</p>
                        <a href="https://www.instagram.com/leticia.s.franca/?hl=pt-br" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
                        <a href="https://leticiafranca.com.br" target="_blank" rel="noopener noreferrer"></a>
                    </div>

                    <div className='cada-card-integrantes'>
                        <img src={AnaBraga} alt="AnaBraga" />
                        <p><b>Área de Pretenção:</b> Clínica de Pequenos</p>
                        <a href="https://" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
                    </div>
                </div>
            </section>
        </>
    );
}