import React from "react";
import Image from "next/image";

const Services = () => {

    return (
        <div className="space-y-5 py-24 divide-y divide-solid">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-500 to-lime-400 text-transparent bg-clip-text text-center">
                MEUS TRABALHOS
            </h1>

            <div className="flex gap-7 pt-5">
                <Image src='/Dados.jpg' 
                width='250' 
                height='250'
                className="rounded-xl" />
                <div className="space-y-3 pt-3">
                    <h2 className="text-2xl font-bold">
                        Tratamento dos Dados
                    </h2>
                    <p>
                    Bem-vindo ao mundo da análise de dados reinventada! Sou um engenheiro apaixonado pela intersecção entre tecnologia e insights transformadores. Com uma mente inquisitiva e uma sede insaciável por desafios, mergulho de cabeça na análise de dados, buscando não apenas números, mas significado e oportunidades ocultas
                    </p>
                    <div className="flex gap-2 pt-3">
                        <button disabled={true} className=" bg-teal-700 hover:opacity-75 text-white py-2 px-4 rounded-lg">
                            Excel
                        </button>
                        <button disabled={true} className=" bg-teal-600 hover:opacity-75 text-white py-2 px-4 rounded-lg">
                            Power Query
                        </button>
                        <button disabled={true} className=" bg-teal-500 hover:opacity-75 text-white py-2 px-4 rounded-lg">
                            Python
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex gap-7 pt-5">
                <div className="space-y-3 pt-3">
                    <h2 className="text-2xl font-bold">
                        Elaboração de Visuais Gráficos
                    </h2>
                    <p>
                    Bem-vindo ao mundo da análise de dados reinventada! Sou um engenheiro apaixonado pela intersecção entre tecnologia e insights transformadores. Com uma mente inquisitiva e uma sede insaciável por desafios, mergulho de cabeça na análise de dados, buscando não apenas números, mas significado e oportunidades ocultas
                    </p>
                    <div className="flex gap-2 pt-3">
                        <button disabled={true} className=" bg-teal-700 hover:opacity-75 text-white py-2 px-4 rounded-lg">
                            Power Bi
                        </button>
                    </div>
                </div>
                <Image src='/Gráfico.jpg' 
                width='250' 
                height='250'
                className="rounded-xl" />
            </div>

            <div className="flex gap-7 pt-5">
                <Image src='/Design.png' 
                width='250' 
                height='250'
                className="rounded-xl" />
                <div className="space-y-3 pt-3">
                    <h2 className="text-2xl font-bold">
                        Desenvolvimento do Design
                    </h2>
                    <p>
                    Bem-vindo ao mundo da análise de dados reinventada! Sou um engenheiro apaixonado pela intersecção entre tecnologia e insights transformadores. Com uma mente inquisitiva e uma sede insaciável por desafios, mergulho de cabeça na análise de dados, buscando não apenas números, mas significado e oportunidades ocultas
                    </p>
                    <div className="flex gap-2 pt-3">
                        <button disabled={true} className=" bg-teal-700 hover:opacity-75 text-white py-2 px-4 rounded-lg">
                            Power Point
                        </button>
                        <button disabled={true} className=" bg-teal-600 hover:opacity-75 text-white py-2 px-4 rounded-lg">
                            Figma
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex gap-7 pt-5">
                <div className="space-y-3 pt-3">
                    <h2 className="text-2xl font-bold">
                        Validação e Correção
                    </h2>
                    <p>
                    Bem-vindo ao mundo da análise de dados reinventada! Sou um engenheiro apaixonado pela intersecção entre tecnologia e insights transformadores. Com uma mente inquisitiva e uma sede insaciável por desafios, mergulho de cabeça na análise de dados, buscando não apenas números, mas significado e oportunidades ocultas
                    </p>
                    <div className="flex gap-2 pt-3">
                        <button disabled={true} className=" bg-teal-700 hover:opacity-75 text-white py-2 px-4 rounded-lg">
                            Reuniões
                        </button>
                    </div>
                </div>
                <Image src='/validação.jpg' 
                width='250' 
                height='250'
                className="rounded-xl" />
            </div>
            <div></div>
        </div>
    )
}

export default Services;