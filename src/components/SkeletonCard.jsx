export default function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-pulse">
      <div className="aspect-[4/3] bg-slate-200 dark:bg-slate-800" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
        <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-1/3" />
        <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-full" />
        <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-2/3" />
        <div className="h-9 bg-slate-200 dark:bg-slate-800 rounded-lg mt-2" />
      </div>
    </div>
  );
}