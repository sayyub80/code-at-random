import Link from 'next/link';
import { Sparkles, Github, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/30 rounded-b-3xl bg-slate-950/60 backdrop-blur-xl supports-backdrop-filter:bg-slate-950/40 transition-all duration-300">
      <div className="max-w-7xl mx-auto  h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-indigo-500/20 to-purple-500/20 border border-white/10 shadow-lg shadow-indigo-500/10 transition-all duration-300 group-hover:shadow-indigo-500/20 group-hover:scale-105">
            <div className="absolute inset-0 rounded-xl bg-linear-to-tr from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <Sparkles className="w-5 h-5 text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white to-slate-400 group-hover:to-white transition-all duration-300">
              CareerAI
            </span>
            <span className="text-[10px] font-medium text-indigo-400/60 uppercase tracking-widest -mt-1 group-hover:text-indigo-400 transition-colors">
              Architect
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Roadmap', 'About'].map((item) => (
            <Link 
              key={item} 
              href="#" 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group"
          >
            <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            <span className="text-xs font-medium text-slate-300 group-hover:text-white">Star on GitHub</span>
          </a>
          
          <button className="md:hidden p-2 text-slate-400 hover:text-white transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* Subtle Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-indigo-500/20 to-transparent" />
    </nav>
  );
}