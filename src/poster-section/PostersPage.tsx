import React, { useEffect, useState } from "react";
import { ImageGallery } from "./ImageGallery";
import { posters } from "./posterDetails";

const PostersPage: React.FC = () => {
  const [randomizedPosters] = useState(() => [...posters].sort(() => Math.random() - 0.5));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[--color-dark] px-6 pb-20 pt-24 text-[#e4ded7] sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col items-center justify-center text-center md:mb-16">
          <span className="head-font mb-4 text-sm font-bold uppercase tracking-[0.4em] text-[--color-turquoise]">
            Visual Archive
          </span>
          <h1 className="head-font mb-4 text-5xl uppercase tracking-tighter text-white sm:text-7xl md:text-8xl">
            Posters
          </h1>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-gray-400 md:text-xl">
            A simple gallery of graphics, poster studies, campaign visuals, and visual experiments.
          </p>
        </header>

        <ImageGallery images={randomizedPosters} />
      </div>
    </div>
  );
};

export default PostersPage;
