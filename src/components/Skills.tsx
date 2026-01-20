import { Code2, Palette, Smartphone, GitBranch, Terminal, Layout } from "lucide-react";

const skills = [
  {
    name: "HTML5",
    icon: Code2,
    level: 90,
    color: "bg-orange-500",
  },
  {
    name: "CSS3",
    icon: Palette,
    level: 85,
    color: "bg-blue-500",
  },
  {
    name: "JavaScript",
    icon: Terminal,
    level: 80,
    color: "bg-yellow-500",
  },
  {
    name: "Responsive Design",
    icon: Smartphone,
    level: 85,
    color: "bg-green-500",
  },
  {
    name: "Git & GitHub",
    icon: GitBranch,
    level: 75,
    color: "bg-purple-500",
  },
  {
    name: "UI/UX Basics",
    icon: Layout,
    level: 70,
    color: "bg-pink-500",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mt-2">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="card-elevated p-6 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">Also familiar with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Flexbox", "CSS Grid", "DOM Manipulation", "REST APIs", "Figma Basics", "Tailwind CSS"].map(
              (tag) => (
                <span key={tag} className="skill-tag">
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
