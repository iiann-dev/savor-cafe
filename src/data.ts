import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // ALL DAY MENU
  {
    id: 'ad-1',
    name: 'Savor Vegan Melt',
    price: 17,
    description: 'Fava bean, roasted cauliflower, scorched eggplant, and marinated artichoke.',
    category: 'all-day',
  },
  {
    id: 'ad-2',
    name: 'Green Spanish Melt',
    price: 17,
    description: 'Arugula, fresh dill, pickled onions, avocado, vegan feta, and harissa.',
    category: 'all-day',
  },
  {
    id: 'ad-3',
    name: 'Portobello Mushroom Shawarma',
    price: 17,
    description: 'Sautéed onion, sumac, roasted tomato, and garlic lemon tahini.',
    category: 'all-day',
  },
  {
    id: 'ad-4',
    name: 'Jackfruit Shawarma',
    price: 17,
    description: 'Sesame tahini, fresh tabouleh, and a medley of seasonal garden greens.',
    category: 'all-day',
  },
  {
    id: 'ad-5',
    name: 'Pulled King Trumpet Burger',
    price: 17,
    description: 'Slow-braised mushroom, signature bbq sauce, and crisp house coleslaw.',
    category: 'all-day',
  },
  {
    id: 'ad-6',
    name: 'House Falafel',
    price: 17,
    description: 'Smooth hummus, vine-ripened tomato, cucumber, and sumac tahini.',
    category: 'all-day',
  },

  // DINNER TAPAS
  {
    id: 'dt-1',
    name: 'Savor Platter',
    price: 21,
    description: 'A grand sampler of hummus, baba ganoush, green hummus, and signature falafel.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-2',
    name: 'Fattoush Salad',
    price: 17,
    description: 'Garden fresh vegetables, crispy pita chips, and sumac-lemon vinaigrette.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-3',
    name: 'Wild Mushroom Knafeh',
    price: 17,
    description: 'Savory shredded pastry layered with wild mushrooms and artisanal vegan cheese.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-4',
    name: 'Roasted Cauliflower',
    price: 18,
    description: 'Fire-roasted florets served with spiced tahini and pomegranate seeds.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-5',
    name: 'Yemeni Okra Stew',
    price: 18,
    description: 'Slow-simmered okra in a rich tomato and hawaij spiced broth.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-6',
    name: 'Butternut Squash Kibbeh',
    price: 19,
    description: 'Bulgur wheat shells stuffed with roasted squash, caramelized onions, and pine nuts.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-7',
    name: 'Falafel Croquettes',
    price: 18,
    description: 'Delicate, crispy croquettes served with a spicy harissa dipping sauce.',
    category: 'dinner-tapas',
  },
  {
    id: 'dt-8',
    name: 'Kufta',
    price: 18,
    description: 'Beyond Meat skewers with savory forest mushrooms and Mediterranean herbs.',
    category: 'dinner-tapas',
  },
];

export const IMAGES = {
  seafoodPasta: 'https://images.unsplash.com/photo-1672636402078-4b957a572e4e?q=80&w=1200&auto=format&fit=crop',
  scallopGarnish: 'https://images.unsplash.com/photo-1597131628347-c769fc631754?q=80&w=400&auto=format&fit=crop',
  bistroInterior: 'https://images.unsplash.com/photo-1758900393800-4e5d9d20c4d7?q=80&w=1200&auto=format&fit=crop',
  chefMohamed: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop',
  steakPlatter: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop'
};
