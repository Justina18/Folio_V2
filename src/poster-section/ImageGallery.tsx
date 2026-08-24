import React from "react";
import { useInView } from "framer-motion";
import { AspectRatio } from "../components/ui/aspect-ratio";
import { cn } from "../lib/utils";
import { Poster } from "./posterDetails";

interface ImageGalleryProps {
  images: Poster[];
}

interface AnimatedImageProps {
  alt: string;
  title: string;
  src: string;
  ratio: number;
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="relative flex w-full flex-col items-center justify-center px-4 py-10 sm:px-0">
      <div className="mx-auto grid w-full max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <AnimatedImage
            key={image.title}
            alt={image.title}
            title={image.title}
            src={image.src}
            ratio={4 / 5}
          />
        ))}
      </div>
    </div>
  );
}

function AnimatedImage({ alt, title, src, ratio }: AnimatedImageProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const [isLoading, setIsLoading] = React.useState(Boolean(src));

  return (
    <AspectRatio
      ref={ref}
      ratio={ratio}
      tabIndex={0}
      className="group relative size-full overflow-hidden rounded-lg border border-gray-800/80 bg-[--color-darker] outline-none transition-colors duration-300 hover:border-[--color-turquoise]/60 focus-visible:border-[--color-turquoise]"
    >
      {src ? (
        <img
          alt={alt}
          src={src}
          className={cn(
            "size-full rounded-lg object-cover opacity-0 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:blur-[2px] group-focus-visible:scale-105 group-focus-visible:blur-[2px]",
            isInView && !isLoading && "opacity-100"
          )}
          onLoad={() => setIsLoading(false)}
          loading="lazy"
        />
      ) : (
        <div
          className={cn(
            "flex size-full items-center justify-center rounded-lg bg-[#011c21] px-8 text-center transition-all duration-700 ease-in-out group-hover:blur-[2px] group-focus-visible:blur-[2px]",
            isInView && "opacity-100"
          )}
        >
          <span className="head-font text-3xl uppercase leading-tight text-[#e4ded7]/30">
            {title}
          </span>
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black/35 px-6 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100">
        <span className="text-center text-lg font-semibold text-[#e4ded7]">
          {title}
        </span>
      </div>
    </AspectRatio>
  );
}
