import { X, MapPin, Clock, DollarSign, Star } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

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

interface ReviewDetailProps {
  isOpen: boolean;
  onClose: () => void;
  data: ReviewDetailData | null;
}

const ReviewDetail = ({ isOpen, onClose, data }: ReviewDetailProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editRating, setEditRating] = useState(data?.userReview.rating ?? 0);
  const [editComment, setEditComment] = useState(data?.userReview.comment ?? "");
  const [isSaved, setIsSaved] = useState(false);

  if (!data) return null;

  const handleSubmitEdit = () => {
    console.log("Review updated:", { rating: editRating, comment: editComment });
    setIsEditMode(false);
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

      {/* Review Detail Sidebar */}
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
              onClick={() => setIsSaved((s) => !s)}
              className={`absolute bottom-4 right-4 px-3 py-1 rounded-lg text-sm font-medium transition-colors z-10 ${
                isSaved ? "bg-primary text-primary-foreground" : "bg-primary/70 text-primary-foreground"
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

            {/* Review Saya Section */}
            <div className="border-t border-border pt-6">
              {!isEditMode ? (
                <>
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-lg font-bold text-foreground">Review Saya</h2>
                  </div>

                  {/* Display Mode */}
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <img
                        src={data.userReview.avatar}
                        alt={data.userReview.name}
                        className="h-14 w-14 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-foreground">
                            {data.userReview.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            • {data.userReview.rating} Rate
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {data.userReview.comment}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsEditMode(true)}
                      className="w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors"
                    >
                      Ubah Review
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Edit Mode */}
                  <h2 className="text-lg font-bold text-foreground mb-4">Edit Review</h2>

                  {/* Rating */}
                  <div className="mb-4">
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Rate Saya
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setEditRating(star)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`h-6 w-6 ${
                              star <= editRating
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
                    value={editComment}
                    onChange={(e) => setEditComment(e.target.value)}
                    placeholder="Tulis ulasan Anda di sini..."
                    className="w-full p-3 rounded-lg border border-input bg-background text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary mb-4 resize-none"
                    rows={4}
                  />

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsEditMode(false)}
                      className="flex-1 px-4 py-2 rounded-lg border border-input bg-background hover:bg-accent text-foreground font-medium transition-colors"
                    >
                      Batal
                    </button>
                    <button
                      onClick={handleSubmitEdit}
                      className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors"
                    >
                      Ubah Review
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Review Section */}
            <div className="border-t border-border pt-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-foreground">Review</h2>
                <a href="#" className="text-primary text-sm font-medium hover:underline">
                  Lihat Lainnya
                </a>
              </div>
              <div className="space-y-4">
                {data.otherReviews.map((review) => (
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

            {/* Padding bottom untuk scroll */}
            <div className="h-6" />
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default ReviewDetail;
