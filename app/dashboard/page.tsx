import { notFound } from 'next/navigation';
import SkillGapChart from '@/components/features/SkillGapChart';
import RoadmapView from '@/components/features/RoadmapView';
import NewsFeed from '@/components/features/NewsFeed';
import Analysis from '@/model/Analysis';
import connectDB from '@/lib/db';
import { Calendar, Target } from 'lucide-react';

// Helper to get data server-side
async function getAnalysis(id: string) {
  await connectDB();
  try {
    const data = await Analysis.findById(id);
    if (!data) return null;
    return JSON.parse(JSON.stringify(data));
  } catch (e) {
    return null;
  }
}

// Helper to get roadmap
async function fetchRoadmap(role: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/roadmap`, {
        method: 'POST',
        body: JSON.stringify({ role })
    }).then(r => r.json());
    return res.roadmap;
}

export default async function Dashboard({ searchParams }: { searchParams: { id: string } }) {
  const { id } = await searchParams;

  if (!id) return notFound();

  const analysis = await getAnalysis(id);
  if (!analysis) return notFound();

  const roadmap = await fetchRoadmap(analysis.role);

  // Calculate match color
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400 border-emerald-500/30 shadow-[0_0_20px_rgba(52,211,153,0.2)]';
    if (score >= 50) return 'text-amber-400 border-amber-500/30 shadow-[0_0_20px_rgba(251,191,36,0.2)]';
    return 'text-rose-400 border-rose-500/30 shadow-[0_0_20px_rgba(251,113,133,0.2)]';
  };

  return (
    <div className="max-w-[1600px] mx-auto p-6 lg:p-10 space-y-8">
      
      {/* Dashboard Header */}
      <div className="flex px-16 flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
        <div className="space-y-2">
           <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium uppercase tracking-wider">
              <Target className="w-4 h-4" /> Career Analysis Report
           </div>
           <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{analysis.role}</h1>
           <p className="text-slate-400 flex items-center gap-2 text-sm">
             <Calendar className="w-3 h-3" /> Generated on {new Date(analysis.createdAt).toLocaleDateString(undefined, { dateStyle: 'long' })}
           </p>
        </div>

        <div className={`px-8 py-4 rounded-2xl bg-slate-900/50 border backdrop-blur-xl flex flex-col items-center min-w-[180px] ${getScoreColor(analysis.score)}`}>
            <span className="text-xs uppercase tracking-widest font-bold opacity-80">Match Score</span>
            <span className="text-5xl font-black tracking-tighter">{analysis.score}%</span>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-16">
        
        {/* LEFT: Skills */}
        <div className="lg:col-span-4 flex flex-col h-full">
          <SkillGapChart matched={analysis.matched} missing={analysis.missing} />
        </div>

        {/* RIGHT: Roadmap */}
        <div className="lg:col-span-8 flex flex-col h-full">
          <RoadmapView roadmap={roadmap} />
        </div>

        {/* BOTTOM: News */}
        <div className="lg:col-span-12">
          <NewsFeed />
        </div>

      </div>
    </div>
  );
}