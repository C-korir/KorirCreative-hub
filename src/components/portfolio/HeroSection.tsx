import { motion } from "framer-motion";
import { Github, Mail, Phone, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-foreground">Collins</span>{" "}
            <span className="text-gradient">Korir</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Hi, I'm Collins — a passionate developer and project manager ready to
            bring your ideas to life. I craft scalable web & mobile applications,
            streamline workflows, and turn complex challenges into elegant solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <a
            href="https://github.com/C-korir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-glow transition-all duration-300"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="mailto:kipkemoicollins172@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/40 text-foreground hover:bg-primary/10 transition-all duration-300"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 text-muted-foreground text-sm"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-primary" /> Nairobi, Kenya
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={14} className="text-primary" /> +254740676371
          </span>
          <span className="flex items-center gap-1.5">
            <Mail size={14} className="text-primary" /> kipkemoicollins172@gmail.com
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
