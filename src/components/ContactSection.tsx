import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-pink relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-card/60 backdrop-blur-sm text-sm font-medium text-foreground/80 mb-4">
            Get In Touch
          </span>
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-foreground mb-4">
            Book Your Transformation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to enhance your beauty? Contact us today to schedule your appointment 
            or learn more about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info Card */}
          <div className="glass-card p-8">
            <h3 className="font-script text-3xl text-foreground mb-6">Contact Info</h3>
            
            <div className="space-y-4">
              <a href="tel:7003306599" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>7003306599</span>
              </a>
              
              <a href="mailto:senmou51@gmail.com" className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>senmou51@gmail.com</span>
              </a>
              
              <div className="flex items-start gap-4 text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p>40, Aurobinda Sarani</p>
                  <p>Kolkata - 700 005</p>
                  <p className="text-sm text-muted-foreground">(Near Sovabazar Anjali Jewellers)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="glass-card p-8">
            <h3 className="font-script text-3xl text-foreground mb-6">Follow Us</h3>
            
            <div className="space-y-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100063779682443" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Facebook className="w-4 h-4 text-primary" />
                </div>
                <span>Shadows & Shine by Makeup Artist Susmita</span>
              </a>
              
              <a 
                href="https://instagram.com/Susmita3446" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Instagram className="w-4 h-4 text-primary" />
                </div>
                <span>@Susmita3446</span>
              </a>
              
              <div className="flex items-start gap-4 text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p className="text-sm text-muted-foreground">Mon - Sat: 10AM - 8PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="glass-card p-8 bg-gradient-royal text-primary-foreground md:col-span-2 lg:col-span-1">
            <h3 className="font-script text-3xl mb-4">Ready to Shine?</h3>
            <p className="mb-6 text-primary-foreground/90">
              Book your appointment today and let us help you discover your most beautiful self.
            </p>
            
            <div className="space-y-3">
              <Button variant="elegant" className="w-full bg-card/20 border-primary-foreground/30 text-primary-foreground hover:bg-card/30">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
              <Button variant="elegant" className="w-full bg-card/20 border-primary-foreground/30 text-primary-foreground hover:bg-card/30">
                <Mail className="w-4 h-4" />
                Send Message
              </Button>
            </div>

            <p className="mt-6 font-script text-2xl text-center text-primary-foreground/90">
              ✨ Book your transformation today ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
