import './Contato.style.css';
import '../../index.css';
import React from 'react';
import CapaContato from '../../assets/img/Contato/Capa-Contato.png';
import { FaPaperPlane } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdMarkunreadMailbox } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { useEffect } from 'react';

export function Contato() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
                <div id='primeira-apresentacao'>
                    <img src={CapaContato} alt="CapaContato" id='imagem-homepage' />
                </div>

                <div className="formularioContato">
                    <form action="https://formsubmit.co/contatoangellsvet@gmail.com" method="post" encType="multipart/form-data">
                        <label>
                            <span><i className="icon icon-user-1"></i><IoPersonSharp /> Nome</span>
                            <input type="text" name="nome" required placeholder="Seu nome" />
                        </label>

                        <label>
                            <span><i className="icon icon-email"></i><IoMdMail /> E-mail</span>
                            <input type="text" name="email" className="fade_8S" placeholder="exemplo@email.com" />
                        </label>

                        <label>
                            <span><i className="icon icon-email"></i><FaPhone /> Telefone</span>
                            <input type="tel" name="celular" required placeholder="(31)91234-5678" id="telefone" />
                        </label>

                        <label>
                            <span><i className="icon icon-flag"></i>< MdMarkunreadMailbox /> Assunto</span>
                            <input type="text" name="assunto" required placeholder="ex: Pedido de produto" />
                        </label>

                        <label>
                            <span><i className="icon icon-comment" id="caixaMensagem"></i><AiFillMessage /> Mensagem</span>
                            <textarea name="mensagem" required placeholder="Digite aqui sua mensagem." />
                        </label>

                        <input type="hidden" name="acao" value="enviar" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://angellsvet.vercel.app" />
                        <button type="submit" className="btn-envia" title="Enviar"><b>Enviar <FaPaperPlane /></b></button>
                    </form>
                    <br />
                </div>
        </>
    );
}