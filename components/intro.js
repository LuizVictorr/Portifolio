import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaVoicemail } from "react-icons/fa";

const Intro = () => {

    return (
        <div className=" text-center m-auto space-y-10 py-24">
            <div className="text-7xl font-bold space-y-3">
                <h1>Opa, Eu sou</h1>
                <h1 className="bg-gradient-to-r from-teal-600 via-teal-400 to-lime-400 text-transparent bg-clip-text">
                    Luiz Carvalho
                </h1>
            </div>
            <p>
                Com cinco anos de expertise como analista de dados, mergulho nas complexidades do mundo dos negócios, transformando dados brutos 
                em tesouros de insights valiosos. Com minhas habilidades afiadas em Excel, Power BI e Python, esculpo narrativas convincentes que iluminam o 
                caminho para decisões estratégicas e sólidas. Deixe-me ser seu guia neste labirinto, onde cada número é uma oportunidade esperando para 
                ser descoberta e explorada. Juntos, vamos desbravar os desafios e conquistar novos horizontes para o seu sucesso empresarial.
            </p>
            <div className="flex justify-center gap-5 text-2xl">
                <Link href="https://www.linkedin.com/in/luiz-victor-teodoro-mendon%C3%A7a-de-carvalho-a2a862283/">
                    <FaLinkedin/>
                </Link>
                <Link href='https://github.com/LuizVictorr'>
                    <FaGithub/>
                </Link>
                <Link href='https://www.instagram.com/luizzccarvalho/'>
                    <FaInstagram/>
                </Link>
            </div>
            <button className="bg-gradient-to-r from-teal-800 via-teal-600 to-lime-400 hover:opacity-75 text-white font-bold py-2 px-4 rounded-lg">
                Download CV
            </button>
        </div>
    )
}

export default Intro;