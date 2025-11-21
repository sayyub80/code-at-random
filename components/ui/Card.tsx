export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-6 ${className}`}>
    {children}
  </div>
);