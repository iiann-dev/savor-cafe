import { MenuItem } from './types';

// ─── ALL DAY LUNCH — SANDWICHES & SHAWARMAS ───
export const MENU_ITEMS: MenuItem[] = [
  // ALL DAY LUNCH — SANDWICHES & SHAWARMAS
  {
    id: 'ad-1',
    name: 'Savor Vegan Melt',
    price: 17,
    description: 'Fresh fava bean puree, California cauliflower, eggplant, artichoke puree. GF option.',
    category: 'sandwiches-shawarmas',
  },
  {
    id: 'ad-2',
    name: 'Green Spanish Melt',
    price: 17,
    description: 'Arugula, dill, cumin pickled onions, avocado, vegan feta, and harissa mayo.',
    category: 'sandwiches-shawarmas',
  },
  {
    id: 'ad-3',
    name: 'Artichoke Shawarma',
    price: 17,
    description: 'With tabbouleh, tahini, greens, and baba ganoush wrapped in lavash bread.',
    category: 'sandwiches-shawarmas',
  },
  {
    id: 'ad-4',
    name: 'Portobello Mushroom Shawarma',
    price: 17,
    description: 'Onion, sumac, roasted tomato, and garlic lemon tahini wrapped in lavash bread.',
    category: 'sandwiches-shawarmas',
  },
  {
    id: 'ad-5',
    name: 'Jackfruit Shawarma',
    price: 17,
    description: 'With tahini, tabouleh, and greens wrapped in lavash bread.',
    category: 'sandwiches-shawarmas',
  },
  {
    id: 'ad-6',
    name: 'Pulled King Trumpet Burger',
    price: 17,
    description: 'House BBQ sauce, coleslaw. Vegan and GF option.',
    category: 'sandwiches-shawarmas',
  },
  {
    id: 'ad-7',
    name: 'House Falafel',
    price: 17,
    description: 'Hummus, tomato, cucumber, onion, sumac tahini & pita.',
    category: 'sandwiches-shawarmas',
  },
  {
    id: 'ad-8',
    name: 'Hodo Tofu Shawarma',
    price: 17,
    description: 'With roasted tomatoes and peppers, tabouleh, eggplant puree, and tahini.',
    category: 'sandwiches-shawarmas',
  },

  // ALL DAY LUNCH — SALADS & SHARING PLATES
  {
    id: 'sal-1',
    name: 'Fattoush Salad',
    price: 18,
    description: 'Romaine hearts, tomatoes, cucumbers, red onion, sumac, feta, black olives, fresh mint, quinoa with olive oil and lemon. Vegan option.',
    category: 'salads-sharing',
  },
  {
    id: 'sal-2',
    name: 'Roasted Harvest Vegetables',
    price: 18,
    description: 'Butternut squash, heirloom carrots, beets, cranberry preserves, and sunflower seeds, with cinnamon over garlic yogurt. Vegan option.',
    category: 'salads-sharing',
  },
  {
    id: 'sal-3',
    name: 'Savor Platter',
    price: 21,
    description: 'Hummus, baba ganoush, green hummus, saffron & eggplant, tahini, falafel & pita.',
    category: 'salads-sharing',
  },
  {
    id: 'sal-4',
    name: 'Wild Mushroom Knafeh',
    price: 18,
    description: 'Vegan cheese, shredded phyllo, roasted tomato-bell pepper sauce.',
    category: 'salads-sharing',
  },
  {
    id: 'sal-5',
    name: 'Potato & Sage Torte',
    price: 18,
    description: 'Potatoes, onion, sage, mustard, in phyllo, baked with vegan herbed butter.',
    category: 'salads-sharing',
  },
  {
    id: 'sal-6',
    name: 'Mujadara',
    price: 19,
    description: 'Forbidden rice, lentils, caramelized onions, cinnamon, allspice, tahini, Arabic salad, and Hodo tofu.',
    category: 'salads-sharing',
  },
  {
    id: 'sal-7',
    name: 'Green Yemeni Stew',
    price: 19,
    description: 'Okra, molokhia (Egyptian spinach), kale, brown rice.',
    category: 'salads-sharing',
  },

  // DINNER TAPAS
  {
    id: 'dt-1',
    name: 'Hot & Cold Asparagus',
    price: 18,
    description: 'Fresh fava bean puree, roasted garbanzo beans, baby kale, sunflower seeds, avocado, and nutritional yeast.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-2',
    name: 'Fattoush Salad',
    price: 17,
    description: 'Romaine heart, tomato, cucumber, red onion, sumac, feta, black olives, fresh mint, quinoa with olive oil and lemon. Vegan option.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-3',
    name: 'Vegan Stuffed Baby Beets Salad',
    price: 17,
    description: 'Cream cheese, almonds, jalapeños, watercress, spiced garlic yogurt, prunes, and honey mustard.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-4',
    name: 'Savor Platter',
    price: 21,
    description: 'Hummus, baba ganoush, green hummus, saffron, eggplant, tahini, falafel & pita.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-5',
    name: 'Hodo Tofu Sougar',
    price: 19,
    description: 'Marinated organic tofu roasted and served on a bed of baba ganoush with caramelized onions, toasted pine nuts, sumac, and spicy harissa.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-6',
    name: 'Wild Mushroom Knafeh',
    price: 17,
    description: 'Wild mushrooms with vegan cheese, baked in shredded phyllo, topped with a roasted tomato-bell pepper sauce.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-7',
    name: 'Yemeni Okra Stew',
    price: 18,
    description: 'Okra stewed with onion, tomato, turmeric, ginger, cilantro, and olive oil.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-8',
    name: 'Roasted Cauliflower',
    price: 18,
    description: 'Quarter organic cauliflower head with zaatar, olive oil, and tahini over BBQ\'d French lentils.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-9',
    name: 'Fennel Baklava',
    price: 18,
    description: 'Caramelized fennel, agave nectar, dijon mustard, pistachio, cinnamon, and rosewater wrapped in phyllo, baked and served with olive tapenade.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-10',
    name: 'Falafel Croquettes',
    price: 18,
    description: 'Falafel with mint, cilantro, allspice, olive oil, and garlic over tahini sauce.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-11',
    name: 'Mashi',
    price: 18,
    description: 'Baby eggplant stuffed with leeks, Anaheim peppers, Beyond Meat, sumac, pine nuts, served over garlic sauce.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-12',
    name: 'Kufta',
    price: 18,
    description: 'Beyond Meat, shimeji mushrooms, mint, parsley, allspice, shallots, and bell pepper with saffron sauce.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-13',
    name: 'Bastilla',
    price: 19,
    description: 'Parsnip, mushrooms, pistachio, and knafeh (shredded phyllo).',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-14',
    name: 'Falafel Dumpling',
    price: 20,
    description: 'Egyptian spinach stew (Molokhia) with falafel, olive oil, onions, garlic, and fresh lemon juice.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-15',
    name: 'Butternut Squash Kibbeh',
    price: 19,
    description: 'Butternut squash, vegan cream cheese, bulgur wheat, fresh ginger, onion, parsley, mint, and cumin.',
    category: 'dinner-tapas',
  },
];

