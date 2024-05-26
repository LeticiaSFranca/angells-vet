import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import './Home.style.css';

export function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section>
                <div>
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
                <div></div>
            </section>
        </>
    );
}