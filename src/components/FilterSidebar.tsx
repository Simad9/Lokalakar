import { X } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilter: (filters: FilterState) => void;
}

export interface FilterState {
  sortBy: "newest" | "oldest";
  tags: string[];
  foodType: string[];
  ratings: string[];
  other: string[];
}

const FilterSidebar = ({ isOpen, onClose, onApplyFilter }: FilterSidebarProps) => {
  const [filters, setFilters] = useState<FilterState>({
    sortBy: "newest",
    tags: [],
    foodType: [],
    ratings: [],
    other: [],
  });

  const toggleTag = (tag: string) => {
    setFilters((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const toggleFoodType = (type: string) => {
    setFilters((prev) => ({
      ...prev,
      foodType: prev.foodType.includes(type)
        ? prev.foodType.filter((t) => t !== type)
        : [...prev.foodType, type],
    }));
  };

  const toggleRating = (rating: string) => {
    setFilters((prev) => ({
      ...prev,
      ratings: prev.ratings.includes(rating)
        ? prev.ratings.filter((r) => r !== rating)
        : [...prev.ratings, rating],
    }));
  };

  const toggleOther = (item: string) => {
    setFilters((prev) => ({
      ...prev,
      other: prev.other.includes(item)
        ? prev.other.filter((o) => o !== item)
        : [...prev.other, item],
    }));
  };

  const handleApply = () => {
    onApplyFilter(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      sortBy: "newest",
      tags: [],
      foodType: [],
      ratings: [],
      other: [],
    });
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Filter Sidebar */}
      <div
        className={`fixed right-0 top-0 h-screen w-80 bg-background border-l border-border overflow-y-auto z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">Filter UMKM</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Urutkan */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Urutkan</h3>
            <button className="w-full px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors">
              Terdekat
            </button>
          </div>

          {/* Berdasarkan Tag */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Berdasarkan Tag</h3>
            <div className="space-y-3">
              {["Harga Mahasiswa", "Makanan Sehat", "Hidden Gem"].map((tag) => (
                <div key={tag} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={`tag-${tag}`}
                    name="tags"
                    checked={filters.tags.includes(tag)}
                    onChange={() => toggleTag(tag)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <Label
                    htmlFor={`tag-${tag}`}
                    className="text-sm text-foreground cursor-pointer"
                  >
                    {tag}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Jenis Makanan */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Jenis Makanan</h3>
            <div className="space-y-3">
              {["Berkuah", "Makanan Berat", "Jajanan"].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={`food-${type}`}
                    name="foodType"
                    checked={filters.foodType.includes(type)}
                    onChange={() => toggleFoodType(type)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <Label
                    htmlFor={`food-${type}`}
                    className="text-sm text-foreground cursor-pointer"
                  >
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Rating</h3>
            <div className="flex gap-2 flex-wrap">
              {["Rating 4.0+", "Rating 4.5+"].map((rating) => (
                <button
                  key={rating}
                  onClick={() => toggleRating(rating)}
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    filters.ratings.includes(rating)
                      ? "bg-primary text-primary-foreground"
                      : "border border-input bg-background hover:bg-accent"
                  }`}
                >
                  {rating}
                </button>
              ))}
            </div>
          </div>

          {/* Lainnya */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Lainnya</h3>
            <button
              onClick={() => toggleOther("Buka Sekarang")}
              className={`w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                filters.other.includes("Buka Sekarang")
                  ? "bg-primary text-primary-foreground"
                  : "border border-input bg-background hover:bg-accent"
              }`}
            >
              Buka Sekarang
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-background border-t border-border px-6 py-4 flex gap-3">
          <button
            onClick={handleReset}
            className="flex-1 px-4 py-2 rounded-md border border-input bg-background hover:bg-accent text-foreground font-medium transition-colors"
          >
            Hapus Filter
          </button>
          <button
            onClick={handleApply}
            className="flex-1 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors"
          >
            Terapkan
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
