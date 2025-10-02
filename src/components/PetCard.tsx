import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin } from "lucide-react";
import { useState } from "react";

interface PetCardProps {
  name: string;
  age: string;
  breed: string;
  location: string;
  status: "available" | "pending" | "adopted";
  image: string;
  type: "dog" | "cat" | "other";
}

const PetCard = ({ name, age, breed, location, status, image, type }: PetCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const statusColors = {
    available: "bg-green-500",
    pending: "bg-yellow-500",
    adopted: "bg-secondary",
  };

  const statusLabels = {
    available: "Available",
    pending: "Pending",
    adopted: "Adopted",
  };

  return (
    <Card
      className="group overflow-hidden rounded-3xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2 border-2 border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square bg-muted">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110 animate-wiggle" : "scale-100"
          }`}
        />
        
        {/* Status Badge */}
        <Badge
          className={`absolute top-4 left-4 ${statusColors[status]} text-white border-0 px-3 py-1 text-sm font-semibold`}
        >
          {statusLabels[status]}
        </Badge>

        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isLiked ? "fill-primary text-primary" : "text-secondary"
            }`}
          />
        </button>

        {/* Paw Icon Animation on Hover */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-primary/10 backdrop-blur-[2px]">
            <span className="text-6xl animate-paw-pop">🐾</span>
          </div>
        )}
      </div>

      <CardContent className="p-5">
        <div className="mb-3">
          <h3 className="text-2xl font-bold text-foreground mb-1">{name}</h3>
          <p className="text-muted-foreground font-medium">
            {breed} • {age}
          </p>
        </div>

        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button
          className="w-full rounded-full py-6 text-base font-semibold transition-all hover:scale-105"
          disabled={status === "adopted"}
        >
          {status === "adopted" ? "Adopted ❤️" : "Meet " + name}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PetCard;