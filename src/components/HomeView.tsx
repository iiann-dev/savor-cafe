import { motion } from 'motion/react';
import { IMAGES } from '../data';
import { TabType } from '../types';

interface HomeViewProps {
  onNavigate: (tab: TabType) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="space-y-24">
      {/* SECTION 1: HERO */}
      <section className="flex flex-col md:flex-row min-h-[auto] md:min-h-[800px] items-center relative">
        {/* Left: Text 40% */}
        <div className="w-full md:w-[40%] px-6 md:px-12 py-12 md:py-20 z-10">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-label-caps text-primary-container mb-3 block uppercase tracking-widest text-sm md:text-base">
              Welcome to
            </span>
            <h1 className="font-display-lg text-4xl md:text-display-lg text-primary-container mb-4 leading-none">
              Savor Cafe
            </h1>
            <p className="font-body-md md:font-body-lg text-white/80 mb-2 max-w-xs md:max-w-sm leading-relaxed">
              Healthy vegetarian, modern Arabic food, as well as beer and wine.
            </p>
            <p className="font-body-sm md:font-body-md text-primary/80 mb-8 max-w-xs md:max-w-sm leading-relaxed italic">
              Stop by, eat some delicious food and relax.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                onClick={() => onNavigate('menu')}
                className="bg-primary-container text-surface-onyx px-7 py-3.5 rounded-lg font-label-caps text-sm hover:translate-y-[-2px] transition-transform cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                VIEW MENU
              </motion.button>
              <motion.button
                onClick={() => onNavigate('reservations')}
                className="border border-primary-container text-primary-container px-7 py-3.5 rounded-lg font-label-caps text-sm hover:bg-primary-container/10 transition-colors cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                MAKE A RESERVATION
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Right: Image 60% */}
        <div className="w-full md:w-[60%] relative overflow-visible flex justify-center md:justify-end">
          <motion.div
            className="w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[4/3] md:aspect-square rounded-[16px] overflow-hidden border border-border-subtle shadow-2xl">
              <img
                src={IMAGES.heroFood}
                alt="Fresh vegetarian cuisine"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CHEF'S TASTING MENU */}
      <section className="relative pt-8">
        <div className="container-frame p-8 md:p-12 overflow-hidden">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left */}
            <motion.div
              className="w-full md:w-[45%] space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display-lg text-headline-md text-primary">
                Chef's Tasting Menu
              </h2>
              <p className="font-body-md text-text-warm-white/80 leading-relaxed">
                A curated journey through the vibrant flavors of the Mediterranean. Savor traditional vegetarian dishes elevated with Chef Mohamed's signature touch.
              </p>
              <div className="border-l-2 border-primary pl-4 py-2 space-y-2">
                <p className="text-xl font-display-lg text-primary">3 courses Prix Fixe $35/pp</p>
                <p className="text-sm text-muted-stone font-label-caps">
                  Available exclusively Sundays 5:30pm – 8:00pm.
                </p>
              </div>
              <motion.button
                onClick={() => onNavigate('reservations')}
                className="bg-primary-container text-surface-onyx px-6 py-3.5 rounded-lg font-label-caps hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Make a Reservation
              </motion.button>
            </motion.div>

            {/* Right */}
            <motion.div
              className="w-full md:w-[55%] relative rounded-xl overflow-hidden border border-border-subtle"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-video w-full">
                <img
                  src={IMAGES.foodPlatter}
                  alt="Fresh vegetarian platter"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/40 to-transparent flex flex-col justify-end p-6">
                <span className="font-label-caps text-primary uppercase tracking-widest">
                  Featured This Week
                </span>
                <h4 className="font-display-lg text-2xl text-text-warm-white">
                  Seasonal Mediterranean
                </h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: STORY SNIPPET */}
      <section className="flex flex-col md:flex-row gap-12 items-center">
        {/* Left: Chef Image */}
        <motion.div
          className="w-full md:w-[40%] relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border-subtle shadow-xl">
            <img
              src={IMAGES.chefMohamed}
              alt="Chef Mohamed Aboghanem"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-primary text-on-primary p-4 rounded-full w-24 h-24 flex flex-col items-center justify-center font-display-lg text-center text-[10px] leading-tight shadow-xl">
            <span>EST.</span>
            <span className="text-lg">2018</span>
            <span>INNER</span>
            <span>SUNSET</span>
          </div>
        </motion.div>

        {/* Right: Story Text */}
        <motion.div
          className="w-full md:w-[60%] space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-4">
            <span className="font-label-caps text-primary uppercase tracking-widest block">
              Our Story
            </span>
            <h3 className="font-display-lg text-display-lg-mobile md:text-4xl text-text-warm-white">
              Inner Sunset, <br />
              San Francisco
            </h3>
            <div className="h-0.5 w-16 bg-primary mt-2"></div>
          </div>

          <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-text-warm-white/80 font-display-lg leading-relaxed">
            "We are happy to be a part of the Inner Sunset neighborhood bringing new flavors to nourish your body and feed your soul."
          </blockquote>

          <div className="flex items-center gap-3">
            <span className="font-label-caps text-xs uppercase tracking-wider text-primary">
              Chef Mohamed Aboghanem — Founder &amp; Head Chef
            </span>
          </div>

          <div className="bg-surface-onyx p-6 rounded-xl border border-border-subtle flex items-start gap-4">
            <div>
              <p className="font-label-caps text-xs uppercase tracking-wider text-muted-stone mb-1">
                Find Us
              </p>
              <p className="text-sm text-text-warm-white">
                401 Irving Street, San Francisco, CA 94122
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="text-xs text-primary hover:text-primary-container underline transition-colors mt-2 uppercase tracking-widest font-label-caps cursor-pointer"
              >
                Learn More About Savor &rarr;
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
