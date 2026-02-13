import { motion } from "framer-motion";
import { Github, ExternalLink, Lock } from "lucide-react";

const projects = [
  {
    title: "Nelfix Technologies Platform",
    description: "Project management and quality control platform for software prototypes and documentation.",
    tags: ["React.js", "Project Management", "Web App"],
    isPrivate: false,
    github: "https://github.com/C-korir",
  },
  {
    title: "Brand Identity System",
    description: "Digital branding and marketing collateral system built for Content Expert Agencies.",
    tags: ["Design", "Adobe Illustrator", "Canva"],
    isPrivate: true,
  },
  {
    title: "Data Science Models",
    description: "ML model training and testing pipelines for solving real-world challenges using Python.",
    tags: ["Python", "Anaconda", "Google Colab"],
    isPrivate: false,
    github: "https://github.com/C-korir",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Personal Projects</h2>
          <p className="text-muted-foreground mt-2">Showcasing both public and private repositories.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-xl p-6 shadow-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Github size={20} className="text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  {project.isPrivate ? (
                    <Lock size={16} className="text-muted-foreground" />
                  ) : project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  ) : null}
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-primary/70 bg-primary/5 px-2 py-0.5 rounded">
                    {tag}
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

export default ProjectsSection;
