import { Heart, Star } from "lucide-react";

export default function ProductCard({ product }) {
  const { name, category, price, description, rating, reviews, image } = product;

  return (
    <article className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      {/* Image area */}
 <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-800 overflow-hidden">
  <img
    src={image}
    alt={name}
    loading="lazy"
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  />

  {/* Category badge */}
  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur text-[11px] font-semibold text-slate-700 dark:text-slate-200">
    {category}
  </span>

  {/* Wishlist */}
  <button
    aria-label="Add to wishlist"
    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur flex items-center justify-center text-slate-500 hover:text-rose-500 transition-colors"
  >
    <Heart size={16} />
  </button>
</div>

      {/* Body */}
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 truncate">
          {name}
        </h3>

        <div className="flex items-center gap-1 mt-1 text-xs text-slate-500 dark:text-slate-400">
          <Star size={12} className="fill-amber-400 text-amber-400" />
          <span className="font-medium text-slate-700 dark:text-slate-300">{rating}</span>
          <span>({reviews})</span>
        </div>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
          {description}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-brand-600">
            LKR {price.toFixed(2)}
         </span>
        </div>

        <button className="mt-3 w-full py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium transition-colors">
          View Product
        </button>
      </div>
    </article>
  );
}