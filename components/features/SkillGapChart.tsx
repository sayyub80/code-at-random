import { CheckCircle2, Zap } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export default function SkillGapChart({ matched, missing }: { matched: string[], missing: string[] }) {
  return (
    <div className="flex flex-col gap-6 h-full">
      <Card className="flex-1 bg-emerald-900/10 border-emerald-500/20">
        <h3 className="text-emerald-400 font-semibold mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" /> You Have
        </h3>
        <div className="flex flex-wrap gap-2">
          {matched.map(s => (
            <span key={s} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm rounded-lg">
              {s}
            </span>
          ))}
        </div>
      </Card>

      <Card className="flex-1 bg-rose-900/10 border-rose-500/20 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-rose-500/10 blur-3xl rounded-full pointer-events-none" />
        <h3 className="text-rose-400 font-semibold mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5" /> Missing Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {missing.map(s => (
            <span key={s} className="px-3 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm rounded-lg">
              {s}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}