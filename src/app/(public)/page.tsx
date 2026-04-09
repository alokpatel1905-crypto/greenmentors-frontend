'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe, Leaf, GraduationCap, Award, Users, ChevronRight, BookOpen, Building, Target, Network, Mail } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Accreditation', href: '#accreditation' },
  { label: 'Rankings', href: '#rankings' },
  { label: 'Events', href: '#events' },
  { label: 'Awards', href: '#awards' },
  { label: 'Networks', href: '#networks' },
  { label: 'Support Us', href: '#support' },
  { label: 'Media', href: '#media' },
  { label: 'Contact', href: '#contact' }
];

const ECOSYSTEM_PROGRAMS = [
  { title: 'Programs', items: ['Green School', 'Green University', 'Green Teacher', 'Green Graduate', 'Green Fellowship'] },
  { title: 'Rankings', items: ['Global Green School Ranking', 'Global Green University Ranking', 'National Green University Ranking'] },
  { title: 'Events', items: ['NYC Green School Conference', 'NYC Children\'s Climate Conference', 'World Education Forum – Davos', 'Global Green Mentors Conference'] },
  { title: 'Networks', items: ['Global Green Teacher Network', 'Global Green Schools Network', 'Global Green University Network', 'Global Green Graduates Network', 'Global Green Innovator Network'] }
];

const IMPACT_STATS = [
  { value: "8,000+", label: "Schools & Universities", icon: <Building className="text-emerald-700 mb-5" size={40} strokeWidth={1.2} /> },
  { value: "50,000+", label: "Educators Trained", icon: <BookOpen className="text-teal-600 mb-5" size={40} strokeWidth={1.2} /> },
  { value: "10 Million", label: "Students Empowered", icon: <Users className="text-sky-600 mb-5" size={40} strokeWidth={1.2} /> },
  { value: "45", label: "Countries Reached", icon: <Globe className="text-emerald-500 mb-5" size={40} strokeWidth={1.2} /> }
];

const MEGA_CATEGORIES = [
  { title: "K-12 School", links: ["Accreditation", "Global Ranking", "Green Class"] },
  { title: "University", links: ["Accreditation", "Global Ranking", "Green Graduate", "Green Fellowship"] },
  { title: "Teacher", links: ["Green Teacher Accreditation", "Green Educator Program"] },
  { title: "Students", links: ["Climate Olympiad", "Green Fellowship", "Green Internship", "Green Jobs"] },
  { title: "Event", links: ["NYC Green School Conference", "NYC Children's Climate Conference", "World Education Forum – Davos", "Global Green Mentors Conference"] },
  { title: "Awards", links: ["Green University", "Green School", "Green Mentor", "Green Teacher", "Green Graduate"] },
  { title: "Network", links: ["Global Green Teacher Network", "Global Green Schools Network", "Global Green University Network", "Global Green Graduates Network", "Global Green Innovator Network"] },
  { title: "Support Us", links: ["Green Graduate Accreditation", "Green Teacher Accreditation", "Green School Accreditation", "Green University Accreditation"] }
];

const SOCIAL_ICONS = {
  Facebook: ({ className, size = 20 }: { className?: string, size?: number }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  ),
  Twitter: ({ className, size = 20 }: { className?: string, size?: number }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  ),
  Linkedin: ({ className, size = 20 }: { className?: string, size?: number }) => (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
  )
};

const Header = () => (
  <header className="pt-20 pb-12 px-8 flex flex-col items-center text-center relative z-20 bg-white">
    <div className="flex flex-col items-center max-w-4xl mx-auto">
      <div className="w-[88px] h-[88px] bg-emerald-800 rounded-full flex items-center justify-center shadow-lg shadow-emerald-900/10 mb-8 transition-transform hover:scale-105 duration-500 relative">
        <Leaf className="w-10 h-10 text-white relative z-10" strokeWidth={1.5} />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-teal-400 rounded-full opacity-20 blur-md" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight mb-3">GREEN MENTORS</h1>
      <p className="text-[12px] md:text-sm font-semibold text-emerald-800 uppercase tracking-[0.25em] mb-10">Global Responsible Education Network</p>
      
      <div className="flex flex-col gap-4 items-center">
        <span className="text-[10px] md:text-[11px] font-bold text-emerald-700 uppercase tracking-[0.15em] bg-emerald-50 px-6 py-2.5 rounded-full border border-emerald-100">
          Special Consultative Status with the United Nations ECOSOC
        </span>
        <span className="text-[15px] border-t border-slate-100 pt-5 md:text-base font-medium text-slate-500">
          Education for a climate-conscious and sustainable future
        </span>
      </div>
    </div>
  </header>
);

