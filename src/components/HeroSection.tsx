import { Button } from "@/components/ui/button";
import { Sparkles } from "@/components/Sparkles";
import { Sparkle, Heart } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-pink pt-20">
      <Sparkles />
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-gold/30 mb-8 animate-fade-up">
            <Sparkle className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-foreground/80">Premium Beauty Studio in Kolkata</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground mb-6 animate-fade-up delay-100">
            Shadows & Shine
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 tracking-widest uppercase animate-fade-up delay-200">
            Studio & Academy
          </p>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-foreground/80 mb-8 animate-fade-up delay-300">
            Because beauty shouldn't fade
          </p>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-muted-foreground mb-10 animate-fade-up delay-400">
            We specialize in advanced semi-permanent treatments designed to softly enhance 
            your natural features and give you long-lasting confidence. From bridal makeup 
            to nail artistry — let your beauty speak before words.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-500">
            <Button variant="gold" size="lg">
              <Heart className="w-5 h-5" />
              Book Your Transformation
            </Button>
            <Button variant="elegant" size="lg">
              Explore Services
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up delay-600">
            <div className="text-center">
              <p className="font-script text-4xl text-gold">500+</p>
              <p className="text-sm text-muted-foreground">Happy Brides</p>
            </div>
            <div className="text-center">
              <p className="font-script text-4xl text-gold">5+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="font-script text-4xl text-gold">100%</p>
              <p className="text-sm text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
