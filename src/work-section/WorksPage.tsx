import React from "react";
import { caseStudies } from "./caseStudyDetails";
import { ArrowUpRight } from "lucide-react";

interface WorksPageProps {
  onNavigate: (hash: string) => void;
}

const WorksPage: React.FC<WorksPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[--color-dark] text-[#e4ded7] pt-24 pb-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16 md:mb-24 flex flex-col items-center justify-center text-center">
          <h1 className="head-font text-5xl sm:text-7xl md:text-8xl text-white uppercase tracking-tighter mb-4 animate__animated animate__fadeInDown">
            All Works
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed animate__animated animate__fadeInUp">
            A comprehensive showcase of my projects, product designs, and engineering case studies.
          </p>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {caseStudies.map((project, index) => (
            <div
              key={project.slug}
              onClick={() => onNavigate(`#/works/${project.slug}`)}
              className="group cursor-none bg-[--color-darker] border border-gray-800/80 rounded-2xl overflow-hidden hover:border-[#3CC8C8]/50 transition-all duration-500 flex flex-col h-full shadow-lg hover:shadow-[#3CC8C8]/5 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image Container */}
              <div className="relative overflow-hidden aspect-video bg-[#011c21]/40 flex items-center justify-center border-b border-gray-800/50">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 justify-between">
                  <span className="text-white font-bold text-sm tracking-widest uppercase">
                    Read Case Study
                  </span>
                  <div className="p-2 bg-white rounded-full text-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              {/* Text details */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <span className="head-font text-2xl text-[--color-turquoise] opacity-80">
                    {project.index}
                  </span>
                  <span className="text-xs uppercase font-bold tracking-widest text-gray-500 px-3 py-1 bg-gray-900 border border-gray-800 rounded-full">
                    {project.platform}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[--color-turquoise] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {project.subtitle}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-800/50 flex justify-between items-center text-xs font-semibold text-gray-500 uppercase tracking-wider group-hover:text-white transition-colors">
                  <span>{project.role}</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">-&gt;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksPage;
