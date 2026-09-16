import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Figma, Github, Code } from "lucide-react";

interface Panel {
  id: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  backgroundImage: string;
  gradientClass: string;
  slug: string;
}

interface PanelItemProps {
  panel: Panel;
  isSelected: boolean;
  onMouseEnter: () => void;
  desktopMedium: boolean;
}

interface MediaQueryState {
  desktopMedium: boolean;
}

const useMediaQuery = (): MediaQueryState => {
  const [desktopMedium, setDesktopMedium] = useState<boolean>(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (event: MediaQueryListEvent): void => {
      setDesktopMedium(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return { desktopMedium };
};

const Dashboard: React.FC = () => {
  const [expandedPanel, setExpandedPanel] = useState<number>(0);
  const { desktopMedium } = useMediaQuery();

  const panels: Panel[] = [
    {
      id: 0,
      title: "Rukkyman",
      description:
        "A portfolio site built for filmmaker Oghenerukevwe 'Rukky' Otebele, with animated storytelling and a custom HaloReel image carousel.",
      icon: <Code size={40} />,
      backgroundImage: "/blog.png",
      gradientClass: "bg-gradient-to-br from-emerald-500/20 to-emerald-600/10",
      slug: "rukkyman",
    },
    {
      id: 1,
      title: "Physiohelp",
      description:
        "A healthcare experience with frontend improvements for appointment discovery and booking workflows.",
      icon: <Code size={40} />,
      backgroundImage: "/PHelp.jpg",
      gradientClass: "bg-gradient-to-br from-cyan-500/20 to-cyan-600/10",
      slug: "physiohelp",
    },
    {
      id: 2,
      title: "Investure",
      description:
        "A React and TypeScript stabilization effort covering Netlify migration, redirects, auth headers, and axios interceptors.",
      icon: <Github size={40} />,
      backgroundImage: "/gems.jpg",
      gradientClass: "bg-gradient-to-br from-emerald-500/20 to-emerald-600/10",
      slug: "investure",
    },
    {
      id: 3,
      title: "Cirra",
      description:
        "A crypto conversion platform shaped across frontend, design, operations, and leadership responsibilities.",
      icon: <Figma size={40} />,
      backgroundImage: "/cirra.png",
      gradientClass: "bg-gradient-to-br from-blue-500/20 to-blue-600/10",
      slug: "cirra",
    },
    {
      id: 4,
      title: "Community Shield",
      description:
        "A Next.js 14 safety platform with broadcast alert modules, resident filters, and clean API boundaries.",
      icon: <Code size={40} />,
      backgroundImage: "/csa.png",
      gradientClass: "bg-gradient-to-br from-purple-500/20 to-purple-600/10",
      slug: "community-shield",
    },
    {
      id: 5,
      title: "Alazethe",
      description:
        "A haircare brand identity and packaging system designed for a confident, distinctive shelf presence.",
      icon: <Code size={40} />,
      backgroundImage: "/chef.png",
      gradientClass: "bg-gradient-to-br from-white-500/20 to-amber-600/10",
      slug: "alazethe",
    },
    {
      id: 6,
      title: "Pick Me",
      description:
        "A Gen Z snack brand identity study built around Cobalt blue, Mustard yellow, and launch-ready GTM thinking.",
      icon: <Figma size={40} />,
      backgroundImage: "/chef.png",
      gradientClass: "bg-gradient-to-br from-rose-500/20 to-rose-600/10",
      slug: "pick-me",
    },
  ];

  const handleMouseEnter = (id: number): void => {
    setExpandedPanel(id);
  };

  return (
    <div id="work" className="flex fadeIn items-center flex-col w-full h-screen text-gray-100 p-6 overflow-hidden bg-[#011c21] bg-center">
      <header className="mb-6 flex flex-col items-center">
        <p className="flex max-w-[500px] pr-5 flex-col items-start text-left font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,10vw,100px)]">
          portfolio
        </p>
        <p className="text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]">
          Some of my portfolio showcase
        </p>
      </header>

      <div className="flex flex-1 space-x-3 overflow-x-auto py-4">
        {panels.map((panel) => (
          <PanelItem
            key={panel.id}
            panel={panel}
            isSelected={expandedPanel === panel.id}
            onMouseEnter={() => handleMouseEnter(panel.id)}
            desktopMedium={desktopMedium}
          />
        ))}
      </div>
    </div>
  );
};

const PanelItem: React.FC<PanelItemProps> = ({
  panel,
  isSelected,
  onMouseEnter,
  desktopMedium,
}) => {
  const startWidth = desktopMedium ? 70 : 100;
  const endWidth = desktopMedium ? 563 : 575;

  const props = useSpring({
    width: isSelected ? endWidth : startWidth,
    config: { mass: 5, friction: 120, tension: 600 },
  });

  const contentProps = useSpring({
    opacity: isSelected ? 1 : 0,
    config: { duration: 600 },
  });

  return (
    <animated.div
      className={`relative h-full rounded-xl backdrop-blur-sm overflow-hidden ${
        isSelected
          ? "bg-gray-800/20 border border-gray-700"
          : "bg-gray-800/20 border border-gray-800/50"
      }`}
      style={props}
      onMouseEnter={onMouseEnter}
    >
      <div className="absolute inset-0 -z-10 rounded-xl overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out ${
            isSelected ? "scale-110 opacity-40" : "scale-100 opacity-20"
          }`}
          style={{
            backgroundImage: `url('${panel.backgroundImage}')`,
          }}
        ></div>
        <div
          className={`absolute inset-0 ${panel.gradientClass} opacity-50 -z-5`}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20 -z-5"></div>
      </div>

      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-400/50 to-transparent transition-opacity duration-500 ${
          isSelected ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div
        className={`absolute flex items-center z-10 pointer-events-none h-6 top-60 left-8 w-96 transform-gpu -translate-x-1/2 -translate-y-1/2 rotate-90 origin-center ${
          isSelected ? "" : "opacity-80"
        }`}
      >
        <span className="text-lg font-semibold tracking-wide text-gray-200 whitespace-nowrap">
          {panel.title}
        </span>
      </div>

      <animated.div
        className="absolute inset-0 w-9/12 pointer-events-none"
        style={contentProps}
      >
        <div className="p-5 pl-16 h-full flex flex-col mt-8">
          <div className="flex items-center mb-3">
            <div className="p-2 rounded-lg bg-gray-700/50 mr-3">
              {panel.icon}
            </div>
          </div>

          <p className="text-gray-300 mb-5 text-lg md:w-auto leading-relaxed">
            {panel.description}
          </p>

          <div className="mt-auto pointer-events-auto flex items-center gap-3">
            <a
              href={`#/works/${panel.slug}`}
              className="inline-flex items-center space-x-2 mb-8 bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-white hover:text-black no-underline"
            >
              <span>Read Story</span>
            </a>
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default Dashboard;
