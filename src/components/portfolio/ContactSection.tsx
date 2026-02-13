import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          <a
            href="mailto:kipkemoicollins172@gmail.com"
            className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail size={18} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-foreground">kipkemoicollins172@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+254740676371"
            className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone size={18} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-medium text-foreground">+254 740 676 371</p>
            </div>
          </a>

          <a
            href="https://github.com/C-korir"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Github size={18} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">GitHub</p>
              <p className="text-sm font-medium text-foreground">C-korir</p>
            </div>
          </a>

          <div className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border/50">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin size={18} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm font-medium text-foreground">Nairobi, Kenya</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
