import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Please fill all fields",
        description: "Name, phone and message are required.",
        variant: "destructive",
      });
      return;
    }

    const whatsappNumber = "917003306599";
    const text = `Hi! I'm ${formData.name.trim()}%0APhone: ${formData.phone.trim()}%0A%0A${encodeURIComponent(
      formData.message.trim()
    )}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");

    setFormData({ name: "", phone: "", message: "" });
    toast({
      title: "Opening WhatsApp",
      description: "Your message is ready to send!",
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-pink relative overflow-hidden"
    >
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
            Ready to enhance your beauty? Contact us today to schedule your
            appointment or learn more about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* WhatsApp Contact Form */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-script text-3xl text-foreground">
                  Message Us
                </h3>
                <p className="text-sm text-muted-foreground">Via WhatsApp</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-card/50 border-border/50 focus:border-primary"
                  maxLength={100}
                />
              </div>
              <div>
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-card/50 border-border/50 focus:border-primary"
                  maxLength={20}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message (e.g., I'd like to book an appointment for...)"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-card/50 border-border/50 focus:border-primary min-h-[120px]"
                  maxLength={500}
                />
              </div>
              <Button type="submit" variant="gold" className="w-full">
                <Send className="w-4 h-4" />
                Send via WhatsApp
              </Button>
            </form>
          </div>

          {/* Map */}
          <div className="glass-card p-4 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.566404138214!2d88.3664534!3d22.595314799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277fe0f386c0f%3A0xec7b1ccd0de3ee67!2sShadows%20%26shine%20studio%20%26%20Academy!5e0!3m2!1sen!2sin!4v1764843864828!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px", borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shadows & Shine Studio Location"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info Card */}
          <div className="glass-card p-8">
            <h3 className="font-script text-3xl text-foreground mb-6">
              Contact Info
            </h3>

            <div className="space-y-4">
              <a
                href="tel:7003306599"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>7003306599</span>
              </a>

              <a
                href="mailto:senmou51@gmail.com"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
              >
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
                  <p className="text-sm text-muted-foreground">
                    (Near Sovabazar Anjali Jewellers)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="glass-card p-8">
            <h3 className="font-script text-3xl text-foreground mb-6">
              Follow Us
            </h3>

            <div className="space-y-4">
              <a
                href="https://www.facebook.com/people/Shadows-shine-by-Makeup-Artist-Susmita/61559349599120/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
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
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <Instagram className="w-4 h-4 text-primary" />
                </div>
                <span>Cosmetologist Susmita Sen</span>
              </a>

              <div className="flex items-start gap-4 text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Working Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Mon - Sat: 10AM - 8PM
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="glass-card p-8 bg-gradient-royal text-primary-foreground md:col-span-2 lg:col-span-1">
            <h3 className="font-script text-3xl mb-4">Ready to Shine?</h3>
            <p className="mb-6 text-primary-foreground/90">
              Book your appointment today and let us help you discover your most
              beautiful self.
            </p>

            <div className="space-y-3">
              <Button
                variant="elegant"
                className="w-full bg-card/20 border-primary-foreground/30 text-primary-foreground hover:bg-card/30"
                onClick={() =>
                  window.open("https://wa.me/917003306599", "_blank")
                }
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </Button>
              <Button
                variant="elegant"
                className="w-full bg-card/20 border-primary-foreground/30 text-primary-foreground hover:bg-card/30"
                onClick={() => (window.location.href = "tel:7003306599")}
              >
                <Phone className="w-4 h-4" />
                Call Now
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
