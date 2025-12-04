import { Award, Users, Clock, Heart } from "lucide-react";
import aboutImage from "@/assets/about-image.jpeg";

const highlights = [
  { icon: Award, label: "Certified Cosmetologist", value: "Professional" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Clock, label: "Years Experience", value: "5+" },
  { icon: Heart, label: "Satisfaction Rate", value: "100%" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary text-sm font-medium text-secondary-foreground mb-4">
              About Us
            </span>
            <h2 className="font-script text-5xl sm:text-6xl text-foreground mb-6">
              Meet Susmita Sen Roy
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Welcome to <span className="text-primary font-semibold">Shadows & Shine Studio & Academy</span> — 
              where beauty meets artistry. As a certified cosmetologist and makeup artist, Susmita has been 
              transforming faces and lives for over 5 years in Kolkata.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Specializing in bridal makeup, semi-permanent cosmetics, eyelash extensions, and nail art, 
              we believe every person deserves to feel confident and beautiful. Our studio is not just about 
              makeup — it's about enhancing your natural beauty and creating lasting impressions.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item.label} className="glass-card p-4 text-center">
                  <item.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="font-script text-2xl text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Logo/Image */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute inset-0 border-2 border-gold/30 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl transform -rotate-3" />
              
              {/* Main image area */}
              <div className="relative glass-card p-8 rounded-3xl gold-glow">
                <img 
                  src={aboutImage} 
                  alt="Shadows & Shine Studio Services" 
                  className="w-full h-auto rounded-2xl object-cover"
                />
                
                {/* Quote card */}
                <div className="absolute -bottom-6 -right-6 glass-card p-4 max-w-xs">
                  <p className="font-script text-xl text-foreground italic">
                    "Because you deserve to shine"
                  </p>
                  <p className="text-sm text-gold mt-1">— Susmita Sen Roy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
