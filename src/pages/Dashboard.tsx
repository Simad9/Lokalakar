import { Search, SlidersHorizontal, Bell } from "lucide-react";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import FoodCard from "@/components/FoodCard";
import FilterSidebar, { FilterState } from "@/components/FilterSidebar";
import DetailUMKM from "@/components/DetailUMKM";
import { Input } from "@/components/ui/input";

interface UMKMDetail {
  id: string;
  title: string;
  image: string;
  badge?: string;
  location: string;
  hours: string;
  priceRange: string;
  rating: number;
  maxRating: number;
  description?: string;
  menuImages: string[];
  reviews: Array<{
    id: string;
    name: string;
    rating: number;
    comment: string;
    avatar: string;
  }>;
}

const Dashboard = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedUMKM, setSelectedUMKM] = useState<UMKMDetail | null>(null);

  // Mock data for food items
  const foodItems = Array(6).fill({
    id: "sate-hidden-gem",
    title: "Sate Hidden Gem",
    location: "Jln. Ahmad Yani, Sleman, Yogyakarta",
    priceRange: "Rp. 5.000 - 25.0000",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
    badge: "Hidden Gem",
  });

  const umkmDetailData: UMKMDetail = {
    id: "sate-hidden-gem",
    title: "Sate Hidden Gem",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&h=400&fit=crop",
    badge: "Hidden Gem",
    location: "Jln. Ahmad Yani, Sleman, Yogyakarta",
    hours: "09:00 - 21:00 WIB",
    priceRange: "Rp. 5.000 - 25.0000",
    rating: 4.8,
    maxRating: 5.0,
    description: "Sate Hidden Gem adalah tempat yang menyajikan sate berkualitas tinggi dengan cita rasa autentik.",
    menuImages: [
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop",
    ],
    reviews: [
      {
        id: "1",
        name: "Hiro",
        rating: 5,
        comment: "Mantap, enak menu disini, satenya banyak",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      },
      {
        id: "2",
        name: "Budiyanto",
        rating: 4,
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel euismod nisl, sodales laoreet erat. Integer...",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      },
      {
        id: "3",
        name: "Sukijem Ahmad",
        rating: 4,
        comment: "Morbi volutpat dui at augue tincidunt, nec consequat neque sodales. Aliquam imperdiet risus in velit rhonc...",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      },
    ],
  };

  const handleApplyFilter = (newFilters: FilterState) => {
    setFilters(newFilters);
    console.log("Filters applied:", newFilters);
  };

  const handleViewDetail = (foodItem: (typeof foodItems)[0]) => {
    setSelectedUMKM(umkmDetailData);
    setIsDetailOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1">
        {/* Header */}
        <header className="bg-card border-b border-border sticky top-0 z-10">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-card-foreground">
                Selamat Datang, Jhon Doe
              </h1>
              <div className="flex items-center gap-4">
                <button className="relative p-2 hover:bg-muted rounded-lg transition-colors">
                  <Bell className="h-5 w-5 text-foreground" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full"></span>
                </button>
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                  JD
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-card-foreground mb-4">
              UMKM Kuliner Andalan Kami !!!
            </h2>

            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Cari Nama UMKM"
                  className="pl-10 bg-background"
                />
              </div>
              <button className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background hover:bg-accent transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsFilterOpen(true)}
                className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background hover:bg-accent transition-colors"
              >
                <SlidersHorizontal className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodItems.map((item, index) => (
              <FoodCard
                key={index}
                {...item}
                onViewDetail={() => handleViewDetail(item)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Filter Sidebar */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilter={handleApplyFilter}
      />

      {/* Detail UMKM Sidebar */}
      <DetailUMKM
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        data={selectedUMKM}
      />
    </div>
  );
};

export default Dashboard;
