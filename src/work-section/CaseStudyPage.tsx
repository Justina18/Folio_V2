import React, { useEffect } from "react";
import { caseStudies } from "./caseStudyDetails";
import {
  ArrowDown,
  BadgeAlert,
  FileClock,
  Filter,
  GitBranch,
  Globe2,
  HelpCircle,
  KeyRound,
  LockKeyhole,
  Megaphone,
  Network,
  Palette,
  PlugZap,
  Radio,
  RefreshCcw,
  Route,
  ShieldCheck,
  Sparkles,
  Timer,
  type LucideIcon,
  Workflow,
} from "lucide-react";

interface CaseStudyPageProps {
  slug: string;
  onNavigate: (hash: string) => void;
}

const iconMap: Record<string, LucideIcon> = {
  RefreshCcw,
  ShieldCheck,
  Workflow,
  Radio,
  Filter,
  PlugZap,
  GitBranch,
  Route,
  KeyRound,
  FileClock,
  Network,
  LockKeyhole,
  Sparkles,
  Palette,
  Megaphone,
  BadgeAlert,
  Timer,
  Globe2,
};

const renderIcon = (name: string) => {
  const Icon = iconMap[name] ?? HelpCircle;
  return <Icon className="w-8 h-8 text-[--color-turquoise] mb-4" />;
};

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ slug, onNavigate }) => {
  const currentProject = caseStudies.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!currentProject) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[--color-dark] text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => onNavigate("#/works")}
            className="cursor-none px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all"
          >
            Back to All Works
          </button>
        </div>
      </div>
    );
  }

  // Find next project for the teaser
  const currentIndex = caseStudies.findIndex((p) => p.slug === slug);
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length];
  const hasWireframes =
    Boolean(currentProject.wireframesText) ||
    Boolean(currentProject.wireframesImages?.length);
  const hasDesignSystem =
    Boolean(currentProject.designColors?.length) ||
    Boolean(currentProject.designTypography);
  const hasExperience = Boolean(currentProject.experienceFlows?.length);
  const hasReflections = Boolean(currentProject.reflections?.length);
  const metaItems = [
    { label: "Role", value: currentProject.role },
    { label: "Duration", value: currentProject.duration },
    { label: "Platform", value: currentProject.platform },
    { label: "Screens", value: currentProject.screens },
  ].filter((item) => Boolean(item.value));

  return (
    <div className="min-h-screen bg-[--color-dark] text-[#e4ded7] pt-24">
      {/* 1. Hero Section */}
      <section className="px-6 sm:px-10 lg:px-16 mb-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col animate__animated animate__fadeInLeft">
          <span className="head-font text-xl text-[--color-turquoise] font-bold tracking-widest uppercase mb-4">
            Vol. {currentProject.index}
          </span>
          <h1 className="head-font text-5xl sm:text-7xl font-bold text-white uppercase leading-[0.95] mb-6">
            {currentProject.title}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-8">
            {currentProject.subtitle}
          </p>
          <div>
            <a href="#overview" className="cursor-none inline-flex items-center gap-2 font-bold bg-transparent text-white px-6 py-3 rounded-sm border-b-2">
              Read the story <ArrowDown size={18} />
            </a>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden bg-[#011c21]/30 border border-gray-800 p-6 flex justify-center items-center aspect-video animate__animated animate__fadeInRight">
          <img
            src={currentProject.heroImage}
            alt={currentProject.title}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* 2. Meta Info Row */}
      <section className="border-y border-gray-800/80 bg-[--color-darker] py-12 px-6 sm:px-10 lg:px-16 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {metaItems.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <span className="text-xs uppercase font-bold tracking-widest text-gray-500">
                {item.label}
              </span>
              <span className="text-lg font-semibold text-white">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Overview Section */}
      <section id="overview" className="px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto text-center mb-28">
        <h2 className="head-font text-3xl sm:text-5xl text-white uppercase mb-8">
          Overview
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed">
          {currentProject.overviewText}
        </p>
      </section>

      {/* 4. The Problem Section */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-28">
        <div className="text-center mb-16">
          <h2 className="head-font text-3xl sm:text-5xl text-white uppercase mb-4">
            The Problem
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto font-light">
            {currentProject.problemHeading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {currentProject.problemCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[--color-darker] border border-gray-800 p-8 rounded-2xl flex flex-col items-start hover:border-[--color-turquoise]/40 transition-colors duration-300"
            >
              {renderIcon(card.iconName)}
              <h4 className="text-xl font-bold text-white mb-3">
                {card.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto text-center leading-relaxed">
          {currentProject.problemClosing}
        </p>
      </section>

      {/* 5. Goals Section */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto mb-28">
        <div className="text-center mb-16">
          <h2 className="head-font text-3xl sm:text-5xl text-white uppercase mb-4">
            Goals
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {currentProject.goals.map((goal, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start justify-between border-b border-gray-800/50 pb-8 ${
                  isLeft ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="head-font text-4xl sm:text-5xl text-[--color-turquoise] font-bold">
                  {goal.number}
                </div>
                <div className={`flex-1 max-w-xl ${isLeft ? "md:text-left" : "md:text-right"}`}>
                  <h4 className="text-xl font-bold text-white mb-2">{goal.title}</h4>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{goal.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Wireframes Section */}
      {hasWireframes ? (
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {currentProject.wireframesText ? (
            <div>
              <h2 className="head-font text-3xl sm:text-5xl text-white uppercase mb-6">
                Wireframes
              </h2>
              <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                {currentProject.wireframesText}
              </p>
            </div>
          ) : null}
          {currentProject.wireframesImages?.length ? (
            <div className="relative flex justify-center items-center aspect-video bg-[#011c21]/20 border border-gray-800/80 rounded-2xl p-6 overflow-hidden">
              <div className="relative w-full h-full flex gap-4 items-center justify-center">
                {currentProject.wireframesImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="Wireframe preview"
                    className={`w-[45%] h-auto rounded-lg shadow-xl border border-gray-800 transition-transform duration-500 hover:scale-110 ${
                      idx === 0 ? "rotate-[-4deg] translate-x-2" : "rotate-[4deg] -translate-x-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </section>
      ) : null}

      {/* 7. Design System Section */}
      {hasDesignSystem ? (
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-28">
          <div className="bg-[--color-darker] border border-gray-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {currentProject.designColors?.length ? (
              <div>
                <h4 className="head-font text-xl text-white uppercase mb-8 tracking-wider">
                  Colors
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-6">
                  {currentProject.designColors.map((color, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl border border-gray-700/60 shadow-lg shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white whitespace-nowrap">
                          {color.name}
                        </span>
                        <span className="text-xs text-gray-500 uppercase tracking-widest">
                          {color.hex}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {currentProject.designTypography ? (
              <div className="border-t lg:border-t-0 lg:border-l border-gray-800 pt-8 lg:pt-0 lg:pl-12 flex flex-col justify-center">
                <h4 className="head-font text-xl text-white uppercase mb-4 tracking-wider">
                  Typography
                </h4>
                <div className="flex flex-col gap-4">
                  <span className="head-font text-3xl sm:text-4xl text-[--color-turquoise] font-bold">
                    Aa Bb Cc
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Font: <strong className="text-white">{currentProject.designTypography.fontFamily}</strong>
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {currentProject.designTypography.weights.map((wt, idx) => (
                      <span
                        key={idx}
                        className="text-xs uppercase font-bold tracking-widest text-gray-500 px-3 py-1 bg-gray-900 border border-gray-800 rounded-md"
                      >
                        {wt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* 8. The Experience Section */}
      {hasExperience ? (
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-28">
          <div className="text-center mb-16">
            <h2 className="head-font text-3xl sm:text-5xl text-white uppercase mb-4">
              {currentProject.experienceHeading || "The Experience"}
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto font-light">
              Interactive user flows, systems, and product details.
            </p>
          </div>

          <div className="flex flex-col gap-20">
            {currentProject.experienceFlows?.map((flow, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-gray-800/30 pb-16 last:border-b-0 last:pb-0"
              >
                <div className={flow.images?.length ? "lg:col-span-5 flex flex-col gap-4" : "lg:col-span-12 flex flex-col gap-4 max-w-3xl mx-auto text-center"}>
                  <h4 className="text-2xl font-bold text-white">
                    {flow.heading}
                  </h4>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {flow.description}
                  </p>
                </div>
                {flow.images?.length ? (
                  <div className="lg:col-span-7 flex justify-center items-center bg-[#011c21]/20 border border-gray-800 p-6 rounded-2xl aspect-video overflow-hidden">
                    {flow.images.map((img, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={img}
                        alt={`${flow.heading} visual`}
                        className="max-w-[85%] max-h-full object-contain rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* 9. Reflection Section */}
      {hasReflections ? (
        <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto mb-28">
          <div className="bg-[--color-darker] border border-gray-800 rounded-3xl p-8 sm:p-12">
            <div className="text-center mb-12">
              <h2 className="head-font text-3xl sm:text-5xl text-white uppercase">
                {currentProject.reflectionHeading || "Reflection"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentProject.reflections?.map((ref, idx) => (
                <div
                  key={idx}
                  className="bg-[--color-dark] border border-gray-800/80 p-8 rounded-2xl hover:border-[--color-turquoise]/40 transition-colors duration-300"
                >
                  <h4 className="text-lg font-bold text-white mb-3">
                    {ref.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {ref.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 10. Next Project Teaser */}
      <section
        onClick={() => onNavigate(`#/works/${nextProject.slug}`)}
        className="cursor-none relative overflow-hidden bg-cover bg-center border-t border-gray-800 py-24 px-6 sm:px-10 lg:px-16 text-center group flex flex-col justify-center items-center min-h-[350px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('${nextProject.heroImage}')`,
        }}
      >
        <div className="flex flex-col items-center gap-4 z-10 transition-transform duration-500 group-hover:scale-105">
          <span className="head-font text-[--color-turquoise] text-sm uppercase tracking-widest font-bold">
            Up Next (Vol. {nextProject.index})
          </span>
          <h2 className="head-font text-4xl sm:text-6xl text-white uppercase font-bold group-hover:underline transition-all">
            {nextProject.title}
          </h2>
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest mt-4">
            Click to view next story -&gt;
          </span>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
