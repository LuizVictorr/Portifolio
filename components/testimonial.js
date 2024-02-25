import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight} from "react-icons/fa";

const SlideIndicator = ({ totalSlides, currentSlideIndex, setCurrentSlide }) => {
    return (
        <div className="flex">
            {Array.from({ length: totalSlides }).map((_, index) => (
                <span
                    key={index}
                    className={`h-3 w-3 rounded-full mx-1 cursor-pointer ${currentSlideIndex === index ? 'bg-teal-600' : 'bg-slate-50'}`}
                    onClick={() => setCurrentSlide(index)}
                ></span>
            ))}
        </div>
    );
};

const Testimonial = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: "/fmc.jpg",
            title: "FMC Agrícola",
            description: "Bem-vindo ao mundo da análise de dados reinventada! Sou um engenheiro apaixonado pela intersecção entre tecnologia e insights transformadores. Com uma mente inquisitiva e uma sede insaciável por desafios, mergulho de cabeça na análise de dados, buscando não apenas números, mas significado e oportunidades ocultas"
        },
        {
            image: "/uniube.jpg",
            title: "Uniube - Universidade de Uberaba",
            description: "Bem-vindo ao mundo da análise de dados reinventada! Sou um engenheiro apaixonado pela intersecção entre tecnologia e insights transformadores. Com uma mente inquisitiva e uma sede insaciável por desafios, mergulho de cabeça na análise de dados, buscando não apenas números, mas significado e oportunidades ocultas"
        },
        {
            image: "/sipcam.jpg",
            title: "Sipcam Nichim",
            description: "Bem-vindo ao mundo da análise de dados reinventada! Sou um engenheiro apaixonado pela intersecção entre tecnologia e insights transformadores. Com uma mente inquisitiva e uma sede insaciável por desafios, mergulho de cabeça na análise de dados, buscando não apenas números, mas significado e oportunidades ocultas"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    return (
        <div className="flex gap-10 py-24">
            <Image 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title} 
                width='200' 
                height='300' 
                className="rounded-xl"/>
            <div className="space-y-5">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-500 to-lime-400 text-transparent bg-clip-text">
                    DEPOIMENTOS
                </h1>
                <p>{slides[currentSlide].description}</p>
                <h2 className="font-bold">by: {slides[currentSlide].title}</h2>
                <div className="flex items-center justify-between">
                    <SlideIndicator
                        totalSlides={slides.length}
                        currentSlideIndex={currentSlide}
                        setCurrentSlide={setCurrentSlide}
                    />
                    <div className="flex gap-2">
                        <button onClick={prevSlide}><FaArrowLeft/></button>
                        <button onClick={nextSlide}><FaArrowRight/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
