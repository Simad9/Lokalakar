import { Bell, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ReviewDetail from "@/components/ReviewDetail";
import FilterSidebar, { FilterState } from "@/components/FilterSidebar";
import { Input } from "@/components/ui/input";

interface ReviewDetailData {
  id: string;
  title: string;
  image: string;
  badge?: string;
  location: string;
  hours: string;
  priceRange: string;
  rating: number;
  maxRating: number;
  userReview: {
    name: string;
    rating: number;
    comment: string;
    avatar: string;
  };
  otherReviews: Array<{
    id: string;
    name: string;
    rating: number;
    comment: string;
    avatar: string;
  }>;
}

const Reviews = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<ReviewDetailData | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState | null>(null);

  const reviews = [
    {
      id: "1",
      name: "Sate Hidden Gem",
      location: "Jln. Ahmad Yani, Sleman, Yogyakarta",
      priceRange: "Rp. 5.000 - 25.000",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&h=400&fit=crop",
      badge: "Hidden Gem",
      hours: "09:00 - 21:00 WIB",
      rating: 4.8,
    }
  ];

  const reviewDetailMap: { [key: string]: ReviewDetailData } = {
    "1": {
      id: "1",
      title: "Sate Hidden Gem",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&h=400&fit=crop",
      badge: "Hidden Gem",
      location: "Jln. Ahmad Yani, Sleman, Yogyakarta",
      hours: "09:00 - 21:00 WIB",
      priceRange: "Rp. 5.000 - 25.000",
      rating: 4.8,
      maxRating: 5.0,
      userReview: {
        name: "Jhon Doe",
        rating: 4,
        comment: "Enak sekali makan disini, satenya banyak. Yang jual baik juga",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      },
      otherReviews: [
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
    }
  };

  const handleViewDetailReview = (review: (typeof reviews)[0]) => {
    const detail = reviewDetailMap[review.id];
    setSelectedReview(detail);
    setIsDetailOpen(true);
  };

  const handleApplyFilter = (newFilters: FilterState) => {
    setFilters(newFilters);
    console.log("Filters applied:", newFilters);
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
          <h2 className="mb-6 text-2xl font-bold text-foreground">Reviewmu di UMKM</h2>

          {/* Search Bar */}
          <div className="mb-8 flex items-center gap-3">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Cari Nama UMKM"
                className="h-12 pl-4 pr-4"
              />
            </div>
            <button className="inline-flex items-center justify-center h-12 w-12 rounded-md border border-input bg-background hover:bg-accent transition-colors flex-shrink-0">
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsFilterOpen(true)}
              className="inline-flex items-center justify-center h-12 w-12 rounded-md border border-input bg-background hover:bg-accent transition-colors flex-shrink-0"
            >
              <SlidersHorizontal className="h-5 w-5" />
            </button>
          </div>

          {/* Review Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.id} className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                <div className="relative">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-48 w-full object-cover"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {review.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold text-foreground">{review.name}</h3>
                  <p className="mb-1 flex items-start gap-2 text-sm text-muted-foreground">
                    <svg className="mt-0.5 h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {review.location}
                  </p>
                  <p className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                    {review.priceRange}
                  </p>
                  <button
                    onClick={() => handleViewDetailReview(review)}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background hover:bg-primary hover:text-white font-medium transition-colors"
                  >
                    Detail Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Review Detail Sidebar */}
      <ReviewDetail
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        data={selectedReview}
      />

      {/* Filter Sidebar */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilter={handleApplyFilter}
      />
    </div>
  );
};

export default Reviews;
