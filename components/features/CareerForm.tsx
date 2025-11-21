'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button'; // Adjust import path if you split UI components
import { Input } from '@/components/ui/Input';
import { Terminal, ArrowRight } from 'lucide-react';
import { ROLE_STANDARDS } from '@/lib/constants';

export default function CareerForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ role: '', skills: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Get Analysis
      const skillRes = await fetch('/api/skill-gap', {
        method: 'POST',
        body: JSON.stringify(formData)
      }).then(res => res.json());

      // 2. Save to DB (Bonus Requirement)
      const savedAnalysis = await fetch('/api/analysis', {
        method: 'POST',
        body: JSON.stringify({ ...skillRes, skills: formData.skills.split(',') })
      }).then(res => res.json());

      // 3. Redirect to Dashboard
      router.push(`/dashboard?id=${savedAnalysis._id}`);
    } catch (error) {
      console.error("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-300 ml-1 ">Target Role</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
          {Object.keys(ROLE_STANDARDS).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setFormData({ ...formData, role: r })}
              className={`p-4 rounded-xl border text-left transition-all ${
                formData.role === r 
                  ? 'bg-indigo-600 border-indigo-500 text-white' 
                  : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <span className="text-sm font-semibold">{r}</span>
            </button>
          ))}
        </div>
      </div>

      <Input 
        label="Current Skills"
        className='mt-2'
        icon={<Terminal className="w-5 h-5" />}
        placeholder="e.g. HTML, CSS, React"
        value={formData.skills}
        onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
      />

      <Button type="submit" isLoading={loading} className="w-full" disabled={!formData.role}>
        Generate Roadmap <ArrowRight className="w-4 h-4" />
      </Button>
    </form>
  );
}