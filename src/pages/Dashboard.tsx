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
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

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
                <div className="relative">
                  <button
                    onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                    className="relative p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <Bell className="h-5 w-5 text-foreground" />
                    <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full"></span>
                  </button>

                  {/* Notification Dropdown */}
                  {isNotificationOpen && (
                    <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg z-50">
                      <div className="p-4 border-b border-border">
                        <h3 className="font-semibold text-foreground">Notifikasi</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        <div className="p-4 border-b border-border hover:bg-muted cursor-pointer transition-colors">
                          <div className="flex gap-3">
                            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">📍</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-foreground">Sate Hidden Gem Baru Dibuka</p>
                              <p className="text-sm text-muted-foreground mt-1">Tempat baru dengan rating 4.8 telah ditambahkan di Sleman</p>
                              <p className="text-xs text-muted-foreground mt-2">10 menit yang lalu</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 border-b border-border hover:bg-muted cursor-pointer transition-colors">
                          <div className="flex gap-3">
                            <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">⭐</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-foreground">Review Baru dari Pengguna</p>
                              <p className="text-sm text-muted-foreground mt-1">Hiro memberikan rating 5 bintang untuk Sate Hidden Gem</p>
                              <p className="text-xs text-muted-foreground mt-2">2 jam yang lalu</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 border-b border-border hover:bg-muted cursor-pointer transition-colors">
                          <div className="flex gap-3">
                            <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">💬</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-foreground">Update Promo Terbaru</p>
                              <p className="text-sm text-muted-foreground mt-1">Dapatkan diskon 20% untuk pembelian di atas Rp 50.000</p>
                              <p className="text-xs text-muted-foreground mt-2">4 jam yang lalu</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 hover:bg-muted cursor-pointer transition-colors">
                          <div className="flex gap-3">
                            <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-sm">🎉</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-foreground">Selamat, Akun Anda Terverifikasi</p>
                              <p className="text-sm text-muted-foreground mt-1">Email Anda telah berhasil diverifikasi</p>
                              <p className="text-xs text-muted-foreground mt-2">1 hari yang lalu</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                  alt="User avatar"
                  className="h-10 w-10 rounded-full object-cover"
                />
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