const MainNav = ({ isScrolled }: { isScrolled: boolean }) => (
  <nav className={`hidden lg:block w-full z-40 transition-all duration-300 sticky top-0 ${isScrolled ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 py-5 shadow-sm" : "bg-white/90 backdrop-blur-md py-6 border-b border-slate-100"}`}>
    <ul className="max-w-[1400px] mx-auto px-8 flex justify-center items-center flex-wrap gap-x-8 gap-y-2">
      {NAV_LINKS.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="text-[14px] font-semibold text-slate-600 hover:text-emerald-700 transition-colors relative group py-2 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm">
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-600 transition-all duration-300 group-hover:w-full rounded-full" />
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const FloatingQuickNav = ({ activeSection }: { activeSection: string }) => (
  <aside className="hidden xl:flex flex-col gap-4 fixed right-8 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
    {[{label: 'Home', href: '#home'}, ...NAV_LINKS].map((link) => {
      const isActive = activeSection === link.href.substring(1);
      return (
        <a key={link.label} href={link.href} className="group flex items-center justify-end gap-4 outline-none pointer-events-auto" aria-label={`Navigate to ${link.label}`}>
          <span className={`text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur-xl px-3 py-1.5 rounded-md transition-all duration-300 border ${isActive ? 'text-emerald-800 bg-emerald-50/90 border-emerald-200 translate-x-0 opacity-100 shadow-sm' : 'text-slate-500 bg-white/80 border-slate-200/50 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0'}`}>
            {link.label}
          </span>
          <div className={`w-2 h-2 rounded-full border transition-all duration-300 shadow-sm ${isActive ? 'border-emerald-600 bg-emerald-600 scale-125' : 'border-slate-300 bg-white group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:scale-125 group-focus-visible:bg-emerald-500 group-focus-visible:scale-125'}`} />
        </a>
      );
    })}
  </aside>
);

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  return (
    <>
      <div className="lg:hidden fixed top-6 right-6 z-[100]">
        <button onClick={() => setIsOpen(!isOpen)} className="p-3 bg-white shadow-xl shadow-slate-200/50 rounded-full text-emerald-800 border border-slate-100 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-[90] flex flex-col pt-32 px-10 overflow-y-auto lg:hidden animate-in fade-in slide-in-from-right-8 duration-300">
          <ul className="flex flex-col gap-6 pb-32">
            {[{label: 'Home', href: '#home'}, ...NAV_LINKS].map(link => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-bold text-slate-800 hover:text-emerald-700 transition-colors border-b border-slate-100 pb-4 block">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const HeroSection = () => (
  <section id="home" className="relative py-24 lg:py-32 px-8 flex items-center min-h-[90vh] bg-white overflow-hidden scroll-mt-32">
    <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white -z-20" />
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
      <div className="flex flex-col items-start z-10 lg:pr-8">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-600 text-[11px] font-bold uppercase tracking-widest mb-10">
          <Target size={14} className="text-emerald-600" />
          Global Greening Education Initiative
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight leading-[1.15] mb-8">
          Transforming Education <br className="hidden lg:block"/> for a <span className="text-emerald-700 font-black">Sustainable Future</span>
        </h2>
        <p className="text-[17px] md:text-lg text-slate-500 mb-12 max-w-xl font-medium leading-[1.8]">
          Green Mentors empowers schools, universities, teachers, graduates, and education ecosystems through accreditation, rankings, events, awards, global networks, and sustainability-led collaboration.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <a href="#programs" className="w-full sm:w-auto bg-emerald-800 text-white px-8 py-4 flex items-center justify-center gap-3 rounded-xl font-semibold shadow-lg shadow-emerald-900/10 hover:bg-emerald-900 hover:-translate-y-0.5 transition-all duration-300">
            Explore Programs <ArrowRight size={18} />
          </a>
          <a href="#support" className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 flex items-center justify-center gap-3 rounded-xl font-semibold shadow-sm hover:border-emerald-200 hover:text-emerald-800 hover:bg-emerald-50/50 hover:-translate-y-0.5 transition-all duration-300">
            Join the Movement
          </a>
        </div>
        <div className="mt-12">
          <a href="#impact" className="inline-flex items-center gap-2 text-[12px] font-bold text-slate-400 hover:text-emerald-700 transition-colors uppercase tracking-widest group">
            View Global Impact <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="relative hidden lg:flex items-center justify-center h-[600px] w-full">
        <div className="absolute w-[500px] h-[500px] border-[0.5px] border-emerald-100 rounded-full" />
        <div className="absolute w-[360px] h-[360px] border-[1px] border-dashed border-slate-200 rounded-full animate-[spin_100s_linear_infinite]" />
        <div className="absolute w-[220px] h-[220px] bg-white border border-slate-100 rounded-full shadow-2xl shadow-slate-200/50 flex items-center justify-center z-10 hover:scale-105 transition-transform duration-700 cursor-default">
          <Globe className="w-28 h-28 text-emerald-800/[0.08]" strokeWidth={1} />
        </div>
        <div className="absolute top-12 right-6 bg-white py-3 px-5 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 flex items-center gap-4 z-20 animate-[bounce_8s_infinite] hover:-translate-y-1 transition-transform cursor-default">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center"><Network className="text-emerald-600 w-6 h-6" strokeWidth={1.5} /></div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Global Network</div>
            <div className="text-lg font-black text-slate-700">45 Countries</div>
          </div>
        </div>
        <div className="absolute bottom-20 left-4 bg-white py-3 px-5 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 flex items-center gap-4 z-20 animate-[bounce_10s_infinite_reverse] hover:-translate-y-1 transition-transform cursor-default">
          <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center"><GraduationCap className="text-teal-600 w-6 h-6" strokeWidth={1.5} /></div>
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Community</div>
            <div className="text-lg font-black text-slate-700">10M Students</div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-emerald-50/80 to-sky-50/50 rounded-full blur-[60px] -z-10" />
      </div>
    </div>
  </section>
);

const EcosystemLinksSection = () => (
  <section id="programs" className="py-32 px-8 bg-slate-50 relative border-y border-slate-100 scroll-mt-24">
    <div className="max-w-7xl mx-auto">
      <div className="text-center md:text-left mb-20 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-5">Explore the Green Mentors Ecosystem</h2>
        <p className="text-slate-500 font-medium text-[17px] leading-relaxed">
          Discover accreditation pathways, global rankings, international events, and sustainability networks structured for worldwide institutional growth.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {ECOSYSTEM_PROGRAMS.map((category, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
            <h4 className="text-[13px] font-bold text-slate-800 mb-8 uppercase tracking-widest border-b border-emerald-50 pb-5 inline-flex items-center gap-4 w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              {category.title}
            </h4>
            <ul className="flex flex-col gap-3">
              {category.items.map((item, i) => (
                <li key={i}>
                  <a href={`#${item.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`} className="group inline-flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-slate-50 text-[13px] font-semibold text-slate-600 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-800 transition-all duration-200">
                    <span className="truncate pr-4 leading-relaxed">{item}</span>
                    <ChevronRight size={14} className="text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 shrink-0 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ImpactSection = () => (
  <section id="impact" className="py-32 px-8 bg-white relative scroll-mt-24">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-6">Global Impact in Motion</h2>
        <p className="text-slate-500 font-medium text-[17px] leading-relaxed">
          Our global education transformation mission spans continents, tangibly equipping institutions and communities with the blueprints for a zero-carbon future.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {IMPACT_STATS.map((stat, idx) => (
          <div key={idx} className="bg-slate-50/50 border border-slate-100 rounded-[32px] p-10 flex flex-col items-center text-center hover:bg-white hover:border-emerald-100 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 hover:-translate-y-2 group">
            <div className="group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-500 ease-out">{stat.icon}</div>
            <h4 className="text-4xl lg:text-[42px] font-black text-slate-800 mb-3 tracking-tight">{stat.value}</h4>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.15em]">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MegaNavSection = () => (
  <section id="networks" className="bg-slate-900 py-32 px-8 text-slate-300 scroll-mt-24">
    <nav className="max-w-7xl mx-auto" aria-label="Ecosystem Navigator">
      <div className="mb-24 flex flex-col items-center md:items-start border-b border-slate-800 pb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6 text-center md:text-left">Ecosystem Navigator</h2>
        <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-3xl text-center md:text-left">
          Discover the complete foundation of our specialized pathways, professional networks, global recognitions, and environmental support paradigms.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 lg:gap-y-20">
        {MEGA_CATEGORIES.map((category, idx) => (
          <div key={idx} className="group flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-white font-bold text-[13px] uppercase tracking-[0.15em] mb-8 flex flex-col sm:flex-row items-center gap-4">
              <span className="w-8 h-[2px] bg-emerald-600 rounded-full" />
              {category.title}
            </h4>
            <ul className="space-y-4 text-[14px] font-medium flex-grow w-full">
              {category.links.map((link, i) => (
                <li key={i}>
                  <a href={`#${link.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`} className="text-slate-400 hover:text-emerald-400 hover:translate-x-1 transition-all duration-200 inline-block py-1">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  </section>
);

const MiniFooterStrip = () => (
  <div className="bg-slate-950 py-10 px-8 border-b border-slate-800/50">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      <a href="#home" className="flex items-center gap-4 group">
        <div className="w-10 h-10 rounded-full border border-emerald-800/50 flex items-center justify-center bg-slate-900 group-hover:bg-emerald-900/50 transition-colors">
          <Leaf className="w-4 h-4 text-emerald-600" />
        </div>
        <span className="font-black text-[15px] tracking-widest text-slate-200 uppercase">Green Mentors</span>
      </a>
      <div className="w-full h-px bg-slate-800/50 md:hidden" />
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
        <a href="#programs" className="hover:text-emerald-500 transition-colors">Our Programs</a>
        <a href="#rankings" className="hover:text-emerald-500 transition-colors">Global Rankings</a>
        <a href="#awards" className="hover:text-emerald-500 transition-colors">Awards</a>
        <a href="#contact" className="hover:text-emerald-500 transition-colors">Support Us</a>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-950 py-20 px-8 relative z-20 text-slate-500">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
      <div className="flex flex-col items-center lg:items-start gap-4">
        <p className="text-[15px] font-medium tracking-wide max-w-md leading-[1.8]">
          Building the blueprint for schools, universities, and educators to design, execute, and sustain zero-carbon educational ecosystems globally.
        </p>
        <a href="mailto:contact@greenmentors.org" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm mt-3 hover:text-emerald-400 transition-colors">
          <Mail size={16} />
          contact@greenmentors.org
        </a>
      </div>
      <div className="flex flex-col items-center lg:items-end gap-8">
        <div className="flex gap-6">
          <a href="#twitter" aria-label="Twitter" className="text-slate-600 hover:text-slate-300 transition-colors"><SOCIAL_ICONS.Twitter size={22} /></a>
          <a href="#linkedin" aria-label="LinkedIn" className="text-slate-600 hover:text-slate-300 transition-colors"><SOCIAL_ICONS.Linkedin size={22} /></a>
          <a href="#facebook" aria-label="Facebook" className="text-slate-600 hover:text-slate-300 transition-colors"><SOCIAL_ICONS.Facebook size={22} /></a>
        </div>
        <p className="text-[12px] font-medium tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Green Mentors. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', ...NAV_LINKS.map(link => link.href.substring(1))];
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= (el.offsetTop - 250)) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-emerald-200 selection:text-emerald-950">
      <FloatingQuickNav activeSection={activeSection} />
      <MobileNav />
      <Header />
      <MainNav isScrolled={isScrolled} />
      <main>
        <HeroSection />
        <EcosystemLinksSection />
        <ImpactSection />
        <MegaNavSection />
      </main>
      <MiniFooterStrip />
      <Footer />
    </div>
  );
}