import React from "react";
import "animate.css";

const MusicSection = () => {
 
  const carouselItems = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:20",
      icon: "🎵",
      color: "bg-purple-500",
      backgroundImage:
        "https://i.scdn.co/image/ab67616d0000b2734c8b5ffaa8b69bfa8f80dc8f ",
      link: "https://open.spotify.com/track/0VjIjW4Gl4gQsDlVO4ciLC ",
    },
    {
      id: 2,
      title: "Shape of You",
      artist: "Ed Sheeran",
      album: "÷ (Divide)",
      duration: "3:53",
      icon: "🎶",
      color: "bg-blue-500",
      backgroundImage:
        "https://i.scdn.co/image/ab67616d0000b2737db43292a6a99b21f31a7a87 ",
      link: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3 ",
    },
    {
      id: 3,
      title: "Bad Habits",
      artist: "Ed Sheeran",
      album: "= (Equals)",
      duration: "3:51",
      icon: "🎤",
      color: "bg-red-500",
      backgroundImage:
        "https://i.scdn.co/image/ab67616d0000b2733efebad4a0ce61dcf9f2b9f8 ",
      link: "https://open.spotify.com/track/3nico8KkvgoIviAIxNtBub ",
    },
  ];

  // Duplicate items to create seamless loop
  const duplicatedItems = [...carouselItems, ...carouselItems, ...carouselItems];

  return (
    <section className="py-16 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Container */}
        <div className="relative">
          {/* Scrolling Container */}
          <div
            className="flex animate-scroll "
            style={{ animationPlayState: "running" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
          >
            {duplicatedItems.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-72 mx-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                style={{
                  backgroundImage: `url(${item.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                
                }}
              >
                <div className="p-6 bg-black bg-opacity-60 rounded-xl text-white transition-all duration-300 group-hover:bg-opacity-70 h-full flex flex-col justify-between">
                  <div
                    className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center text-xl mb-4 shadow-md group-hover:shadow-lg transition-shadow`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 truncate">
                      {item.title}
                    </h3>
                    <p className="text-sm truncate mb-1">{item.artist}</p>
                    <p className="text-xs truncate mb-2 text-gray-300">
                      {item.album}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                        {item.duration}
                      </span>
                      <div className="flex items-center text-blue-300 hover:text-blue-100 transition-colors">
                        <span className="text-sm font-medium">Play</span>
                        <svg
                          className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 15s;
          }
        }
      `}</style>
    </section>
  );
};

export default MusicSection;
