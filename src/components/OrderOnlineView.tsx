import { motion } from 'motion/react';
import { IMAGES } from '../data';
import { Truck, Coffee } from 'lucide-react';

export default function OrderOnlineView() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <motion.div
        className="text-center space-y-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
          Delivery &amp; Hours
        </h1>
        <p className="font-label-caps text-xs uppercase tracking-[0.2em] text-text-warm-white opacity-80">
          Enjoy Savor from the comfort of your home
        </p>
      </motion.div>

      {/* Main Container */}
      <motion.div
        className="container-frame rounded-2xl overflow-hidden relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
          {/* LEFT: Order Content (40%) */}
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center space-y-8 bg-surface-container-low border-r border-border-subtle">
            <div className="space-y-4">
              <span className="font-label-caps text-primary uppercase tracking-widest block">
                Order Online
              </span>
              <h2 className="font-display-lg text-display-lg-mobile text-primary leading-tight uppercase tracking-wide">
                Order Online
              </h2>
              <p className="text-text-warm-white/80 font-body-md leading-relaxed">
                Choose from these options to order online. Experience our chef-crafted menu from the comfort of your home.
              </p>
            </div>

            {/* Uber Eats */}
            <motion.div
              className="bg-surface-onyx p-6 border border-border-subtle rounded-xl hover:border-primary/30 transition-colors group space-y-6"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-surface rounded-lg border border-border-subtle text-primary">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="font-display-lg text-xl text-text-warm-white">Uber Eats</h3>
              </div>
              <p className="text-muted-stone text-sm font-body-md leading-relaxed">
                Enjoy fast, reliable delivery straight to your door with our primary delivery partner.
              </p>
              <motion.a
                href="https://ubereats.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primary-container text-surface-onyx py-3 rounded-lg font-label-caps uppercase text-xs tracking-widest active:scale-98 transition-transform"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Order From Uber Eats
              </motion.a>
            </motion.div>

            {/* Catering */}
            <div className="border-t border-border-subtle/50 pt-8 space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <Coffee className="w-4 h-4" />
                <h4 className="font-label-caps text-xs uppercase tracking-widest">
                  Catering &amp; Events
                </h4>
              </div>
              <p className="text-muted-stone text-sm font-body-md leading-relaxed">
                Interested in catering? Call us at <span className="text-primary">415.702.6048</span> or visit us to discuss your event. We specialize in intimate gatherings and corporate luncheons.
              </p>
            </div>
          </div>

          {/* RIGHT: Visual Background & Hours (60%) */}
          <div className="lg:col-span-7 relative bg-surface overflow-hidden flex items-end p-8 md:p-12 min-h-[400px] lg:min-h-auto">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60 hover:scale-105 transition-transform duration-1000 z-0"
              style={{ backgroundImage: `url('${IMAGES.bistroInterior}')` }}
            ></div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface/95 via-surface/30 to-transparent lg:bg-gradient-to-r lg:from-surface-container-low lg:via-transparent lg:to-transparent z-10"></div>

            {/* Hours card */}
            <motion.div
              className="bg-surface-onyx/95 backdrop-blur-md p-6 md:p-8 border border-border-subtle rounded-xl max-w-sm w-full ml-auto relative z-20 shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-2.5 mb-6 border-b border-border-subtle pb-3">
                <h3 className="font-display-lg text-lg text-text-warm-white">
                  Operating Hours
                </h3>
              </div>
              <div className="space-y-4 font-body-md text-sm">
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-muted-stone">Tue - Fri</span>
                  <span className="text-text-warm-white">
                    11am - 3pm &amp; 5:30pm - 8:30pm
                  </span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-2">
                  <span className="text-muted-stone">Sat - Sun</span>
                  <span className="text-text-warm-white">
                    11am - 3:30pm &amp; 5:30pm - 9pm
                  </span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-muted-stone">Monday</span>
                  <span className="text-error font-bold uppercase tracking-wider">Closed</span>
                </div>
              </div>
              <p className="mt-6 text-muted-stone italic font-body-md text-xs">
                *Pickup and delivery available during kitchen hours only.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
