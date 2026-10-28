import { Button } from "../../../components/ui/Button";
import storyImage from "../../../assets/necklace.avif";

export const BrandStory = () => {
  return (
    <section className="py-20 border-t border-brand-beige/40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-brand-light shadow-sm transition-shadow duration-300 hover:shadow-xl">
          <img
            src={storyImage}
            alt="Artisan Jewelry Crafting"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="space-y-6 max-w-xl">
          <span className="text-[10px] tracking-[0.3em] uppercase text-brand-accent font-bold">
            Our Story
          </span>

          <h2 className="text-2xl sm:text-4xl font-light tracking-widest uppercase text-brand-dark leading-snug">
            Timeless Elegance and Craftsmanship
          </h2>

          <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
            A modern jewelry brand that combines elegance and simplicity in
            every detail. Our collections are crafted using only premium-quality
            materials.
          </p>

          <div className="pt-2">
            <Button variant="outline" size="md">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
