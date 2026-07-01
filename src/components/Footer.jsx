import { Link } from 'react-router-dom';
import { Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-coffee-espresso text-coffee-oat py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 font-serif text-2xl font-bold mb-6 text-coffee-cream">
            <Coffee size={28} />
            <span>Aura</span>
          </Link>
          <p className="text-coffee-oat/80 text-sm leading-relaxed mb-6">
            Crafting exceptional coffee experiences with sustainably sourced beans and artisanal roasting methods since 1998.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-coffee-cream transition-colors text-sm">Instagram</a>
            <a href="#" className="hover:text-coffee-cream transition-colors text-sm">Twitter</a>
            <a href="#" className="hover:text-coffee-cream transition-colors text-sm">Facebook</a>
          </div>
        </div>
        
        <div>
          <h4 className="font-serif text-lg mb-6 text-coffee-cream">Explore</h4>
          <ul className="space-y-4 text-sm text-coffee-oat/80">
            <li><Link to="/menu" className="hover:text-coffee-cream transition-colors">Our Menu</Link></li>
            <li><Link to="/about" className="hover:text-coffee-cream transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-coffee-cream transition-colors">Visit Us</Link></li>
            <li><a href="#" className="hover:text-coffee-cream transition-colors">Journal</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-serif text-lg mb-6 text-coffee-cream">Visit</h4>
          <ul className="space-y-4 text-sm text-coffee-oat/80">
            <li>123 Artisan Alley</li>
            <li>Coffee District, NY 10001</li>
            <li className="pt-2">Mon - Fri: 7am - 7pm</li>
            <li>Sat - Sun: 8am - 6pm</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-serif text-lg mb-6 text-coffee-cream">Newsletter</h4>
          <p className="text-sm text-coffee-oat/80 mb-4">Subscribe for seasonal releases and exclusive events.</p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-coffee-charcoal/20 border border-coffee-oat/20 px-4 py-3 text-sm rounded-none focus:outline-none focus:border-coffee-oat text-coffee-cream placeholder:text-coffee-oat/50"
            />
            <button type="submit" className="bg-coffee-oat text-coffee-espresso px-4 py-3 text-sm font-semibold hover:bg-coffee-cream transition-colors uppercase tracking-wider">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-coffee-oat/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-coffee-oat/60">
        <p>&copy; {new Date().getFullYear()} Aura Coffee Roasters. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-coffee-cream">Privacy Policy</a>
          <a href="#" className="hover:text-coffee-cream">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
