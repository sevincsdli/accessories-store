import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/Button";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [headerRef, headerVisible] = useRevealOnScroll<HTMLDivElement>();
  const [infoRef, infoVisible] = useRevealOnScroll<HTMLDivElement>();
  const [formRef, formVisible] = useRevealOnScroll<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16">
      <div
        ref={headerRef}
        className={`text-center space-y-4 max-w-xl mx-auto transition-all duration-700 ease-out ${
          headerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-brand-accent font-bold">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-light tracking-widest uppercase text-brand-dark">
          Contact Us
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
          Have a question about our collections, custom orders, or shipping? We
          are here to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div
          ref={infoRef}
          className={`lg:col-span-5 bg-brand-light p-8 sm:p-10 space-y-8 border border-brand-beige transition-all duration-700 ease-out ${
            infoVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="space-y-3">
            <h2 className="text-lg font-light tracking-widest uppercase text-brand-dark">
              Aura Flagship Boutique
            </h2>
            <p className="text-xs text-brand-muted font-light leading-relaxed">
              Visit our flagship store to experience our handcrafted pieces in
              person.
            </p>
          </div>

          <div className="space-y-6 text-xs text-brand-dark">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-medium uppercase tracking-wider">Address</p>
                <p className="text-brand-muted font-light mt-0.5">
                  124 Boutique Lane, Fashion District, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-medium uppercase tracking-wider">Phone</p>
                <p className="text-brand-muted font-light mt-0.5">
                  +1 (555) 019-2834
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-medium uppercase tracking-wider">
                  Customer Care
                </p>
                <p className="text-brand-muted font-light mt-0.5">
                  support@accessoriesstore.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-brand-beige/60 pt-6">
              <Clock className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-medium uppercase tracking-wider">
                  Opening Hours
                </p>
                <p className="text-brand-muted font-light mt-0.5">
                  Monday – Friday: 10:00 AM – 7:00 PM
                </p>
                <p className="text-brand-muted font-light">
                  Saturday: 11:00 AM – 5:00 PM
                </p>
                <p className="text-brand-muted font-light">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={formRef}
          className={`lg:col-span-7 space-y-6 transition-all duration-700 ease-out ${
            formVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <div className="space-y-2">
            <h2 className="text-xl font-light uppercase tracking-widest text-brand-dark">
              Send Us a Message
            </h2>
            <p className="text-xs text-brand-muted font-light">
              Fill out the form below and our customer care team will respond
              within 24 hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 bg-brand-light border border-brand-beige text-center space-y-4 animate-in fade-in duration-300">
              <CheckCircle2 className="w-12 h-12 text-brand-accent mx-auto" />
              <h3 className="text-lg font-light uppercase tracking-widest text-brand-dark">
                Thank You!
              </h3>
              <p className="text-xs text-brand-muted font-light max-w-sm mx-auto leading-relaxed">
                Your message has been sent successfully. We will get back to you
                shortly.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
                size="sm"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-medium text-brand-dark">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your Full Name"
                    className="w-full bg-brand-light border border-brand-beige px-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-dark placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-medium text-brand-dark">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full bg-brand-light border border-brand-beige px-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-dark placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider font-medium text-brand-dark">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  placeholder="Inquiry about..."
                  className="w-full bg-brand-light border border-brand-beige px-4 py-3 text-xs text-brand-dark focus:outline-none focus:border-brand-dark placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider font-medium text-brand-dark">
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full bg-brand-light border border-brand-beige p-4 text-xs text-brand-dark focus:outline-none focus:border-brand-dark placeholder:text-gray-400 resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Submit Inquiry
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
