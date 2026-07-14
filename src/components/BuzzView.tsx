import { motion } from 'motion/react';
import { ExternalLink, Star, Newspaper, UtensilsCrossed } from 'lucide-react';
import { BUZZ_MENTIONS } from '../data';

const iconMap = {
  '✨': Newspaper,
  '🍽️': UtensilsCrossed,
  '⭐': Star,
};

export default function BuzzView() {
  return (
    <div className="relative space-y-16">
      <motion.div
        className="container-frame rounded-2xl p-6 md:p-16 relative z-10 pt-12 md:pt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start mb-16">
          <div className="w-full md:w-[45%] space-y-4">
            <span className="font-label-caps text-primary uppercase tracking-widest">
              Buzz & Press
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-none">
              What People<br />Are Saying
            </h1>
            <div className="h-0.5 w-20 bg-primary"></div>
          </div>
          <motion.div
            className="w-full md:w-[55%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="font-body-lg text-text-warm-white/80 leading-relaxed">
              The word is getting out about Savor — and we're humbled by every kind word,
              every review, and every return guest who walks through our doors.
            </p>
          </motion.div>
        </div>

        {/* Press mentions grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {BUZZ_MENTIONS.map((mention, i) => {
            const IconComp = iconMap[mention.icon as keyof typeof iconMap] || Newspaper;

            return (
              <motion.a
                key={mention.publication}
                href={mention.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-surface-onyx rounded-xl border border-border-subtle p-6 md:p-8 hover:border-primary/40 transition-all duration-300 relative overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                {/* Hover glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500"></div>

                {/* Icon row */}
                <div className="flex items-start justify-between mb-5 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <IconComp className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-label-caps text-xs text-muted-stone uppercase tracking-widest">
                    {mention.publication === 'KRON 4 News' ? 'Video Feature' : 'Press Feature'}
                  </span>
                </div>

                {/* Publication name */}
                <h3 className="font-display-lg text-2xl text-text-warm-white mb-3 group-hover:text-primary transition-colors relative z-10">
                  {mention.publication}
                </h3>

                {/* Summary */}
                <p className="text-muted-stone text-sm leading-relaxed mb-5 relative z-10">
                  {mention.summary}
                </p>

                {/* Read more */}
                <div className="flex items-center gap-2 text-primary text-xs uppercase tracking-widest font-label-caps group-hover:gap-3 transition-all relative z-10">
                  <span>Read Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* KRON 4 video — self-hosted */}
        <motion.div
          className="bg-surface-onyx rounded-2xl border border-border-subtle overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="p-8 md:p-12 pb-0 md:pb-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="text-xl">📺</span>
              </div>
              <span className="font-label-caps text-xs text-muted-stone uppercase tracking-widest">
                Video Feature
              </span>
            </div>
            <h3 className="font-display-lg text-headline-md text-text-warm-white mb-3">
              Watch what KRON 4 said about us
            </h3>
            <p className="text-muted-stone max-w-xl font-body-md mb-6">
              See what KRON 4 had to say about Savor — from Chef Mohamed's journey to the flavors
              that are putting Inner Sunset on the map.
            </p>
          </div>
          <div className="relative w-full">
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full max-h-[600px] object-contain bg-black/40"
              style={{ display: 'block' }}
            >
              <source src="/videos/savor_press_kron.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
