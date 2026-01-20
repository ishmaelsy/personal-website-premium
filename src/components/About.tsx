import { Code, Lightbulb, Globe, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Technical Foundation",
    description: "Strong expertise in HTML, CSS, and JavaScript fundamentals",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Passionate about finding creative solutions to real-world challenges",
  },
  {
    icon: Globe,
    title: "Global Mindset",
    description: "Based in Ghana, building for a global audience",
  },
  {
    icon: Rocket,
    title: "Entrepreneurial Spirit",
    description: "Driven to create impactful digital products and experiences",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mt-2">
            Get to Know Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate frontend web developer based in{" "}
              <span className="text-foreground font-medium">Ghana</span>, currently
              pursuing my studies while building my skills in web development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech started with curiosity about how websites work,
              which quickly evolved into a deep passion for creating beautiful,
              functional web experiences. I believe in writing clean,
              maintainable code and continuously learning new technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I'm driven by an{" "}
              <span className="text-foreground font-medium">
                entrepreneurial mindset
              </span>
              —always looking for opportunities to solve real problems through
              technology. I'm excited to collaborate on projects that make a
              positive impact.
            </p>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-heading font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold gradient-text">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">Dedication</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-elevated p-6 group cursor-default"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <item.icon size={24} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
