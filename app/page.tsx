import CareerForm from "@/components/features/CareerForm";
import { Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      
      <div className="max-w-3xl w-full space-y-10 animate-in fade-in zoom-in-95 duration-700 relative z-10">
        
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(99,102,241,0.3)]">
            <Zap className="w-3 h-3 text-amber-400 fill-amber-400" /> 
            AI-Powered Career Architect
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-b from-white via-white to-slate-400 tracking-tighter leading-[1.1]">
            Design Your <br/>
            <span className="text-indigo-400">Tech Destiny.</span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-lg mx-auto leading-relaxed">
            Don't guess your next move. Analyze your skill gaps and get a precision-engineered roadmap to your dream role in seconds.
          </p>
        </div>

        <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-4xl p-1 shadow-2xl ring-1 ring-white/5">
          <div className="bg-slate-950/50 rounded-[1.8rem] p-8 md:p-10">
             <CareerForm />
          </div>
        </div>
      </div>
    </div>
  );
}