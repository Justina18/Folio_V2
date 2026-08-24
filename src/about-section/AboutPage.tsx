import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { companies } from "./companyDetails";

interface AboutPageProps { onNavigate: (hash: string) => void; }

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return <main className="min-h-screen bg-[--color-dark] text-[#e4ded7] px-6 pb-24 pt-24 sm:px-10 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <header className="mb-20 max-w-4xl animate__animated animate__fadeInDown">
        <p className="head-font mb-4 text-sm font-bold uppercase tracking-widest text-[--color-turquoise]">About me</p>
        <h1 className="head-font mb-8 text-5xl uppercase leading-[.95] tracking-tighter text-white sm:text-7xl md:text-8xl">Designing, building, and making things move.</h1>
        <p className="max-w-3xl text-lg font-light leading-relaxed text-gray-400 md:text-xl">I’m a product designer and frontend developer with 4+ years of experience shaping clear, useful digital products. I bring design thinking and frontend craft together to create interfaces that look considered and work beautifully.</p>
      </header>

      <section className="mb-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div><p className="head-font text-sm font-bold uppercase tracking-widest text-[--color-turquoise]">01</p><h2 className="head-font mt-2 text-3xl uppercase text-white sm:text-5xl">Experience</h2></div>
          <p className="hidden max-w-sm text-right text-sm leading-relaxed text-gray-500 sm:block">A selection of teams, products, and ventures I’ve contributed to.</p>
        </div>
        <div className="border-t border-gray-800/80">
          {companies.map((company) => <button key={company.slug} onClick={() => onNavigate(`#/about/${company.slug}`)} className="group grid w-full cursor-none grid-cols-1 gap-4 border-b border-gray-800/80 py-7 text-left transition-colors hover:bg-white/[.03] sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:px-4">
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[--color-turquoise] sm:text-2xl">{company.name}</h3>
            <div className="text-sm leading-relaxed text-gray-400">{company.roles.map((role) => <p key={role.title}>{role.title}</p>)}</div>
            <div className="flex items-center justify-between gap-5 text-sm text-gray-500 sm:justify-end">{company.roles.map((role) => <span key={role.duration}>{role.duration}</span>)}<ArrowUpRight className="text-[--color-turquoise] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={20} /></div>
          </button>)}
        </div>
      </section>

      <section className="mb-28 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-800 bg-[--color-darker] p-8 sm:p-10"><p className="head-font mb-6 text-sm font-bold uppercase tracking-widest text-[--color-turquoise]">02 / Skills</p><h2 className="head-font mb-8 text-3xl uppercase text-white sm:text-4xl">Beyond the interface</h2><div className="flex flex-col gap-5 text-gray-400"><p><span className="font-semibold text-white">Motion design</span><br />Jitter</p><p><span className="font-semibold text-white">Graphic design</span><br />Canva, Photoshop</p><p><span className="font-semibold text-white">Operations management</span></p></div></div>
        <div className="rounded-2xl border border-gray-800 bg-[--color-darker] p-8 sm:p-10"><p className="head-font mb-6 text-sm font-bold uppercase tracking-widest text-[--color-turquoise]">03 / Education</p><h2 className="mb-3 text-2xl font-bold text-white">Bachelor of Applied Geophysics</h2><p className="mb-6 text-gray-400">University of Benin · 2022–2026</p><p className="text-sm leading-relaxed text-gray-500">Seismology, Seismic Reflection, and Exploration Geophysics.</p></div>
      </section>
    </div>
  </main>;
};

export default AboutPage;
