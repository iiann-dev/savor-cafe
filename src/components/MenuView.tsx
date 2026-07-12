import { motion } from 'motion/react';
import { MENU_ITEMS, IMAGES } from '../data';

export default function MenuView() {
  const sandwichesItems = MENU_ITEMS.filter((item) => item.category === 'sandwiches-shawarmas');
  const saladsItems = MENU_ITEMS.filter((item) => item.category === 'salads-sharing');
  const dinnerItems = MENU_ITEMS.filter((item) => item.category === 'dinner-tapas');

  return (
    <div className="relative space-y-16">
      {/* Header */}
      <motion.div
        className="text-center space-y-4 pt-12 md:pt-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
          Our Menu
        </h1>
        <p className="font-label-caps text-xs uppercase tracking-[0.2em] text-text-warm-white opacity-80">
          Sandwiches, Shawarmas &amp; Sharing Plates
        </p>
      </motion.div>

      {/* Main Container */}
      <motion.div
        className="container-frame p-6 md:p-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {/* SECTION 1: SANDWICHES & SHAWARMAS */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-12 border-b border-primary/20 pb-4">
            <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-wide">
              All Day Menu
            </h2>
            <span className="text-muted-stone font-body-md uppercase tracking-widest">
              — Sandwiches &amp; Shawarmas —
            </span>
            <span className="md:ml-auto font-display-lg text-headline-md text-primary">
              $17 each
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {sandwichesItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex flex-col gap-2 group cursor-pointer"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ x: 8 }}
              >
                <div className="flex justify-between items-baseline border-b border-primary/10 pb-2">
                  <h3 className="font-headline-md text-xl text-primary transition-colors duration-300 group-hover:text-secondary">
                    {item.name}
                  </h3>
                  <span className="text-muted-stone font-label-caps">
                    ${item.price}
                  </span>
                </div>
                <p className="text-text-warm-white font-body-md opacity-70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 2: SALADS & SHARING PLATES */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-12 border-b border-primary/20 pb-4">
            <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-wide">
              Salads &amp; Sharing Plates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {saladsItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex flex-col gap-2 group cursor-pointer"
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ x: -8 }}
              >
                <div className="flex justify-between items-baseline border-b border-primary/10 pb-2">
                  <h3 className="font-headline-md text-xl text-primary transition-colors duration-300 group-hover:text-secondary">
                    {item.name}
                  </h3>
                  <span className="text-muted-stone font-label-caps">
                    ${item.price}
                  </span>
                </div>
                <p className="text-text-warm-white font-body-md opacity-70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: DINNER TAPAS */}
        <section>
          <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-12 border-b border-primary/20 pb-4">
            <h2 className="font-headline-md text-headline-md text-primary uppercase tracking-wide">
              Dinner Tapas
            </h2>
            <span className="text-muted-stone font-body-md uppercase tracking-widest">
              — Tapas Menu for Sharing —
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
            {dinnerItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex flex-col gap-2 group cursor-pointer"
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ x: -8 }}
              >
                <div className="flex justify-between items-baseline border-b border-primary/10 pb-2">
                  <h3 className="font-headline-md text-xl text-primary transition-colors duration-300 group-hover:text-secondary">
                    {item.name}
                  </h3>
                  <span className="text-muted-stone font-label-caps">
                    ${item.price}
                  </span>
                </div>
                <p className="text-text-warm-white font-body-md opacity-70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Dietary Note */}
        <div className="mt-16 pt-8 border-t border-border-subtle text-center">
          <p className="text-muted-stone font-label-caps text-xs uppercase tracking-widest italic opacity-75">
            All items prepared vegan or option noted • Menu &amp; prices subject to change
          </p>
        </div>
      </motion.div>
    </div>
  );
}
