import Image from "next/image";
import React from "react";

const About = () => {

    return (
        <div className="pt-24 pb-60 space-y-5">
            <div className="flex gap-10">
                <Image src='/Logo 3.png' width='200' height='200' className="py-5"/>
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-500 to-lime-400 text-transparent bg-clip-text">
                        SOBRE MIM
                    </h1>
                    <p>
                        Sou um engenheiro apaixonado por tecnologia e insights transformadores. Com sede insaciável por desafios,Utilizo a tríade imbatível de ferramentas 
                        - Excel, Power BI e Python - trago à tona padrões, tendências e soluções que desvendam os mistérios por trás dos dados. Se você busca um parceiro 
                        para maximizar a eficiência, otimizar a performance e desbravar o desconhecido, então você veio ao lugar certo. Portanto, vamos juntos desvendar 
                        novos desafios e alcançar o sucesso empresarial como nunca antes.
                    </p>
                    <div className="flex gap-20">
                        <div>
                            <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 via-lime-400 to-lime-400 text-transparent bg-clip-text">
                                5+
                            </h1>
                            <p>anos de experiência em <br/>análise de dados</p>
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-lime-400 text-transparent bg-clip-text">
                                20+
                            </h1>
                            <p>de projetos executados <br/> e finalizados</p>
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 via-lime-400 to-lime-400 text-transparent bg-clip-text">5</h1>
                            <p>Empresas satisfeitas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;