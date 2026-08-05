import { ArrowRight, Images, PlayCircle, ShieldCheck, Tag, Users, MapPin, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import type { PageKey } from '@/components/Navbar';
import { shop } from '@/data/shop';

interface HomeProps {
  onNavigate: (page: PageKey) => void;
}

const HERO_IMAGE =
  'https://images.pexels.com/photos/37927156/pexels-photo-37927156.jpeg?auto=compress&cs=tinysrgb&w=1600';

const ABOUT_IMAGE =
  '/images/gallery/WhatsApp_Image_2026-08-01_at_2.06.35_PM.jpeg';

const TEASER_GALLERY =
  'https://images.pexels.com/photos/903967/pexels-photo-903967.jpeg?auto=compress&cs=tinysrgb&w=900';

const TEASER_VIDEO =
  'https://images.pexels.com/photos/974498/pexels-photo-974498.jpeg?auto=compress&cs=tinysrgb&w=900';

const stats = [
  { value: '7+', label: 'Categories in store' },
  { value: '100s', label: 'Products stocked' },
  { value: 'Sec-88', label: 'Greater Faridabad' },
];

const features = [
  {
    icon: Tag,
    title: 'Fitness & Sports Gear',
    text: 'Treadmills, home gyms, cardio machines, rackets, balls and accessories — all under one roof.',
  },
  {
    icon: Users,
    title: 'Local, Trusted Advice',
    text: `Run by ${shop.owner.split(' ')[0]}, helping the Greater Faridabad community find the right kit for over a decade.`,
  },
  {
    icon: ShieldCheck,
    title: 'For Parks & Playgrounds',
    text: "We also supply children's park equipment and green gym setups for outdoor spaces.",
  },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-brand-950">
        <img
          src={HERO_IMAGE}
          alt="Athlete in motion"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-900/70 to-brand-950/40" />

        <div className="relative mx-auto w-full max-w-6xl px-5 pt-28 pb-20 sm:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/15 px-4 py-1.5 text-sm font-medium text-accent-300">
                <span className="h-2 w-2 rounded-full bg-accent-400" />
                Greater Faridabad's sports & fitness shop
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
                {shop.name}
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-100 sm:text-xl">
                {shop.tagline}
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('gallery')}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-base font-semibold text-brand-950 shadow-soft-lg transition-all hover:bg-accent-400 hover:gap-3"
                >
                  Browse the gallery
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>
                <button
                  onClick={() => onNavigate('video')}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15"
                >
                  <PlayCircle className="h-5 w-5" />
                  Watch our story
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats bar */}
        <Reveal
          delay={480}
          className="relative mx-auto w-full max-w-6xl px-5 sm:px-8"
        >
          <div className="mb-8 grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:gap-8 sm:p-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-extrabold text-white sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-brand-200 sm:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* About */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-soft-lg">
                  <img
                    src={ABOUT_IMAGE}
                    alt="Inside the shop"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-accent-500 px-6 py-5 text-brand-950 shadow-soft-lg sm:block">
                  <div className="text-3xl font-extrabold leading-none">Sec-88</div>
                  <div className="mt-1 text-sm font-medium">Greater Faridabad</div>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent-600">
                  About Us
                </span>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
                  Your well-stocked local sports &amp; fitness shop
                </h2>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-5 text-lg leading-relaxed text-brand-600">
                  RR Sports &amp; Fitness has been serving the Greater Faridabad
                  community from its store in Sec-88, Chandiwala Bagh. Run by
                  Naresh Aggarwal, the shop is stocked floor to ceiling with
                  everything an athlete or fitness enthusiast could need —
                  treadmills, home gyms, cardio machines, badminton and squash
                  rackets, footballs, basketballs, sportswear, and shoes across
                  major brands.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-4 text-lg leading-relaxed text-brand-600">
                  Beyond personal fitness gear, RR Sports &amp; Fitness also
                  supplies children's park equipment and green gym setups for
                  outdoor community spaces. Whether you're kitting out a home
                  gym, gearing up for a match, or upgrading your local park,
                  this is the neighborhood's one-stop shop for sports and
                  fitness.
                </p>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {features.map((f, i) => (
                  <Reveal key={f.title} delay={280 + i * 100}>
                    <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-5 transition-shadow hover:shadow-soft">
                      <f.icon className="h-6 w-6 text-accent-500" strokeWidth={2.2} />
                      <h3 className="mt-3 font-semibold text-brand-900">
                        {f.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-brand-600">
                        {f.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview teasers */}
      <section className="bg-brand-50 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-600">
              Take a look around
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
              See the shop in action
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-600">
              Browse photos of the store and our gear, or watch the short film
              about who we are and what we stock.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Gallery teaser */}
            <Reveal>
              <button
                onClick={() => onNavigate('gallery')}
                className="group relative block w-full overflow-hidden rounded-3xl text-left shadow-soft-lg"
              >
                <img
                  src={TEASER_GALLERY}
                  alt="Shop gear gallery"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-8">
                  <div>
                    <div className="flex items-center gap-2 text-accent-300">
                      <Images className="h-5 w-5" />
                      <span className="text-sm font-semibold uppercase tracking-wider">
                        Gallery
                      </span>
                    </div>
                    <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      Photos of the store & gear
                    </h3>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-brand-900 transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </button>
            </Reveal>

            {/* Video teaser */}
            <Reveal delay={120}>
              <button
                onClick={() => onNavigate('video')}
                className="group relative block w-full overflow-hidden rounded-3xl text-left shadow-soft-lg"
              >
                <img
                  src={TEASER_VIDEO}
                  alt="Watch our story"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/20 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-accent-500 text-brand-950 shadow-soft-lg transition-transform group-hover:scale-110">
                    <PlayCircle className="h-8 w-8" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-8">
                  <div>
                    <div className="flex items-center gap-2 text-accent-300">
                      <PlayCircle className="h-5 w-5" />
                      <span className="text-sm font-semibold uppercase tracking-wider">
                        Watch
                      </span>
                    </div>
                    <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      Meet {shop.name} on film
                    </h3>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-brand-900 transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Find Us / Map */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-600">
              Find Us
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
              Visit Our Store
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-600">
              We're located in Sec-88, Greater Faridabad. Come by to browse the
              full range or call ahead and we'll have your order ready.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <div className="overflow-hidden rounded-3xl shadow-soft-lg">
                <iframe
                  title="Map to RR SPORTS & FITNESS"
                  src={shop.mapEmbedSrc}
                  className="h-[360px] w-full border-0 sm:h-[420px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-2">
              <div className="flex h-full flex-col justify-center rounded-3xl bg-brand-950 p-8 text-brand-100 shadow-soft-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent-400" />
                  <div>
                    <h3 className="font-semibold text-white">Address</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-300">
                      {shop.address.line1}
                      <br />
                      {shop.address.line2}
                      <br />
                      {shop.address.line3}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-accent-400" />
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <a href={shop.phoneHref} className="mt-1 block text-sm text-brand-300 transition-colors hover:text-accent-400">
                      {shop.phone}
                    </a>
                    <p className="mt-1 text-xs text-brand-400">
                      Owner: {shop.owner}
                    </p>
                  </div>
                </div>

                <a
                  href={shop.phoneHref}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-brand-950 transition-colors hover:bg-accent-400"
                >
                  <Phone className="h-4 w-4" />
                  Call the shop
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
