import { Layers } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { RoadmapPhase } from '@/types';

export default function RoadmapView({ roadmap }: { roadmap: RoadmapPhase[] }) {
  return (
    <Card className="h-full">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
          <Layers className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-semibold text-white">Learning Roadmap</h3>
      </div>
      
      <div className="relative space-y-8">
        {/* Connector Line */}
        <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-slate-800" />

        {roadmap.map((phase, idx) => (
          <div key={idx} className="relative pl-8 group">
            <div className="absolute left-0 top-1 w-5 h-5 rounded-full border-[3px] border-slate-900 bg-slate-700 group-hover:bg-indigo-500 transition-colors z-10" />
            
            <div className="mb-2">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-2 py-1 rounded-md">
                {phase.time}
              </span>
              <h4 className="text-white font-semibold mt-1 text-lg">{phase.title}</h4>
            </div>
            
            <div className="bg-black/20 rounded-xl p-4 border border-white/5">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600" /> 
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}