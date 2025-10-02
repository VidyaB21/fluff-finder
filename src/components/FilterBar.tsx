import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dog, Cat, Search } from "lucide-react";
import { useState } from "react";

interface FilterBarProps {
  onFilterChange: (filter: string) => void;
  onSearchChange: (search: string) => void;
}

const FilterBar = ({ onFilterChange, onSearchChange }: FilterBarProps) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <section id="pet-search" className="container mx-auto px-4 py-8">
      <div className="bg-card rounded-3xl shadow-[var(--shadow-soft)] p-6 border-2 border-border">
        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by name, breed, or location..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="pl-12 h-14 text-lg rounded-full border-2 focus-visible:ring-primary"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            onClick={() => handleFilterClick("all")}
            variant={activeFilter === "all" ? "default" : "outline"}
            className="rounded-full px-6 py-5 text-base font-semibold transition-all hover:scale-105"
          >
            All Pets
          </Button>
          
          <Button
            onClick={() => handleFilterClick("dog")}
            variant={activeFilter === "dog" ? "default" : "outline"}
            className="rounded-full px-6 py-5 text-base font-semibold transition-all hover:scale-105"
          >
            <Dog className="mr-2 h-5 w-5" />
            Dogs
          </Button>
          
          <Button
            onClick={() => handleFilterClick("cat")}
            variant={activeFilter === "cat" ? "default" : "outline"}
            className="rounded-full px-6 py-5 text-base font-semibold transition-all hover:scale-105"
          >
            <Cat className="mr-2 h-5 w-5" />
            Cats
          </Button>
          
          <Button
            onClick={() => handleFilterClick("other")}
            variant={activeFilter === "other" ? "default" : "outline"}
            className="rounded-full px-6 py-5 text-base font-semibold transition-all hover:scale-105"
          >
            Others
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;