import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
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
