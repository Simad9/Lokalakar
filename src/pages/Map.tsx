import { Bell } from "lucide-react";
import Sidebar from "@/components/Sidebar";

const Map = () => {
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
