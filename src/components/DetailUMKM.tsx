import { X, MapPin, Clock, DollarSign, Star } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

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
  reviews: Review[];
}

interface DetailUMKMProps {
  isOpen: boolean;
  onClose: () => void;
  data: UMKMDetail | null;
}

const DetailUMKM = ({ isOpen, onClose, data }: DetailUMKMProps) => {
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  if (!data) return null;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Detail Sidebar */}
      <div
        className={`fixed right-0 top-0 h-screen w-full md:w-[500px] bg-background border-l border-border overflow-y-auto z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ScrollArea className="h-screen">
          {/* Image Section */}
          <div className="relative">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-80 object-cover"
            />
            {/* Close Button - Positioned on left side of image */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm hover:bg-background text-foreground p-2 rounded-lg transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>
            {data.badge && (
              <span className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {data.badge}
              </span>
            )}
            <button
              onClick={() => {
                setIsSaved((s) => !s);
              }}
              className={`absolute bottom-4 right-4 px-3 py-1 rounded-lg text-sm font-medium transition-colors z-20 ${
                isSaved
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary/70 text-primary-foreground"
              }`}
            >
              {isSaved ? "Tersimpan" : "Simpan UMKM"}
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6 space-y-6">
            {/* Title and Rating */}
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-3">
                {data.title}
              </h1>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-foreground">
                    {data.rating} / {data.maxRating}
                  </span>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{data.location}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{data.hours}</span>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{data.priceRange}</span>
              </div>
            </div>

            {/* Menu Section */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-3">Menu</h2>
              <div className="grid grid-cols-3 gap-3">
                {data.menuImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Menu ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Review Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-foreground">Review</h2>
                <a href="#" className="text-primary text-sm font-medium hover:underline">
                  Lihat Lainnya
                </a>
              </div>
              <div className="space-y-4">
                {data.reviews.map((review) => (
                  <div key={review.id} className="flex gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="h-12 w-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">
                          {review.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          • {review.rating} Rate
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Saya Section */}
            <div className="border-t border-border pt-6">
              <h2 className="text-lg font-bold text-foreground mb-4">Review Saya</h2>

              {/* Rating */}
              <div className="mb-4">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Rate saya
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setUserRating(star)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= userRating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Text Area */}
              <textarea
                value={userReview}
                onChange={(e) => setUserReview(e.target.value)}
                placeholder="Review Saya"
                className="w-full p-3 rounded-lg border border-input bg-background text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary mb-4 resize-none"
                rows={4}
              />

              {/* Submit Button */}
              <button className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors">
                Kirim Review
              </button>
            </div>

            {/* Padding bottom untuk scroll */}
            <div className="h-6" />
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default DetailUMKM;
