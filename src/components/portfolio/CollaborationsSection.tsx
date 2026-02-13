import { motion } from "framer-motion";
import { Users, Github, Globe } from "lucide-react";

const collaborations = [
  {
    title: "Nelfix Technologies",
    role: "Project Manager",
    description: "Led cross-functional teams in software development, managing project lifecycle from ideation to deployment.",
    platform: "GitHub",
    icon: Github,
  },
  {
    title: "Data Science Club — Zetech University",
    role: "Member & Contributor",
    description: "Collaborated on model training projects and data science challenges within the university's club.",
    platform: "Academic",
    icon: Users,
  },
  {
    title: "Content Expert Agencies",
    role: "IT Support & Web Developer",
    description: "Partnered on scalable web applications and brand identity projects across multiple teams.",
    platform: "Web",
    icon: Globe,
  },
];

const CollaborationsSection = () => {
  return (
    <section id="collaborations" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Teamwork</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Collaborations</h2>
          <p className="text-muted-foreground mt-2">Projects done in partnerships across various platforms.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {collaborations.map((collab, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <collab.icon size={22} className="text-primary-foreground" />
              </div>
              <span className="text-xs font-mono text-primary">{collab.platform}</span>
              <h3 className="text-lg font-bold text-foreground mt-1">{collab.title}</h3>
              <p className="text-sm text-accent mb-2">{collab.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{collab.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSection;
