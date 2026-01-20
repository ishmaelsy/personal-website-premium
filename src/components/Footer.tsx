import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50 bg-muted/20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2026 Ishmael SY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
