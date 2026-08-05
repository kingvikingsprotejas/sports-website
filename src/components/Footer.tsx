import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import type { PageKey } from './Navbar';
import { shop } from '@/data/shop';

interface FooterProps {
  onNavigate: (page: PageKey) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-white">
              <img src="/logo.png" alt="RR Sports & Fitness logo" className="h-9 w-9 rounded-lg object-contain bg-white" />
              <span className="text-lg">{shop.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-300">
              Play Bold. Play Better. — Your neighborhood home for quality sports gear
              and fitness equipment in Greater Faridabad.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-lg bg-brand-800 text-brand-200 transition-colors hover:bg-accent-500 hover:text-brand-950"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-9 w-9 place-items-center rounded-lg bg-brand-800 text-brand-200 transition-colors hover:bg-accent-500 hover:text-brand-950"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="grid h-9 w-9 place-items-center rounded-lg bg-brand-800 text-brand-200 transition-colors hover:bg-accent-500 hover:text-brand-950"
              >
                <Twitter className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-400">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { key: 'home' as PageKey, label: 'Home' },
                { key: 'gallery' as PageKey, label: 'Gallery' },
                { key: 'video' as PageKey, label: 'Watch' },
              ].map((item) => (
                <li key={item.key}>
                  <button
                    onClick={() => onNavigate(item.key)}
                    className="text-brand-300 transition-colors hover:text-accent-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-400">
              Visit Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent-400" />
                <span>
                  {shop.address.line1}
                  <br />
                  {shop.address.line2}
                  <br />
                  {shop.address.line3}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 shrink-0 text-accent-400" />
                <a href={shop.phoneHref} className="transition-colors hover:text-accent-400">
                  {shop.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 shrink-0 text-accent-400" />
                <a href="#"
                  className="transition-colors hover:text-accent-400"
                >
                  Contact owner {shop.owner.split(' ')[0]}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent-400" />
                <span>Mon–Sat 9am–8pm · Sun 10am–6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-800 pt-6 text-center text-xs text-brand-400">
          © {new Date().getFullYear()} {shop.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
