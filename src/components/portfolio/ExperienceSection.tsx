import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Project Manager",
    company: "Nelfix Technologies",
    period: "Oct 2025 - Present",
    icon: Briefcase,
    points: [
      "Coordinated project tasks, ensuring alignment with project objectives.",
      "Conducted comprehensive project analyses, identifying and rectifying design discrepancies.",
      "Oversaw quality control for project documentation and software prototypes.",
    ],
  },
  {
    title: "IT Support",
    company: "Content Expert Agencies",
    period: "May 2025 - Oct 2025",
    icon: Briefcase,
    points: [
      "Provided technical assistance and infrastructure maintenance.",
      "Developed brand identities, marketing collateral, and digital illustrations.",
      "Built scalable and secure web applications focused on performance.",
    ],
  },
  {
    title: "BSc Information Technology",
    company: "Zetech University",
    period: "Sep 2022 - April 2025",
    icon: GraduationCap,
    points: [
      "Coordinated tasks within the Data Science Club.",
      "Assisted in solving challenges regarding model training.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Career Path</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience & Education</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                <div className="absolute left-3 md:left-5 top-1 w-7 h-7 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <exp.icon size={14} className="text-primary" />
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:border-primary/30 transition-colors duration-300">
                  <span className="text-primary font-mono text-xs">{exp.period}</span>
                  <h3 className="text-xl font-bold text-foreground mt-1">{exp.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{exp.company}</p>
                  <ul className="space-y-1.5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
