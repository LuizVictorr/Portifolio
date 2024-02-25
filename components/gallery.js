// components/ImageGallery.js
import React, {useState} from 'react';
import Modal from './modal';
import { FaTimes } from 'react-icons/fa';

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openModal = (image) => {
        setIsOpen(true);
        setCurrentImage(image);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentImage(null);
    };

  const images = [
    {
      src: '/Dashboard de Produção.png',
      title: 'Dashboard de Produção',
      alt: 'Dashboard de Produção',
      description: 'O dashboard de produção é um painel visual que reúne informações críticas sobre indicadores-chave, como qualidade, disponibilidade, desempenho, quantidades produzidas, tempo disponível e Eficiência Global dos Equipamentos (OEE). Ele oferece uma visão detalhada dos índices de conformidade, tempos de inatividade, desempenho da linha, quantidades produzidas e tempo disponível. Além disso, calcula e exibe o OEE para medir a eficiência global dos equipamentos. Em suma, o dashboard fornece uma visão completa e em tempo real do desempenho da linha de produção, permitindo que os gestores tomem decisões informadas para otimizar a eficiência operacional.',
      iframeSrc: 'https://app.powerbi.com/view?r=eyJrIjoiOWU2ZTMzZDQtMTQwZC00ZTZhLTkyMDQtNjhlNjExNWUwMTVlIiwidCI6ImUwOWM1N2JmLTBjYmUtNDQ0Ny05MDRlLWFlMzEyMzA3YmQ4MyJ9',
    },
    {
      src: '/Dashboard de Manutenção.png',
      title: 'Dashboard de Manutenção',
      alt: 'Dashboard de Manutenção',
      description: 'O dashboard de manutenção é uma ferramenta essencial para monitorar e gerenciar as atividades de manutenção em uma organização. Ele reúne informações-chave, como MTTR, MTBF, disponibilidade, perdas por equipamentos e perdas por mês. O MTTR indica o tempo médio de reparo após uma falha, enquanto o MTBF representa o intervalo médio entre falhas de um equipamento. A disponibilidade mostra o quanto um equipamento está disponível para operação planejada. O dashboard detalha as perdas por equipamentos e por mês, permitindo a alocação eficiente de recursos e o planejamento para enfrentar desafios sazonais. Em suma, fornece uma visão completa do desempenho da manutenção para tomada de decisões informadas e melhoria contínua dos processos.',
      iframeSrc: 'https://app.powerbi.com/view?r=eyJrIjoiNzAwZTk1OTUtNTQxZS00NTEwLWE0OTQtMGZmYzdlNTFkNDI5IiwidCI6ImUwOWM1N2JmLTBjYmUtNDQ0Ny05MDRlLWFlMzEyMzA3YmQ4MyJ9',
    },
    {
        src: '/Dashboard de Estoque.png',
        title: 'Dashboard de Estoque',
        alt: 'Dashboard de Estoque',
        description: 'O dashboard de estoque de água reutilizável é uma ferramenta vital para o controle eficiente do armazenamento, geração e consumo de água reutilizável em uma organização. Ele destaca indicadores-chave, como quantidade estocada, quantidade gerada, quantidade consumida, quantidade por mês e quantidade por produto. Esses indicadores fornecem uma visão instantânea do volume de água disponível, entradas e saídas, padrões sazonais de consumo, e alocação por produto. Em suma, o dashboard oferece uma visão abrangente e em tempo real do fluxo de água reutilizável, permitindo a identificação de oportunidades de otimização e planejamento estratégico sustentável.',
        iframeSrc: 'https://app.powerbi.com/view?r=eyJrIjoiN2Q1ZTQxY2ItY2E3NC00NWY1LWFkYjktYzE2NDA4YTc2N2ZlIiwidCI6ImUwOWM1N2JmLTBjYmUtNDQ0Ny05MDRlLWFlMzEyMzA3YmQ4MyJ9',
      },
      {
        src: '/Dashboard de Clima Organizacional.png',
        title: 'Dashboard de Clima Organizacional',
        alt: 'Dashboard de Clima Organizacional',
        description: 'O dashboard de clima organizacional é uma ferramenta que fornece uma visão resumida e clara do ambiente interno de uma empresa, destacando satisfações, insatisfações, motivos e necessidades básicas dos colaboradores. Com gráficos intuitivos, ele permite uma análise rápida e eficiente, ajudando os gestores a identificar áreas de melhoria e tomar decisões estratégicas para promover um ambiente de trabalho positivo e produtivo.',
        iframeSrc: 'https://app.powerbi.com/view?r=eyJrIjoiZGQ0M2JiYjctNDhmNC00OWI0LWJlZDMtY2Y5NGExM2I5OWNjIiwidCI6ImUwOWM1N2JmLTBjYmUtNDQ0Ny05MDRlLWFlMzEyMzA3YmQ4MyJ9',
      },
      {
        src: '/Dashboard de OEE.png',
        title: 'Dashboard de OEE',
        alt: 'Dashboard de OEE',
        description: 'O dashboard de OEE é uma ferramenta que fornece uma visão abrangente do desempenho dos equipamentos em uma organização. Ele apresenta gráficos de ineficiência, performance, paradas programadas e não programadas, e tempos de produção filtrados por Data, Área, Turno, Atividade e Produto. Isso permite uma análise detalhada e personalizada do OEE e outros indicadores relacionados, facilitando a identificação de oportunidades de melhoria na eficiência operacional.',
        iframeSrc: 'https://app.powerbi.com/view?r=eyJrIjoiOWRjZjlmMGUtZTQ4My00MDVmLThlZmUtNWZiMDk2NDk1M2JhIiwidCI6ImUwOWM1N2JmLTBjYmUtNDQ0Ny05MDRlLWFlMzEyMzA3YmQ4MyJ9',
      },
      
    // Adicione mais objetos de imagem conforme necessário
  ];

  return (
    <div className='py-24 space-y-5'>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-500 to-lime-400 text-transparent bg-clip-text text-center">
        PRINCIPAIS PROJETOS
      </h1>
      <div className="grid grid-cols-3 gap-5 p-5">
          {images.map((image, index) => (
            <button onClick={() => openModal(image)}>
              <div key={index} className="">
                  <img className=' h-50 w-96 rounded'
                      src={image.src}
                      alt={image.alt}
                  />
                  <h1 className='font-bold'>
                    {image.title}
                  </h1>
              </div>
            </button>
          ))}
          <Modal isOpen={isOpen}>
              {currentImage && (
                  <div>
                    <div className='flex justify-between pb-4 px-2 text-xl font-bold'>
                      <button disabled={true}>{currentImage.title}</button>
                      <button onClick={closeModal} className=" text-white font-bold">
                        <FaTimes/>
                      </button>
                    </div>
                    <iframe 
                      className='rounded-lg'
                      title={currentImage.title} 
                      width="850" 
                      height="550" 
                      src={currentImage.iframeSrc} 
                      frameborder="0" 
                      allowFullScreen="true" 
                    />
                  </div>
              )}
          </Modal>
      </div>
    </div>
  );
};

export default Gallery;
