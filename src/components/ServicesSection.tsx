import { Sparkle, Eye, Scissors, Heart, Star, Palette } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Lip Blush",
    tagline: "Speak without saying a word",
    description: "Soft, hydrated, naturally tinted lips that look beautifully colored every day. Perfect for uneven tone, pale lips, dark lips, and shape correction.",
    benefits: ["Long-lasting color", "Zero smudging", "Natural healed finish"],
  },
  {
    icon: Eye,
    title: "Nano Brows",
    tagline: "Brows that raise the beauty standard",
    description: "Ultra-realistic, natural hair-like strokes for fuller, cleaner, symmetric brows. Wake up with perfect brows every day.",
    benefits: ["Fuller natural look", "Realistic hair-stroke effect", "Enhances face symmetry"],
  },
  {
    icon: Star,
    title: "Eyelash Lifting",
    tagline: "Lift. Curl. Style. Slay.",
    description: "No extensions, no mascara — just your lashes, upgraded! Natural lift that lasts up to 8–10 weeks.",
    benefits: ["Natural volume and curl", "8–10 week longevity", "Waterproof & safe"],
  },
  {
    icon: Sparkle,
    title: "Bridal Makeup",
    tagline: "Your perfect day, your perfect look",
    description: "Exquisite bridal transformations for your special day. Traditional Bengali, modern glam, or fusion — we create magic.",
    benefits: ["Customized looks", "Long-lasting formula", "Photo-ready finish"],
  },
  {
    icon: Palette,
    title: "Nail Art",
    tagline: "Art at your fingertips",
    description: "From elegant French tips to intricate 3D nail art designs. Express your personality through stunning nail creations.",
    benefits: ["Premium quality products", "Unique designs", "Long-lasting finish"],
  },
  {
    icon: Scissors,
    title: "Semi-Permanent Makeup",
    tagline: "Beauty that lasts",
    description: "Advanced SPMU techniques including ombre brows, eyebrow lamination, and eyebrow tinting for effortless everyday beauty.",
    benefits: ["Time-saving", "Sweat & water proof", "Natural enhancement"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary text-sm font-medium text-secondary-foreground mb-4">
            Our Services
          </span>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-foreground mb-4">
            Permanent Beauty Enhancements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our range of premium beauty services designed to enhance your natural beauty 
            and give you confidence that lasts.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-gradient-royal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-script text-3xl text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-gold font-medium mb-4 italic">{service.tagline}</p>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Benefits */}
              <ul className="space-y-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Promo Line */}
        <div className="mt-16 text-center">
          <p className="font-script text-3xl text-gold">
            Let your beauty speak before words ✨
          </p>
        </div>
      </div>
    </section>
  );
};
