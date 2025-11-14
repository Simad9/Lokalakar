import { Bell, Bookmark, MapPin } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";

const SavedPlaces = () => {
  const savedPlaces = [
    {
      id: 1,
      name: "Warung Soto Bu Maryam",
      category: "Kuliner Tradisional",
      location: "Jln. Malioboro No. 45, Yogyakarta",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop",
      savedDate: "15 Nov 2024"
    },
    {
      id: 2,
      name: "Gudeg Yu Djum",
      category: "Kuliner Tradisional",
      location: "Jln. Wijilan No. 167, Yogyakarta",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
      savedDate: "12 Nov 2024"
    },
    {
      id: 3,
      name: "Angkringan Lik Man",
      category: "Street Food",
      location: "Alun-alun Kidul, Yogyakarta",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
      savedDate: "10 Nov 2024"
    }
  ];

  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="border-b border-border bg-background px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Selamat Datang, Jhon Doe</h1>
            <div className="flex items-center gap-4">
              <button className="rounded-full p-2 hover:bg-accent">
                <Bell className="h-5 w-5" />
              </button>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                alt="User avatar"
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Tempat yang Disimpan</h2>
              <p className="text-muted-foreground">Kamu telah menyimpan {savedPlaces.length} tempat</p>
            </div>
          </div>

          {/* Saved Places Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedPlaces.map((place) => (
              <div key={place.id} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                <div className="relative">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <button className="absolute right-3 top-3 rounded-full bg-primary p-2 text-primary-foreground shadow-lg transition-transform hover:scale-110">
                    <Bookmark className="h-4 w-4 fill-current" />
                  </button>
                  <div className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                    {place.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-bold text-foreground">{place.name}</h3>
                  <p className="mb-3 flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    {place.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Disimpan: {place.savedDate}</span>
                    <Button variant="outline" size="sm">
                      Lihat Detail
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {savedPlaces.length === 0 && (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-border">
              <Bookmark className="mb-4 h-16 w-16 text-muted-foreground" />
              <h3 className="mb-2 text-xl font-semibold">Belum ada tempat yang disimpan</h3>
              <p className="text-muted-foreground">Mulai simpan tempat favoritmu sekarang!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SavedPlaces;
