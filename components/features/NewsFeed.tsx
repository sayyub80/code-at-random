'use client';
import { useEffect, useState } from 'react';
import { ExternalLink, Loader2, TrendingUp, Globe } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { HackerNewsItem } from '@/types';

export default function NewsFeed() {
  const [news, setNews] = useState<HackerNewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const ids = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json').then(r => r.json());
        const topStories = ids.slice(0, 6); // Fetch 6 stories to fill a 3x2 grid nicely
        const stories = await Promise.all(
          topStories.map((id: number) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(r => r.json()))
        );
        setNews(stories);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <Card className="bg-slate-900/40 border-white/5 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6 px-2">
        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-400 flex items-center gap-2">
          <Globe className="w-5 h-5 text-orange-400" /> Global Tech Pulse
        </h3>
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Live from HackerNews</span>
      </div>
      
      {loading ? (
        <div className="h-48 flex items-center justify-center border border-dashed border-slate-800 rounded-2xl">
          <Loader2 className="animate-spin text-slate-600 w-8 h-8" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map(item => (
            <a 
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col p-5 rounded-2xl bg-slate-950/50 border border-white/5 hover:border-orange-500/30 hover:bg-slate-900 hover:-translate-y-1 transition-all duration-300 group h-full"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded-md border border-white/5">
                  {new Date(item.time * 1000).toLocaleDateString()}
                </span>
              </div>
              
              <h4 className="text-slate-200 font-medium leading-snug group-hover:text-orange-300 transition-colors mb-auto">
                {item.title}
              </h4>
              
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-white/5">
                <span className="font-medium text-slate-400">{item.score} points</span>
                <span className="flex items-center gap-1 hover:text-slate-300">
                  Read Article <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </Card>
  );
}