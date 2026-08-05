import { Video as VideoIcon, HelpCircle, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import Reveal from '@/components/Reveal';

const faqs = [
  {
    q: "What's your best-selling gear?",
    a: "Our best-selling gear is cricket accessories — bats, gloves, pads, helmets, and balls fly off the shelves year-round. Badminton and squash rackets, footballs, and fitness equipment like treadmills and home gyms are close behind.",
  },
  {
    q: 'How long have you been open?',
    a: "We opened our doors in 2019 and have been kitting out the Greater Faridabad community ever since — serving everyone from first-time beginners to seasoned club players.",
  },
  {
    q: 'Do you offer fittings and repairs?',
    a: "Yes — we offer all sorts of repairs on sports and fitness equipment, from restringing rackets and fixing treadmills to servicing home gyms and cardio machines. Bring your gear in and we'll take a look.",
  },
  {
    q: 'Can teams order custom kits through you?',
    a: "Absolutely. We accept special orders for custom kits and jerseys — whether it's for a club, school, or corporate team. Tell us your colours, sizes, and quantities, and we'll get it sorted.",
  },
];

function QA({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <Reveal delay={index * 80}>
      <div className="overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-soft transition-shadow hover:shadow-soft-lg">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          aria-expanded={open}
        >
          <span className="flex items-center gap-3">
            <HelpCircle className="h-5 w-5 shrink-0 text-accent-500" />
            <span className="font-semibold text-brand-900">{q}</span>
          </span>
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
            {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </span>
        </button>
        <div
          className={`grid transition-all duration-300 ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-6 pb-5 pl-14 leading-relaxed text-brand-600">{a}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Video() {
  return (
    <div className="bg-white">
      {/* Page header */}
      <section className="bg-brand-950 pt-32 pb-16 text-center">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/15 px-4 py-1.5 text-sm font-medium text-accent-300">
              <VideoIcon className="h-4 w-4" />
              Watch
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Watch
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-brand-200">
              A short film about who we are and what keeps us in the game.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Video */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-brand-950 shadow-soft-lg ring-1 ring-black/10">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube-nocookie.com/embed/F9qG3wEmTdo?rel=0&modestbranding=1"
              title="RR Sports & Fitness — Store Tour"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>

      {/* Get to Know Us */}
      <section className="bg-brand-50 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-600">
              Get to Know Us
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
              Get to Know Us
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-600">
              A few things people ask us most.
            </p>
          </Reveal>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <QA key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
