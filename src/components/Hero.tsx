import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-gradient-bg" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float animation-delay-300" />

      <div className="section-container relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up opacity-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 animate-fade-up opacity-0 animation-delay-100">
            Hi, I'm{" "}
            <span className="gradient-text">Ishmael</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-6 animate-fade-up opacity-0 animation-delay-200">
            Frontend Web Developer | Problem Solver
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up opacity-0 animation-delay-300">
            I build responsive, user-focused websites and web applications using
            HTML, CSS, and JavaScript. Passionate about creating digital
            experiences that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 animation-delay-400">
            <button onClick={scrollToProjects} className="btn-primary">
              View My Work
              <ArrowDown className="ml-2 w-4 h-4" />
            </button>
            <button onClick={scrollToContact} className="btn-secondary">
              Contact Me
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
