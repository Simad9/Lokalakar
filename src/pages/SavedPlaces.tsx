import { Bell, Bookmark, MapPin } from "lucide-react";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DetailUMKM from "@/components/DetailUMKM";

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

const SavedPlaces = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedUMKM, setSelectedUMKM] = useState<UMKMDetail | null>(null);
  const [savedIds, setSavedIds] = useState<Record<string, boolean>>({});

  const savedPlaces = [
    {
      id: "1",
      name: "Warung Soto Bu Maryam",
      category: "Kuliner Tradisional",
      location: "Jln. Malioboro No. 45, Yogyakarta",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop",
      savedDate: "15 Nov 2024",
      hours: "07:00 - 18:00 WIB",
      priceRange: "Rp. 8.000 - 20.0000",
      rating: 4.6,
    },
    {
      id: "2",
      name: "Gudeg Yu Djum",
      category: "Kuliner Tradisional",
      location: "Jln. Wijilan No. 167, Yogyakarta",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
      savedDate: "12 Nov 2024",
      hours: "06:00 - 19:00 WIB",
      priceRange: "Rp. 15.000 - 30.0000",
      rating: 4.7,
    },
    {
      id: "3",
      name: "Angkringan Lik Man",
      category: "Street Food",
      location: "Alun-alun Kidul, Yogyakarta",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
      savedDate: "10 Nov 2024",
      hours: "18:00 - 23:00 WIB",
      priceRange: "Rp. 5.000 - 15.0000",
      rating: 4.5,
    }
  ];

  const umkmDetailMap: { [key: string]: UMKMDetail } = {
    "1": {
      id: "1",
      title: "Warung Soto Bu Maryam",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&h=400&fit=crop",
      location: "Jln. Malioboro No. 45, Yogyakarta",
      hours: "07:00 - 18:00 WIB",
      priceRange: "Rp. 8.000 - 20.0000",
      rating: 4.6,
      maxRating: 5.0,
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
          comment: "Soto nya enak banget, bumbu-bumbunya pas. Merekomendasikan!",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        },
        {
          id: "2",
          name: "Budiyanto",
          rating: 4,
          comment: "Tempat yang nyaman dan pelayanan cepat. Harga terjangkau untuk porsi yang lumayan besar.",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        },
        {
          id: "3",
          name: "Sukijem Ahmad",
          rating: 5,
          comment: "Paling suka datang ke sini untuk sarapan. Tradisi keluarga yang sudah turun temurun.",
          avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
        },
      ],
    },
    "2": {
      id: "2",
      title: "Gudeg Yu Djum",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=400&fit=crop",
      location: "Jln. Wijilan No. 167, Yogyakarta",
      hours: "06:00 - 19:00 WIB",
      priceRange: "Rp. 15.000 - 30.0000",
      rating: 4.7,
      maxRating: 5.0,
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
          comment: "Gudeg authentic dari Yogyakarta, rasa yang sudah legendary!",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        },
        {
          id: "2",
          name: "Budiyanto",
          rating: 4,
          comment: "Layanan baik dan tempat bersih. Cocok untuk makan keluarga atau teman-teman.",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        },
        {
          id: "3",
          name: "Sukijem Ahmad",
          rating: 4,
          comment: "Harga standard, rasa yang consistent. Jadi pilihan utama saat makan gudeg di Yogya.",
          avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
        },
      ],
    },
    "3": {
      id: "3",
      title: "Angkringan Lik Man",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&h=400&fit=crop",
      location: "Alun-alun Kidul, Yogyakarta",
      hours: "18:00 - 23:00 WIB",
      priceRange: "Rp. 5.000 - 15.0000",
      rating: 4.5,
      maxRating: 5.0,
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
          comment: "Suasana khas angkringan yang fun! Kopi hitam-nya enak dan pas di hati.",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        },
        {
          id: "2",
          name: "Budiyanto",
          rating: 4,
          comment: "Tempat yang hits di kalangan anak muda. Makanannya juga tidak mahal dan lezat.",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        },
        {
          id: "3",
          name: "Sukijem Ahmad",
          rating: 4,
          comment: "Pengalaman malam yang memorable dengan teman-teman. Recommended untuk hang out.",
          avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
        },
      ],
    },
  };

  const handleViewDetail = (place: (typeof savedPlaces)[0]) => {
    const detail = umkmDetailMap[place.id];
    setSelectedUMKM(detail);
    setIsDetailOpen(true);
  };

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
                  <button
                    onClick={() => {
                      setSavedIds((s) => ({ ...s, [place.id]: !s[place.id] }));
                    }}
                    className={`absolute right-3 top-3 rounded-full p-2 shadow-lg transition-transform hover:scale-110 ${
                      savedIds[place.id] ? "bg-primary text-white" : "bg-primary/80 text-primary-foreground"
                    }`}
                  >
                    <Bookmark className="h-4 w-4" />
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
                    <button
                      onClick={() => handleViewDetail(place)}
                      className="px-3 py-1 text-sm rounded-md border border-input bg-background hover:bg-primary hover:text-white transition-colors font-medium"
                    >
                      Lihat Detail
                    </button>
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

      {/* Detail UMKM Sidebar */}
      <DetailUMKM
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        data={selectedUMKM}
      />
    </div>
  );
};

export default SavedPlaces;
