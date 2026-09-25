import { SearchX } from "lucide-react";

export default function EmptyState({ term, onClear }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-full bg-brand-50 dark:bg-slate-800 flex items-center justify-center mb-4">
        <SearchX className="text-brand-600" size={28} />
      </div>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
        No products found
      </h2>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-sm">
        We couldn't find anything matching{" "}
        {term ? (
          <span className="font-medium text-slate-700 dark:text-slate-200">"{term}"</span>
        ) : (
          "your filters"
        )}
        .
      </p>
      <button
        onClick={onClear}
        className="mt-6 px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition-colors"
      >
        Clear Search
      </button>
    </div>
  );
}