import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-xl font-bold">The movie</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Discover the finest selection of films and TV shows, curated for true cinema enthusiasts.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Action</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Comedy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Drama</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Horror</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sci-Fi</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Thriller</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/new-releases" className="text-muted-foreground hover:text-foreground transition-colors">New Releases</Link></li>
              <li><Link to="/movies" className="text-muted-foreground hover:text-foreground transition-colors">Movies</Link></li>
              <li><Link to="/tv-shows" className="text-muted-foreground hover:text-foreground transition-colors">TV Shows</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Coming Soon</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Watch List</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Account</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} The movie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
