import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { shop } from '@/data/shop';

export type PageKey = 'home' | 'gallery' | 'video';

interface NavbarProps {
  current: PageKey;
  onNavigate: (page: PageKey) => void;
}

const links: { key: PageKey; label: string }[] = [
  { key: 'home', label: 'Home' },
  { key: 'gallery', label: 'Gallery' },
  { key: 'video', label: 'Watch' },
];

export default function Navbar({ current, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (page: PageKey) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-soft'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2 font-bold tracking-tight text-brand-900"
          aria-label="Go to home"
        >
          <img src="/logo.png" alt="RR Sports & Fitness logo" className="h-9 w-9 rounded-lg object-contain" />
          <span className="text-lg">{shop.name}</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.key}>
              <button
                onClick={() => go(link.key)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  current === link.key
                    ? 'text-brand-900'
                    : 'text-brand-600 hover:text-brand-900'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent-500 transition-all duration-300 ${
                    current === link.key ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-brand-900 transition-colors hover:bg-brand-50 md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-brand-100 bg-white transition-[max-height,opacity] duration-300 md:hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-3">
          {links.map((link) => (
            <li key={link.key}>
              <button
                onClick={() => go(link.key)}
                className={`w-full rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                  current === link.key
                    ? 'bg-brand-50 text-brand-900'
                    : 'text-brand-600 hover:bg-brand-50 hover:text-brand-900'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
