import { useEffect, useLayoutEffect, useState } from "react";
import CustomCursor from "./CustomCursor";
import LoadingAnimation from "./LoadingAnimation";
import "animate.css";
import NavBar from "./NavBar";
import Blog from "./blog-section/BlogGrid";
import WorksPage from "./work-section/WorksPage";
import CaseStudyPage from "./work-section/CaseStudyPage";
import PostersPage from "./poster-section/PostersPage";
import AboutPage from "./about-section/AboutPage";
import CompanyPage from "./about-section/CompanyPage";
import ContactPage from "./ContactPage";

const recentWork = [
  { title: "Rukkyman", context: "Frontend Developer", slug: "rukkyman" },
  { title: "Physiohelp", context: "Product Designer & Frontend Developer", slug: "physiohelp" },
  { title: "Investure", context: "Frontend Developer", slug: "investure" },
  { title: "Cirra", context: "Frontend Developer / Product Designer", slug: "cirra" },
];

const socials = ["Instagram", "Twitter", "LinkedIn", "Dribbble"];

const LandingHero = ({ isReady }: { isReady: boolean }) => (
  <main className={`landing-hero ${isReady ? "landing-hero--ready" : ""}`}>
    <div className="landing-hero__image" aria-hidden="true" />
    <div className="landing-hero__grain" aria-hidden="true" />

    <div className="landing-hero__inner">
      <header className="landing-hero__topbar">
        <a className="landing-hero__logo" href="#/" aria-label="Nina Igbani home">
          N.I.
        </a>
        <a className="landing-hero__email" href="mailto:igbanijustina@gmail.com">
          Email
        </a>
      </header>

      <nav className="landing-hero__nav" aria-label="Main navigation">
        <a href="#/about">About</a>
        <a href="#/works">Work</a>
        <a href="#/blog">Blog</a>
        <a href="#/contact">Contact</a>
      </nav>

      <section className="landing-hero__center" aria-labelledby="landing-name">
        <h1 id="landing-name" className="landing-hero__name landing-hero__reveal">
          Justina<br />Igbani
        </h1>
        <p className="landing-hero__title landing-hero__reveal">
          Product Designer &amp; Frontend Developer
        </p>
      </section>

      <div className="landing-hero__bottom landing-hero__reveal">
        <div>
          <p className="landing-hero__label">Recent Work</p>
          <div className="landing-hero__work-list">
            {recentWork.map((item) => (
              <a key={item.title} href={`#/works/${item.slug}`} className="landing-hero__work-item">
                <span>{item.title}</span>
                <small>{item.context}</small>
              </a>
            ))}
          </div>
        </div>

        <div className="landing-hero__socials">
          <p className="landing-hero__label">Socials</p>
          <div className="landing-hero__social-list">
            {socials.map((social) => (
              <a key={social} href="#">{social}</a>
            ))}
          </div>
          <p className="landing-hero__location">Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  </main>
);


function useLandingPageLifecycle(isLandingPage: boolean) {
  useLayoutEffect(() => {
    if (!isLandingPage) return;

    // The home DOM is recreated after every route transition. Recreate its
    // entrance observers instead of retaining references to the old nodes.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = Array.from(document.querySelectorAll(".animate-on-scroll"));
    elements.forEach((element) => {
      element.classList.remove("visible");
      observer.observe(element);
    });

    // Never resume a stale position from another hash route.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    let disposed = false;
    let frame = requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
    });

    const images = Array.from(document.images).filter((image) => !image.complete);
    const assetsReady = Promise.all([
      document.fonts.ready,
      ...images.map(
        (image) =>
          new Promise<void>((resolve) => {
            image.addEventListener("load", () => resolve(), { once: true });
            image.addEventListener("error", () => resolve(), { once: true });
          })
      ),
    ]);

    void assetsReady.then(() => {
      if (disposed) return;
      frame = requestAnimationFrame(() => {
        if (disposed) return;
        // Force a fresh measurement after fonts and images have affected layout.
        window.dispatchEvent(new Event("resize"));
      });
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [isLandingPage]);
}

const App: React.FC = () => {
  const [hash, setHash] = useState(window.location.hash);
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (newHash: string) => {
    window.location.hash = newHash;
    setHash(newHash);
  };
  const year = new Date().getFullYear();

  const isWorks = hash === "#/works";
  const isCaseStudy = hash.startsWith("#/works/");
  const isBlog = hash === "#/blog";
  const isPosters = hash === "#/posters" || hash === "#/graphics";
  const isAbout = hash === "#/about";
  const isCompany = hash.startsWith("#/about/");
  const isContact = hash === "#/contact";
  const isLandingPage = !isWorks && !isCaseStudy && !isBlog && !isPosters && !isAbout && !isCompany && !isContact;
  const caseStudySlug = isCaseStudy ? hash.replace("#/works/", "") : "";
  const companySlug = isCompany ? hash.replace("#/about/", "") : "";

  useLandingPageLifecycle(isLandingPage);

  return (
    <div className="relative bg-[--color-dark]  min-h-screen">
      <CustomCursor />
      <LoadingAnimation onComplete={() => setIsLoaderComplete(true)} />
      <div id="loader">
        <div className="line">
          <h1 className="animate-bounce head-font">
            Designer. Developer. Senior Dabbler.
          </h1>
        </div>
      </div>

      {!isLandingPage && <NavBar />}

      {isWorks ? (
        <WorksPage onNavigate={handleNavigate} />
      ) : isCaseStudy ? (
        <CaseStudyPage slug={caseStudySlug} onNavigate={handleNavigate} />
      ) : isBlog ? (
        <Blog />
      ) : isPosters ? (
        <PostersPage />
      ) : isAbout ? (
        <AboutPage onNavigate={handleNavigate} />
      ) : isCompany ? (
        <CompanyPage slug={companySlug} onNavigate={handleNavigate} />
      ) : isContact ? (
        <ContactPage />
      ) : (
        <LandingHero isReady={isLoaderComplete} />
      )}

      {!isLandingPage && (
        <>
          {/* Footer */}
          <section className="h-[15vh] w-full items-center justify-center border-t-[3px] border-[#e4ded7]/30 pt-10 font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0">
            <div className="mx-auto flex w-[90%] flex-row items-center justify-between text-center text-[12px] text-[#e4ded7] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
              <p className="m-0 p-0">Copyright {year}</p>
              <div className="flex flex-col sm:flex-row sm:gap-1 md:gap-2">
                <p className="m-0 p-0">Design & Development by</p>
                <a
                  href="https://github.com/Justina18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:no-underline"
                  aria-label="Nina's GitHub Profile"
                >
                  Ninamma Igbani
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default App;