export interface BuzzMention {
  publication: string;
  summary: string;
  url: string;
  icon?: string;
}

export const BUZZ_MENTIONS: BuzzMention[] = [
  {
    publication: 'San Francisco Magazine',
    summary:
      'Savor was named Best Vegetarian Restaurant by San Francisco\'s premier luxury lifestyle publication — a testament to Chef Mohamed\'s vibrant modern Arabic cuisine.',
    url: 'https://www.modernluxury.com/san-francisco/',
    icon: '✨',
  },
  {
    publication: 'SF Eater',
    summary:
      'Eater SF chronicles Chef Mohamed Aboghanem\'s inspiring return — from Berkeley\'s beloved Saha to his new Inner Sunset gem, bringing Yemeni-Arabic soul food to San Francisco.',
    url: 'https://sf.eater.com/2022/5/31/23148718/savor-new-restaurant-inner-sunset-open-menu',
    icon: '🍽️',
  },
  {
    publication: 'Yelp',
    summary:
      'Rated 4.7 stars across 312 reviews. Guests rave about the Wild Mushroom Knafeh, Portobello Shawarma, and the warm, inviting atmosphere that makes every visit feel special.',
    url: 'https://www.yelp.com/biz/savor-san-francisco-7',
    icon: '⭐',
  },
];

export const IMAGES = {
  // Hero image — vibrant vegan/mediterranean dish
  heroFood: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
  // Interior of a cozy cafe
  bistroInterior: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop',
  // Chef in kitchen
  chefMohamed: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop',
  // Flat lay of colorful veggie dishes
  foodPlatter: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop',
  // Bread/hummus close up
  hummusPlatter: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=800&auto=format&fit=crop',
  // Vibrant vegan platter — wood-fired veggies, vegan theme
  steakPlatter: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',
};
