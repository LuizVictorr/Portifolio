import Gallery from "@/components/gallery";
import Intro from "@/components/intro";
import About from "@/components/about";
import React from "react";
import Testimonial from "@/components/testimonial";
import Services from "@/components/services";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="bg-slate-950 h-20">
        <div className=" text-slate-50 max-w-4xl m-auto">
          <p>Header</p>
          
        </div>
      </div>
      <div className="bg-slate-800">
        <div className=" text-slate-50 max-w-4xl m-auto">
          <Intro/>
          <About/>
        </div>
      </div>
      <div className="bg-slate-600">
        <div className=" text-slate-50 max-w-4xl m-auto">
          <Services/>
        </div>
      </div>
      <div className="bg-slate-800">
        <div className=" text-slate-50 max-w-4xl m-auto">
          <Gallery/>
        </div>
      </div>
      <div className="bg-slate-600">
        <div className=" text-slate-50 max-w-4xl m-auto">
          <Testimonial/>
        </div>
      </div>
      <div className="bg-slate-950 h-20">
        <div className=" text-slate-50 max-w-4xl m-auto">
          <p>Header</p>
        </div>
      </div>
    </div>
  )
}

export default Home;