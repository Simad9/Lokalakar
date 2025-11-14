import { Search, SlidersHorizontal, Bell } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import FoodCard from "@/components/FoodCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  // Mock data for food items
  const foodItems = Array(6).fill({
    title: "Sate Hidden Gem",
    location: "Jln. Ahmad Yani, Sleman, Yogyakarta",
    priceRange: "Rp. 5.000 - 25.0000",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop",
    badge: "Hidden Gem",
  });

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
              <Button variant="outline" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodItems.map((item, index) => (
              <FoodCard key={index} {...item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
