"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  categories,
  products,
  productsByCategory,
  getCategory,
  formatPrice,
  type Category,
} from "@/lib/products";
import { IconArrowRight } from "@/components/Icons";

type FilterKey = "all" | Category;

export function CatalogList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initial = (searchParams.get("category") as FilterKey) || "all";
  const [active, setActive] = useState<FilterKey>(initial);

  useEffect(() => {
    const url = active === "all" ? pathname : `${pathname}?category=${active}`;
    router.replace(url, { scroll: false });
  }, [active, pathname, router]);

  const visible = useMemo(() => {
    if (active === "all") return products;
    return productsByCategory(active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10 sticky top-20 bg-cream/95 backdrop-blur py-4 -mx-4 px-4 border-b border-graphite-200/40 z-10">
        <FilterButton active={active === "all"} onClick={() => setActive("all")}>
          Все ({products.length})
        </FilterButton>
        {categories.map((c) => {
          const count = productsByCategory(c.slug).length;
          return (
            <FilterButton key={c.slug} active={active === c.slug} onClick={() => setActive(c.slug)}>
              {c.title} <span className="opacity-60">({count})</span>
            </FilterButton>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((p) => {
          const cat = getCategory(p.category);
          return (
            <Link key={p.slug} href={`/catalog/${p.slug}`} className="group card card-hover overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-moss/15 via-sand/10 to-forest/5 flex items-center justify-center overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-contain p-4 transition-transform duration-700 ease-smooth group-hover:scale-110"
                />
                {cat?.badge && (
                  <span className="absolute top-3 left-3 chip bg-forest/90 text-cream text-[10px]">{cat.badge}</span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1 space-y-3">
                <div>
                  <h3 className="font-display text-lg text-graphite">{p.name}</h3>
                  <div className="text-xs text-graphite-400 mt-1 flex gap-3">
                    <span>{p.size}</span>
                    {p.capacity && <span className="text-moss-600">{p.capacity}</span>}
                  </div>
                </div>
                {p.users && (
                  <div className="text-xs text-graphite-400">
                    до {p.users} пользователей
                  </div>
                )}
                <div className="mt-auto pt-3 border-t border-graphite-200/50 flex items-center justify-between">
                  <span className="text-forest font-medium">{formatPrice(p.price)}</span>
                  <span className="text-sm text-graphite-400 group-hover:text-forest transition-colors flex items-center gap-1">
                    Подробнее <IconArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {visible.length === 0 && (
        <div className="text-center text-graphite-400 py-16">В этой категории пока пусто</div>
      )}
    </div>
  );
}

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        active
          ? "bg-forest text-cream shadow-soft"
          : "bg-white/60 text-graphite-400 hover:bg-forest/10 hover:text-forest border border-graphite-200/50"
      }`}
    >
      {children}
    </button>
  );
}
