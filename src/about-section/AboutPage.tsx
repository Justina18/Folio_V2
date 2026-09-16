import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { InteractiveTiltCard } from "@/components/ui/tilt-card";
import { companies } from "./companyDetails";

interface AboutPageProps { onNavigate: (hash: string) => void; }

const selectedWorks = ["Community Shield", "Cirra", "Kora Payouts", "Ule Homes", "KakuSkroll", "Rukkyman", "Physiohelp"];
const experienceOrder = ["community-shield", "buildit", "de-verge-hub", "cirra", "nexinventix", "ule-homes", "kora", "the-curve-africa"];

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return <main className="min-h-screen bg-[--color-dark] text-[#e4ded7] px-6 pb-24 pt-24 sm:px-10 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <header className="mb-20 grid max-w-6xl grid-cols-1 items-center gap-10 animate__animated animate__fadeInDown md:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] md:gap-16">
        <div>
          <p className="head-font mb-4 text-sm font-bold uppercase tracking-widest text-[--color-turquoise]">About me</p>
          <h1 className="head-font mb-8 text-5xl uppercase leading-[.95] tracking-tighter text-white sm:text-7xl md:text-8xl">Designing, building, and making things move.</h1>
          <p className="max-w-3xl text-lg font-light leading-relaxed text-gray-400 md:text-xl">Frontend Engineer and Product Designer with 4+ years of experience building and designing web products with JavaScript and TypeScript. I bring product thinking and frontend craft together to create interfaces that are clear, useful, and ready to ship.</p>
          <p className="mt-5 text-sm text-gray-500">igbanijustina@gmail.com · +234 7036825451</p>
        </div>
        <div className="h-full max-h-[520px] w-full">
          <InteractiveTiltCard
            image={{ src: "/Ni1.png", alt: "Justina Igbani" }}
            tiltFactor={12}
            hoverScale={1.03}
            borderRadius={16}
            shadowColor="rgba(0, 0, 0, 0.35)"
            shadowIntensity={0.45}
            glareEffect={true}
            glareIntensity={0.25}
          />
        </div>
      </header>

      <section className="mb-28">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div><p className="head-font text-sm font-bold uppercase tracking-widest text-[--color-turquoise]">01</p><h2 className="head-font mt-2 text-3xl uppercase text-white sm:text-5xl">Experience</h2></div>
          <p className="hidden max-w-sm text-right text-sm leading-relaxed text-gray-500 sm:block">A selection of teams, products, and ventures I’ve contributed to.</p>
        </div>
        <div className="border-t border-gray-800/80">
          {experienceOrder.map((slug) => companies.find((company) => company.slug === slug)).filter((company): company is (typeof companies)[number] => Boolean(company)).map((company) => <button key={company.slug} onClick={() => onNavigate(`#/about/${company.slug}`)} className="group grid w-full cursor-none grid-cols-1 gap-4 border-b border-gray-800/80 py-7 text-left transition-colors hover:bg-white/[.03] sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:px-4">
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[--color-turquoise] sm:text-2xl">{company.name}</h3>
            <div className="text-sm leading-relaxed text-gray-400">{company.roles.map((role) => <p key={role.title}>{role.title}</p>)}</div>
            <div className="flex items-center justify-between gap-5 text-sm text-gray-500 sm:justify-end">{company.roles.map((role) => <span key={role.duration}>{role.duration}</span>)}<ArrowUpRight className="text-[--color-turquoise] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={20} /></div>
          </button>)}
        </div>
      </section>

      <section className="mb-28 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-800 bg-[--color-darker] p-8 sm:p-10"><p className="head-font mb-6 text-sm font-bold uppercase tracking-widest text-[--color-turquoise]">02 / Skills</p><h2 className="head-font mb-8 text-3xl uppercase text-white sm:text-4xl">Engineering, design, and delivery</h2><div className="flex flex-col gap-5 text-gray-400"><p><span className="font-semibold text-white">Frontend engineering</span><br />TypeScript, JavaScript, React, Next.js, React Native, HTML5, CSS3, Tailwind CSS, TanStack Query, REST APIs, Storybook</p><p><span className="font-semibold text-white">Product design</span><br />Figma, FigJam, Information Architecture, User Flows, UI/UX Prototyping, Design Systems, Interaction Design, Product Strategy, Motion Design</p><p><span className="font-semibold text-white">Collaboration and leadership</span><br />Cross-functional Collaboration, Team Leadership, Product Development, Design-to-Development Handoff, Operations Management</p></div></div>
        <div className="rounded-2xl border border-gray-800 bg-[--color-darker] p-8 sm:p-10"><p className="head-font mb-6 text-sm font-bold uppercase tracking-widest text-[--color-turquoise]">03 / Education</p><h2 className="mb-3 text-2xl font-bold text-white">B.Sc. Applied Geophysics</h2><p className="mb-6 text-gray-400">University of Benin · June 2022 - July 2026</p><div className="border-t border-gray-800 pt-5"><h3 className="font-bold text-white">Frontend Certification</h3><p className="text-gray-400">The Curve by Kora · June 2026</p></div></div>
      </section>
      <section className="border-t border-gray-800/80 pt-10">
        <p className="head-font text-sm font-bold uppercase tracking-widest text-[--color-turquoise]">Selected work</p>
        <p className="mt-5 max-w-4xl text-2xl font-bold leading-tight text-white sm:text-4xl">{selectedWorks.join(" · ")}</p>
        <p className="mt-5 text-sm text-gray-500">Recent works across frontend engineering, product design, and client delivery.</p>
      </section>
    </div>
  </main>;
};

export default AboutPage;