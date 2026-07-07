import { motion } from 'motion/react';
import { IMAGES } from '../data';
import { MapPin, Phone, Award } from 'lucide-react';

export default function AboutView() {
  return (
    <div className="relative space-y-16">
      {/* Decorative space - removed AIDA image */}

      <motion.div
        className="container-frame rounded-2xl p-6 md:p-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center mb-24">
          <div className="w-full md:w-[40%] flex flex-col gap-6 order-2 md:order-1">
            <span className="font-label-caps text-primary uppercase tracking-widest">
              Our Legacy
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
              Our Story
            </h1>
            <blockquote className="relative">
              <span className="absolute -top-4 -left-6 text-primary opacity-30 text-6xl font-display-lg select-none">
                &ldquo;
              </span>
              <p className="font-body-lg text-text-warm-white italic leading-relaxed pl-4">
                The greatest compliment you can get as a chef, is for someone to tell you after eating their meal, that they can taste the love that went into every bite.
              </p>
            </blockquote>
          </div>

          {/* Circular Chef Photo */}
          <div className="w-full md:w-[60%] relative flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden shadow-2xl z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src={IMAGES.chefMohamed}
                  alt="Chef Mohamed"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
              <div className="absolute -inset-4 border border-primary/10 rounded-full z-0"></div>
            </div>
          </div>
        </div>

        {/* Story Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 mb-24 items-start border-t border-border-subtle/50 pt-16">
          <div className="md:col-span-5 space-y-4">
            <h2 className="font-headline-md text-headline-md text-primary">
              The Visionary Behind the Flavors
            </h2>
            <div className="h-0.5 w-20 bg-primary"></div>
          </div>
          <div className="md:col-span-7 space-y-6 text-text-warm-white/80 leading-relaxed font-body-md">
            <p className="first-letter:text-5xl first-letter:font-display-lg first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-none">
              Chef Mohamed knows what he is meant to do in this life; it is cooking. He doesn't see challenges in making food that is clean, nourishing, incredibly tasty, and healthy for all kinds of diets. He has evolved into an understated talent who takes pride in being a hands-on Chef and sole business owner.
            </p>
            <p>
              Chef Mohamed carefully selects ingredients which are best for the health of all involved, ensuring that every plate served at Savor Cafe &amp; Bistro represents a harmonious balance between traditional craftsmanship and modern nutritional consciousness. Savor delivers an unforgettable dining session in a cozy space that makes you feel right at home.
            </p>
          </div>
        </div>

        {/* Philosophy Block */}
        <div className="bg-surface-onyx rounded-2xl p-8 md:p-16 text-center space-y-8 border border-border-subtle relative overflow-hidden">
          <Award className="absolute -top-10 -right-10 w-40 h-40 text-primary opacity-5 rotate-12" />
          <h3 className="font-headline-md text-headline-md text-text-warm-white max-w-3xl mx-auto leading-snug italic">
            "We offer healthy vegetarian, modern, Arabic food, as well as beer and wine. Stop by eat some delicious food and relax."
          </h3>
          <p className="text-text-warm-white/80 max-w-2xl mx-auto font-body-md">
            We are happy to be a part of the Inner Sunset neighborhood in San Francisco bringing new flavors to nourish your body and feed your soul.
          </p>
          <div className="flex justify-center pt-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary"></div>
              <span className="font-label-caps text-xs uppercase tracking-widest text-primary">
                Established in San Francisco
              </span>
              <div className="w-12 h-px bg-primary"></div>
            </div>
          </div>
        </div>

        {/* Location & Contact */}
        <div className="mt-20 pt-10 border-t border-border-subtle/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-11 h-11 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <span className="text-text-warm-white group-hover:text-primary transition-colors font-body-md">
              401 Irving Street, San Francisco, CA 94122
            </span>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-11 h-11 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span className="text-text-warm-white group-hover:text-primary transition-colors font-body-md">
              415.702.6048
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
