import { useNavigate } from 'react-router-dom';

const navItems: { label: string; path: string }[] = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Buzz', path: '/buzz' },
  { label: 'Reservations', path: '/reservations' },
  { label: 'Order Online', path: '/order' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="max-w-container-max mx-auto px-gutter py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display-lg text-headline-md text-primary mb-4">Savor</h3>
            <p className="text-muted-stone text-sm leading-relaxed max-w-xs">
              Healthy vegetarian and modern Arabic food in the heart of San Francisco's Inner Sunset district.
            </p>
          </div>
          <div>
            <h4 className="font-label-caps text-primary uppercase mb-4">Navigation</h4>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className="block text-muted-stone text-sm hover:text-primary transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-label-caps text-primary uppercase mb-4">Contact</h4>
            <div className="space-y-2 text-muted-stone text-sm">
              <p>401 Irving Street</p>
              <p>San Francisco, CA 94122</p>
              <p className="text-primary">415.702.6048</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border-subtle/50 mt-8 pt-8 text-center text-muted-stone text-xs font-label-caps uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Savor Cafe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}