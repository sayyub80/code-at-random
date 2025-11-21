interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
}

export const Input = ({ label, icon, className, ...props }: InputProps) => (
  <div className="space-y-2">
    {label && <label className="text-sm font-medium text-slate-300 ml-1">{label}</label>}
    <div className="relative">
      {icon && <div className="absolute left-4 top-3.5 text-slate-500">{icon}</div>}
      <input 
        className={`w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3 ${icon ? 'pl-12' : 'pl-4'} pr-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all ${className}`}
        {...props} 
      />
    </div>
  </div>
);