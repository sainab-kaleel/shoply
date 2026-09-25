import { ShoppingBag, ShoppingCart, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { dark, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-20 bg-white/80 dark:bg-[#0B1220]/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
            <ShoppingBag size={18} />
          </span>
          <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Shoply
          </span>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            aria-label="Cart"
            className="relative w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <ShoppingCart size={18} />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-brand-600 text-white text-[10px] font-bold flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}