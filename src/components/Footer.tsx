import logo from "@/assets/logo.png";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-wine text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Info */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="Shadows & Shine"
              className="h-16 w-16 object-contain rounded-full bg-card/10 p-1"
            />
            <div>
              <h3 className="font-script text-2xl">Shadows & Shine</h3>
              <p className="text-sm text-primary-foreground/70">
                Studio & Academy
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Shadows & Shine Studio & Academy
            </p>
            <p className="text-xs text-primary-foreground/50 flex items-center justify-center gap-1 mt-1">
              Developed & Maintained by
              <span className="text-primary text-sm">
                Digital Exposure Online Services
              </span>
            </p>
          </div>

          {/* Tagline */}
          <p className="font-script text-xl text-gold">
            Let your beauty shine ✨
          </p>
        </div>
      </div>
    </footer>
  );
};
