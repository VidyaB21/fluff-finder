import { Button } from "@/components/ui/button";
import { Heart, Search } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSearch = () => {
    document.getElementById("pet-search")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <div className="inline-block mb-4">
          <Heart className="w-16 h-16 text-white fill-white animate-pulse" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Find Your Furry Friend
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md font-light">
          Connect with adorable pets looking for their forever homes. 
          Every adoption changes two lives. 🐾
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={scrollToSearch}
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <Search className="mr-2 h-5 w-5" />
            Browse Pets
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="bg-white/10 text-white border-2 border-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-105"
          >
            <Heart className="mr-2 h-5 w-5" />
            Share Your Story
          </Button>
        </div>
      </div>

      {/* Decorative paw prints */}
      <div className="absolute bottom-10 left-10 text-white/20 text-6xl animate-bounce">
        🐾
      </div>
      <div className="absolute top-20 right-10 text-white/20 text-4xl animate-pulse">
        🐾
      </div>
    </section>
  );
};

export default Hero;