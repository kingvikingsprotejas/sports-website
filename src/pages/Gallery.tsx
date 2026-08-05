import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import Reveal from '@/components/Reveal';

interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const items: GalleryItem[] = [
  {
    id: 0,
    title: 'Storefront',
    subtitle: 'RR Sports & Fitness signage at the entrance',
    image: '/images/gallery/WhatsApp_Image_2026-08-01_at_2.06.35_PM.jpeg',
  },
  {
    id: 1,
    title: 'Fitness Equipment Section',
    subtitle: 'Treadmills, home gyms and cardio machines',
    image: '/images/gallery/WhatsApp_Image_2026-07-31_at_7.08.00_PM_(1).jpeg',
  },
  {
    id: 2,
    title: 'Fitness Accessories',
    subtitle: 'Hula hoops, exercise bikes and more',
    image: '/images/gallery/WhatsApp_Image_2026-07-31_at_7.08.00_PM_(2).jpeg',
  },
  {
    id: 3,
    title: 'Shop Interior',
    subtitle: 'A look around the store floor',
    image: '/images/gallery/WhatsApp_Image_2026-07-31_at_7.08.00_PM_(3).jpeg',
  },
  {
    id: 4,
    title: 'Storefront at Night',
    subtitle: 'RR Sports & Fitness after hours',
    image: '/images/gallery/WhatsApp_Image_2026-07-31_at_7.08.00_PM_(4).jpeg',
  },
  {
    id: 5,
    title: 'In-Store Selection',
    subtitle: 'Wide range of sports accessories and gear',
    image: '/images/gallery/WhatsApp_Image_2026-07-31_at_7.08.00_PM_(6).jpeg',
  },
  {
    id: 6,
    title: 'Racket Wall',
    subtitle: 'Cricket kits, rackets and protective gear',
    image: '/images/gallery/WhatsApp_Image_2026-07-31_at_7.08.00_PM_(7).jpeg',
  },
  {
    id: 7,
    title: 'Shop Counter',
    subtitle: 'Where the magic of every sale happens',
    image: '/images/gallery/WhatsApp_Image_2026-07-31_at_7.08.00_PM_(8).jpeg',
  },
  {
    id: 8,
    title: 'Store Overview',
    subtitle: 'A complete look at our stocked store',
    image: '/images/gallery/WhatsApp_Image_2026-07-31_at_7.08.00_PM.jpeg',
  },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const next = () => setActive((i) => (i === null ? i : (i + 1) % items.length));
  const prev = () =>
    setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length));

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <div className="bg-white">
      {/* Page header */}
      <section className="bg-brand-950 pt-32 pb-20 text-center">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/15 px-4 py-1.5 text-sm font-medium text-accent-300">
              <Images className="h-4 w-4" />
              Gallery
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Gallery
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-brand-200">
              A look inside RR SPORTS & FITNESS.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 100}>
              <button
                onClick={() => setActive(item.id)}
                className="group relative block w-full overflow-hidden rounded-3xl bg-brand-100 shadow-soft transition-all hover:shadow-soft-lg focus:outline-none focus:ring-4 focus:ring-accent-400/40"
                aria-label={`Enlarge ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-950/70 via-brand-950/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-brand-100">
                    {item.subtitle}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

      </section>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-950/90 p-4 backdrop-blur-sm animate-fade-scale"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo"
        >
          <button
            onClick={close}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-soft-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={items[active].image}
              alt={items[active].title}
              className="max-h-[70vh] w-full object-contain bg-brand-950"
            />
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <h3 className="font-bold text-brand-900">
                  {items[active].title}
                </h3>
                <p className="text-sm text-brand-500">
                  {items[active].subtitle}
                </p>
              </div>
              <span className="text-sm font-medium text-brand-400">
                {active + 1} / {items.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
