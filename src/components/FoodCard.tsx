import { MapPin, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FoodCardProps {
  title: string;
  location: string;
  priceRange: string;
  image: string;
  badge?: string;
  onViewDetail?: () => void;
}

const FoodCard = ({ title, location, priceRange, image, badge, onViewDetail }: FoodCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {badge && (
          <span className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-card-foreground mb-3">{title}</h3>
        
        <div className="flex items-start gap-2 text-sm text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span className="line-clamp-1">{location}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Coins className="h-4 w-4 flex-shrink-0" />
          <span>{priceRange}</span>
        </div>
        
        <Button
          onClick={onViewDetail}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Lihat Detail
        </Button>
      </div>
    </div>
  );
};

export default FoodCard;
