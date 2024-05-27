import { useEffect } from 'react';
import React from 'react';
import AnaSantos from '../../assets/img/Boneca-AnaSantos.png';
import Leticia from '../../assets/img/Boneca-Leticia.png';
import AnaBraga from '../../assets/img/Boneca-AnaBraga.png';

import IlustracaoResumo from '../../assets/img/ilustracao-resumo.png';
import IlustracaoRegistros from '../../assets/img/ilustracao-registros.png';
import IlustracaoLojinha from '../../assets/img/ilustracao-lojinha.png';

import { FiInstagram } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
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
                    <h2>Conheça nossas futuras doutoras, e fundadoras da Angells Vet 🩺💜!</h2>
                    <p>Nosso time é composto por <b>3 estudantes</b> de <b>Medicina Veterinária</b> dedicadas e
                    curiosas: <b>Letícia França, Ana Clara Santos e Ana Clara Braga</b>. Nosso principal objetivo é fornecer conhecimento, dicas e orientações para
                    estudantes da veterinária disponibilizando resumos das matérias aplicadas no
                    curso!</p>
                </div>

                <div id='todos-cards-integrantes'>
                    <div className='cada-card-integrantes'>
                        <img src={AnaSantos} alt="AnaSantos" />
                        <p><b>Área de Pretenção:</b> Clínica de Pequenos</p>
                        <a href="https://www.instagram.com/anasanttoss__/?hl=pt-br" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
                    </div>

                    <div className='cada-card-integrantes'>
                        <img src={Leticia} alt="Leticia" />
                        <p><b>Área de Pretenção:</b> Animais de Fazenda</p>
                        
                        <div className='div-links-integrantes'>
                            <a href="https://www.instagram.com/leticia.s.franca/?hl=pt-br" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
                            <a href="https://leticiafranca.com.br" target="_blank" rel="noopener noreferrer"><BsGlobe2 /></a>
                            <a href="https://www.linkedin.com/in/leticiasfranca/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    <div className='cada-card-integrantes'>
                        <img src={AnaBraga} alt="AnaBraga" />
                        <p><b>Área de Pretenção:</b> Clínica de Pequenos</p>
                        
                        <div className="div-links-integrantes">
                            <a href="https://www.instagram.com/anabrag4/?hl=pt-br" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
                            <a href="https://www.linkedin.com/in/ana-braga-1212a92a2/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
            </section>

            <a href="https://www.instagram.com/angellsvet/?hl=pt-br" target="_blank" rel="noopener noreferrer" id='botao-siga-instagram'>
                <div id="container-siga-instagram">
                    <FiInstagram id='icone-siga-instagram' />
                    <div id='texto-siga-instagram'><b>Siga a gente no Instagram!</b>
                    Fique por dentro do mundo da veterinária!</div> 
                </div>   
            </a>

            <section id='areas-site'>
                <h2>Decida por onde começar!</h2>

                <div id='todos-cards-areas'>
                    <div className='cada-card-areas'>
                        <img src={IlustracaoResumo} alt="Resumos" />
                    
                            <a href="#" target="_blank" rel="noopener noreferrer">Resumos</a>
                    </div>

                    <div className='cada-card-areas'>
                        <img src={IlustracaoRegistros} alt="Registros" />
                    
                            <a href="#" target="_blank" rel="noopener noreferrer">Registros</a>
                    </div>

                    <div className='cada-card-areas'>
                        <img src={IlustracaoLojinha} alt="Lojinha" />
                        <a href="#" target="_blank" rel="noopener noreferrer">Lojinha</a>
                    </div>
                </div>
            </section>
        </>
    );
}