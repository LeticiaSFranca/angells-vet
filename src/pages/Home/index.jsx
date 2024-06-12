import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import ImagemPrincipal from '../../assets/img/Home/Capa-Principal.png';
import Filhotes1 from '../../assets/img/Home/Filhotinhos-1.png';
import Filhotes2 from '../../assets/img/Home/Filhotinhos-2.png';
import Filhotes3 from '../../assets/img/Home/Filhotinhos-3.png';
import AnaSantos from '../../assets/img/Home/Boneca-AnaSantos.png';
import Leticia from '../../assets/img/Home/Boneca-Leticia.png';
import AnaBraga from '../../assets/img/Home/Boneca-AnaBraga.png';
import Publicacao1 from '../../assets/img/Home/publicacao-1.png';
import Publicacao2 from '../../assets/img/Home/publicacao-2.png';
import Publicacao3 from '../../assets/img/Home/publicacao-3.png';
import { BsInstagram } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
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
                <Link to='/resumos' className='link-botoes-inicio'>Resumos</Link>
                <Link to='/lojinha' className='link-botoes-inicio'>Lojinha</Link>
                <Link to='/registros' className='link-botoes-inicio'>Registros</Link>
            </section>

            <section id='section-filhotes'>
                <div className='div-filhotes-reverse'>
                    <p>Somos um trio de estudantes de Medicina Veterinária, completamente apaixonadas
                    pelos animais🥰 e nos comprometemos em compartilhar nosso conhecimento e
                    experiência com o intuito de sanar as dúvidas de estudantes da área💡, assim como
                    nós, ou qualquer pessoa que tenha interesse no nosso conteúdo📚!</p>

                    <img src={Filhotes1} alt="Filhotes-1" />
                </div>

                <div className='div-filhotes'>
                    <img src={Filhotes2} alt="Filhotes-2" />

                    <p>Reconhecemos a importância de ter acesso a recursos confiáveis🔒, por isso
                    estamos comprometidas em fornecer uma grande variedade de materiais incluindo
                    artigos, vídeo aulas e resumos💡❤.</p>
                </div>

                <div className='div-filhotes-reverse'>
                    <p>Estamos animadas para compartilhar nossos conhecimentos e experiências com
                    você🤩❤ e ajudá-lo(a) em sua jornada na Medicina Veterinária🩺💚. Junte-se a nós e faça
                    parte dessa comunidade de aprendizado e crescimento💡💖!</p>

                    <img src={Filhotes3} alt="Filhotes-3" />
                </div>
            </section>

            <section id='section-socias'>
                <h2>Conheça nossas futuras doutoras,<br />e fundadoras da Angells Vet!</h2>

                <div id='todos-os-cards'>
                    <div class='cada-card' id='cada-card-amarelo'>
                        <img src={AnaSantos} alt="AnaSantos" />
                        <p><b>Área de Pretenção</b>: Clínica de Pequenos</p>

                        <div className='link-integrantes-amarelo'>
                            <a href="https://www.instagram.com/anasanttoss__/?hl=pt-br" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                        </div>
                    </div>

                    <div class='cada-card' id='cada-card-rosa'>
                        <img src={Leticia} alt="Leticia" />
                        <p><b>Área de Pretenção:</b> Animais de Fazenda</p>

                        <div className='link-integrantes-rosa'>
                        <a href="https://www.instagram.com/leticia.s.franca/?hl=pt-br" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                        <a href="https://www.leticiafranca.com.br/" target="_blank" rel="noopener noreferrer"><BsGlobe /></a>
                        <a href="https://www.linkedin.com/in/leticiasfranca/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    <div class='cada-card' id='cada-card-amarelo'>
                        <img src={AnaBraga} alt="AnaBraga" />
                        <p><b>Área de Pretenção</b>: Clínica de Pequenos</p>

                        <div className='link-integrantes-amarelo'>
                            <a href="https://www.instagram.com/anabrag4/?hl=pt-br" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                            <a href="https://www.linkedin.com/in/ana-braga-1212a92a2/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
            </section>

            <a href='https://www.instagram.com/angellsvet/' id='botao-instagram'>
                <BsInstagram id='icone-botao-instagram' />

                <div>
                    <h4><b>Siga a gente no Instagram!</b></h4>
                    <p>Fique por dentro do mundo da veterinária!</p>
                </div>
            </a>

            <section id='publicacoes-instagram'>
                <a href="https://www.instagram.com/angellsvet/" target="_blank" rel="noopener noreferrer">
                    <img src={Publicacao1} alt="Publicação-1" />
                </a>

                <a href="https://www.instagram.com/angellsvet/" target="_blank" rel="noopener noreferrer">
                    <img src={Publicacao2} alt="Publicação-2" />
                </a>

                <a href="https://www.instagram.com/angellsvet/" target="_blank" rel="noopener noreferrer">
                    <img src={Publicacao3} alt="Publicação-3" />
                </a>
            </section>
        </>
    );
}