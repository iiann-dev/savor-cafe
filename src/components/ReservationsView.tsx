import { motion } from 'motion/react';
import { IMAGES } from '../data';
import { Calendar, Users, MapPin, PartyPopper, ExternalLink, Clock } from 'lucide-react';

export default function ReservationsView() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <motion.div
        className="text-center space-y-3 pt-12 md:pt-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
          Reserve a Table
        </h1>
        <p className="font-label-caps text-xs uppercase tracking-[0.2em] text-text-warm-white opacity-80">
          Book securely via OpenTable
        </p>
      </motion.div>

      {/* Form Container */}
      <motion.div
        className="container-frame p-6 md:p-12 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT: INFO & HOURS */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-wide">
                Booking Information
              </h2>
              <p className="text-text-warm-white/80 leading-relaxed font-body-md">
                We look forward to welcoming you to Savor. To ensure the best possible experience, we recommend booking in advance. For parties larger than six, please contact us directly at <span className="text-primary font-body-md">415.702.6048</span> so we can personally accommodate your group.
              </p>
            </div>

            {/* Dining Hours */}
            <div className="space-y-4">
              <h3 className="font-label-caps text-xs uppercase tracking-widest text-primary">
                Dining Hours
              </h3>
              <div className="space-y-2 font-body-md text-text-warm-white/80">
                <div className="flex justify-between border-b border-border-subtle pb-1">
                  <span className="text-muted-stone">Monday</span>
                  <span className="text-error font-bold uppercase">Closed</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-1">
                  <span className="text-muted-stone">Tue-Fri Lunch</span>
                  <span className="text-text-warm-white">11:00 AM - 3:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-1">
                  <span className="text-muted-stone">Sat-Sun Lunch</span>
                  <span className="text-text-warm-white">11:00 AM - 3:30 PM</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-1">
                  <span className="text-muted-stone">Dinner Wed-Thu</span>
                  <span className="text-text-warm-white">5:30 PM - 8:30 PM</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-1">
                  <span className="text-muted-stone">Dinner Fri-Sat</span>
                  <span className="text-text-warm-white">5:30 PM - 9:00 PM</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-muted-stone">Dinner Sun</span>
                  <span className="text-text-warm-white">5:30 PM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: OPENTABLE CTA */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-center">
            <motion.div
              className="bg-surface-onyx/80 rounded-2xl border border-border-subtle p-10 md:p-12 text-center space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-container/10 border border-primary-container/30 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-primary-container" />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-display-lg text-headline-md text-text-warm-white">
                  Book Your Experience
                </h3>
                <p className="text-muted-stone font-body-md max-w-md mx-auto leading-relaxed">
                  Secure your table instantly through OpenTable — no account required. Choose your date, time, and party size in seconds.
                </p>
              </div>

              {/* CTA Button */}
              <motion.a
                href="https://www.opentable.com/restref/client/?restref=413268&lang=en-US&ot_source=Restaurant%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary-container text-surface-onyx font-label-caps uppercase tracking-[0.15em] px-10 py-4 rounded-lg text-sm hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reserve on OpenTable
                <ExternalLink className="w-4 h-4" />
              </motion.a>

              <div className="flex items-center justify-center gap-2 text-muted-stone/60 text-xs font-body-md">
                <span>Free, secure, instant confirmation</span>
              </div>
            </motion.div>

            {/* Bottom image */}
            <div className="relative rounded-xl overflow-hidden aspect-[16/6] border border-border-subtle group">
              <img
                src={IMAGES.steakPlatter}
                alt="Seared Steak Entrée"
                className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/30 to-transparent flex items-center p-6">
                <div className="space-y-1">
                  <span className="font-label-caps text-xs uppercase tracking-widest text-primary block">
                    Signature Experience
                  </span>
                  <h4 className="font-display-lg text-lg text-text-warm-white">
                    Wood-Fired Flavors
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border-subtle/50 mt-12 pt-10">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-surface-container rounded-xl border border-border-subtle text-primary">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display-lg text-sm text-primary">The Location</h4>
              <p className="font-body-md text-xs text-text-warm-white/80 leading-relaxed">
                401 Irving Street, San Francisco, CA 94122. Nestled in the heart of the historic Inner Sunset district, Savor offers an intimate escape from the city bustle.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-surface-container rounded-xl border border-border-subtle text-primary">
              <PartyPopper className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display-lg text-sm text-primary">Private Events</h4>
              <p className="font-body-md text-xs text-text-warm-white/80 leading-relaxed">
                Host your next celebration in our private lounge or mezzanine. Tailored menus and wine pairings available for groups of 12 to 40 guests.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
