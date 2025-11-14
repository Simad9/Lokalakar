import { Bell } from "lucide-react";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

const Map = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="border-b border-border bg-background px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Selamat Datang, Jhon Doe</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  className="rounded-full p-2 hover:bg-accent relative"
                >
                  <Bell className="h-5 w-5" />
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
        </header>

        {/* Map Container */}
        <div className="h-[calc(100vh-120px)] w-full p-6">
          <div className="h-full w-full overflow-hidden rounded-lg border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63245.99652186241!2d110.33657897910155!3d-7.797068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x21723fd4d3684f71!2sYogyakarta%2C%20Yogyakarta%20City%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yogyakarta Map"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Map;
