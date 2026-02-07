import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 92143 81274",
    href: "tel:+919214381274",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 92143 81274",
    href: "https://wa.me/919214381274?text=Hello%2C%20I%20am%20interested%20in%20your%20catering%20services",
  },
  {
    icon: Mail,
    title: "Email",
    value: "shuklacateringtiffinservices@gmail.com",
    href: "mailto:shuklacateringtiffinservices@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "3D/243, Aawas Vikas Hanshpuram, Naubasta, Kanpur – 208021, UP",
    href: "https://maps.google.com/?q=Naubasta+Kanpur+208021",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    guests: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Enquiry Submitted!",
      description: "We will get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      eventType: "",
      guests: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-saffron font-semibold text-sm uppercase tracking-wider mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Let's Plan Your
            <span className="text-saffron"> Perfect Event</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to create an unforgettable culinary experience? Get in touch
            with us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info & Map */}
          <div>
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={
                    info.icon === MapPin || info.icon === MessageCircle
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 hover:shadow-card hover:border-gold/30 transition-all group"
                >
                  <div className="p-3 bg-saffron/10 rounded-lg group-hover:bg-saffron/20 transition-colors">
                    <info.icon className="w-5 h-5 text-saffron" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50 mb-8">
              <div className="p-3 bg-forest/10 rounded-lg">
                <Clock className="w-5 h-5 text-forest" />
              </div>
              <div>
                <h4 className="font-semibold text-primary text-sm">
                  Business Hours
                </h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Open 7 days a week, 8:00 AM – 10:00 PM
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-card border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.0123456789!2d80.2895!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNaubasta%2C%20Kanpur!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shukla Catering Location"
                className="w-full"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-card border border-border/50 p-6 md:p-8">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">
              Send Us an Enquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="bg-cream border-border focus:border-saffron"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-cream border-border focus:border-saffron"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-cream border-border focus:border-saffron"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="eventType"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full h-10 px-3 rounded-md bg-cream border border-border focus:border-saffron focus:outline-none text-foreground text-sm"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="family">Family Function</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="tiffin">Daily Tiffin</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Expected Guests
                  </label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="Number of guests"
                    className="bg-cream border-border focus:border-saffron"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your event, preferred date, special requirements..."
                  className="bg-cream border-border focus:border-saffron resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gold py-6 text-lg"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Enquiry
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
