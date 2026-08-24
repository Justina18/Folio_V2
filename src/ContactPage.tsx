import React, { useEffect } from "react";

const socialLinks = [
  { label: "LinkedIn", short: "LN", href: "https://www.linkedin.com/in/justina-igbani-723a77250/" },
  { label: "GitHub", short: "GH", href: "https://github.com/Justina18" },
  { label: "X", short: "TW", href: "https://x.com/nibani09?t=86ScfeZZmPvanjnDozs3vQ&s=09" },
  { label: "Medium", short: "MD", href: "https://medium.com/@igbanijustina" },
];

const ContactPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <main className="flex min-h-screen bg-[#011c21] px-6 pb-24 pt-24 text-[#e4ded7] sm:px-10 lg:px-16"><div className="mx-auto flex w-full max-w-7xl flex-col justify-center py-12 sm:py-20"><p className="head-font mb-5 text-sm font-bold uppercase tracking-widest text-[--color-turquoise]">Contact</p><h1 className="head-font max-w-5xl text-6xl uppercase leading-[.85] text-white sm:text-8xl md:text-[10rem]">Let's talk.</h1><div className="mt-14 grid gap-12 border-t border-[#e4ded7]/20 pt-8 md:grid-cols-2 md:pt-12"><div><p className="max-w-md text-lg leading-relaxed text-[#e4ded7]/75">Have a question, proposal, project, or just want to work together on something? I’d love to hear from you.</p><div className="mt-8 flex flex-wrap gap-4"><a href="mailto:igbanijustina@gmail.com?subject=Lets%20work%20together!" className="cursor-none border-2 border-[#e4ded7] px-5 py-3 text-sm font-bold uppercase tracking-wide transition-all hover:bg-[#e4ded7] hover:text-[#011c21]">Email me</a><a href="https://cal.com/nina-igbani/30min" target="_blank" rel="noreferrer" className="cursor-none border-2 border-[#e4ded7]/40 px-5 py-3 text-sm font-bold uppercase tracking-wide transition-all hover:border-[#e4ded7]">Book a call</a></div></div><div className="md:justify-self-end"><p className="mb-5 text-xs font-bold uppercase tracking-widest text-[#e4ded7]/50">Elsewhere</p><div className="flex gap-5 text-xl font-bold">{socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} className="transition-colors hover:text-[--color-turquoise]">{link.short}</a>)}</div></div></div></div></main>;
};

export default ContactPage;
