import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "PHP", "HTML/CSS", "React.js", "JavaScript", "Android"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Anaconda", "Google Colab", "Visual Studio", "Canva", "Adobe Illustrator", "GitHub", "Supabase", "MySQL", "Firebase", "IBM SPSS", "Trello", "Excel", "Wireshark", "Android Studio"],
  },
  {
    title: "Data & AI",
    skills: ["Data Preparation", "Model Training", "Model Testing", "Data Analysis"],
  },
  {
    title: "Soft Skills",
    skills: ["Project Management", "Communication", "Adaptability", "Time Management", "Team Collaboration"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Technologies</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border/50"
            >
              <h3 className="text-lg font-bold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
