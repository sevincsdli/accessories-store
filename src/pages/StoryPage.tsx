import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

export const StoryPage = () => {
  const [heroRef, heroVisible] = useRevealOnScroll<HTMLDivElement>();
  const [storyRef, storyVisible] = useRevealOnScroll<HTMLDivElement>();
  const [processRef, processVisible] = useRevealOnScroll<HTMLDivElement>();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-20">
      {/* Hero Header */}
      <div
        ref={heroRef}
        className={`text-center space-y-4 max-w-2xl mx-auto transition-all duration-700 ease-out ${
          heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-brand-accent font-bold">
          Our Essence
        </span>
        <h1 className="text-3xl sm:text-5xl font-light tracking-widest uppercase text-brand-dark">
          Crafted with Passion
        </h1>
        <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
          Founded on the principle of understated luxury, ACCESSORIES STORE
          creates timeless pieces designed to complement your individuality
          every day.
        </p>
      </div>

      {/* Grid Section 1 */}
      <div
        ref={storyRef}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out ${
          storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="aspect-4/5 bg-brand-light overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000"
            alt="Handcrafting Process"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <span className="text-[10px] tracking-[0.3em] uppercase text-brand-accent font-bold">
            The Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-light tracking-widest uppercase text-brand-dark">
            Simplicity Meets Perfection
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
            We believe that true beauty lies in clean lines, premium materials,
            and meticulous craftsmanship. Every piece in our collection
            undergoes a rigorous design and finishing process to ensure it
            stands the test of time.
          </p>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
            From ethically sourced freshwater pearls to 18k gold vermeil
            finishes, sustainability and quality guide every step of our
            journey.
          </p>
        </div>
      </div>

      {/* Design Process Steps */}
      <div
        ref={processRef}
        className={`bg-brand-light p-12 text-center space-y-10 transition-all duration-700 ease-out ${
          processVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <div className="space-y-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-brand-accent font-bold">
            Methodology
          </span>
          <h2 className="text-2xl font-light tracking-widest uppercase text-brand-dark">
            Our Design Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 p-6 bg-white shadow-xs">
            <span className="text-2xl font-serif italic text-brand-accent">
              01
            </span>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-dark">
              Conceptual Sketching
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Inspiration begins with organic forms, architecture, and
              contemporary minimalism.
            </p>
          </div>
          <div className="space-y-3 p-6 bg-white shadow-xs">
            <span className="text-2xl font-serif italic text-brand-accent">
              02
            </span>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-dark">
              Material Selection
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              We hand-select hypoallergenic metals, 18k gold coatings, and
              natural cultured pearls.
            </p>
          </div>
          <div className="space-y-3 p-6 bg-white shadow-xs">
            <span className="text-2xl font-serif italic text-brand-accent">
              03
            </span>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-dark">
              Hand Finishing
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Master artisans polish and inspect every item before it reaches
              your jewelry box.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
