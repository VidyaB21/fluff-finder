import { useState } from "react";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import PetCard from "@/components/PetCard";
import CommunityFeed from "@/components/CommunityFeed";
import PawTrail from "@/components/PawTrail";

import dog1 from "@/assets/dog1.jpg";
import dog2 from "@/assets/dog2.jpg";
import dog3 from "@/assets/dog3.jpg";
import cat1 from "@/assets/cat1.jpg";
import cat2 from "@/assets/cat2.jpg";
import cat3 from "@/assets/cat3.jpg";

interface Pet {
  id: number;
  name: string;
  age: string;
  breed: string;
  location: string;
  status: "available" | "pending" | "adopted";
  image: string;
  type: "dog" | "cat" | "other";
}

const Index = () => {
  const allPets: Pet[] = [
    {
      id: 1,
      name: "Buddy",
      age: "2 years",
      breed: "Golden Retriever",
      location: "San Francisco, CA",
      status: "available",
      image: dog1,
      type: "dog",
    },
    {
      id: 2,
      name: "Whiskers",
      age: "1 year",
      breed: "Orange Tabby",
      location: "Los Angeles, CA",
      status: "available",
      image: cat1,
      type: "cat",
    },
    {
      id: 3,
      name: "Bailey",
      age: "3 years",
      breed: "Beagle",
      location: "Seattle, WA",
      status: "pending",
      image: dog2,
      type: "dog",
    },
    {
      id: 4,
      name: "Mittens",
      age: "6 months",
      breed: "Gray & White Mix",
      location: "Portland, OR",
      status: "available",
      image: cat2,
      type: "cat",
    },
    {
      id: 5,
      name: "Storm",
      age: "1 year",
      breed: "Siberian Husky",
      location: "Denver, CO",
      status: "available",
      image: dog3,
      type: "dog",
    },
    {
      id: 6,
      name: "Shadow",
      age: "2 years",
      breed: "Domestic Shorthair",
      location: "Austin, TX",
      status: "adopted",
      image: cat3,
      type: "cat",
    },
  ];

  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredPets = allPets.filter((pet) => {
    const matchesFilter = filter === "all" || pet.type === filter;
    const matchesSearch = searchTerm === "" || 
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <PawTrail />
      
      <Hero />
      
      <FilterBar 
        onFilterChange={setFilter} 
        onSearchChange={setSearchTerm}
      />

      {/* Pet Cards Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Your New Best Friend
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {filteredPets.length} adorable {filter === "all" ? "pets" : filter + "s"} waiting for you
          </p>
        </div>

        {filteredPets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPets.map((pet, index) => (
              <div 
                key={pet.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PetCard {...pet} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-2xl text-muted-foreground">
              No pets found matching your search. Try different filters!
            </p>
          </div>
        )}
      </section>

      <CommunityFeed />

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">PawMatch 🐾</h3>
          <p className="text-lg text-white/90 mb-6">
            Every adoption saves a life. Find your perfect companion today.
          </p>
          <p className="text-sm text-white/70">
            © 2025 PawMatch. Made with ❤️ for pets and their humans.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;