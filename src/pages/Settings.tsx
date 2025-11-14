import { Pencil, User, Lock } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState<"personal" | "password">("personal");

  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="border-b border-border bg-background px-8 py-6">
          <h1 className="text-3xl font-bold text-foreground">Pengaturan</h1>
        </header>

        {/* Content */}
        <div className="grid gap-8 p-8 lg:grid-cols-[300px_1fr]">
          {/* Profile Section */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <img
                src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=300&h=300&fit=crop"
                alt="Profile"
                className="h-48 w-48 rounded-full object-cover"
              />
              <button className="absolute bottom-2 right-2 rounded-full bg-background p-3 shadow-lg ring-2 ring-border hover:bg-accent">
                <Pencil className="h-4 w-4" />
              </button>
            </div>
            <h2 className="mb-6 text-xl font-semibold">@jhondoe</h2>

            {/* Tab Buttons */}
            <div className="flex w-full flex-col gap-2">
              <Button
                variant={activeTab === "personal" ? "default" : "outline"}
                className="w-full justify-start gap-2"
                onClick={() => setActiveTab("personal")}
              >
                <User className="h-4 w-4" />
                Informasi Personal
              </Button>
              <Button
                variant={activeTab === "password" ? "default" : "outline"}
                className="w-full justify-start gap-2"
                onClick={() => setActiveTab("password")}
              >
                <Lock className="h-4 w-4" />
                Ubah Password
              </Button>
            </div>
          </div>

          {/* Form Section */}
          {activeTab === "personal" ? (
            <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
              <h3 className="mb-6 text-2xl font-bold">Informasi Personal</h3>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="mb-2 block font-medium">
                    Nama Panjang
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    defaultValue="Jhon Doe"
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="mb-2 block font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="jhondoe@example.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="mb-2 block font-medium">
                    Alamat
                  </Label>
                  <Input
                    id="address"
                    type="text"
                    placeholder="Masukan alamat anda"
                    className="h-12"
                  />
                </div>

                <div>
                  <Label className="mb-3 block font-medium">Jenis Kelamin</Label>
                  <RadioGroup defaultValue="male" className="flex gap-6">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="cursor-pointer font-normal">
                        Pria
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="cursor-pointer font-normal">
                        Wanita
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="phone" className="mb-2 block font-medium">
                    Nomor Handphone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Masukan nomer handphone anda"
                    className="h-12"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="flex-1">
                    Hapus Perubahan
                  </Button>
                  <Button className="flex-1">
                    Simpan Perubahan
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
              <h3 className="mb-6 text-2xl font-bold">Ubah Password</h3>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="current-password" className="mb-2 block font-medium">
                    Password Saat Ini
                  </Label>
                  <Input
                    id="current-password"
                    type="password"
                    placeholder="Masukan password saat ini"
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="new-password" className="mb-2 block font-medium">
                    Password Baru
                  </Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="Masukan password baru"
                    className="h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="confirm-password" className="mb-2 block font-medium">
                    Konfirmasi Password Baru
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Konfirmasi password baru"
                    className="h-12"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="flex-1">
                    Batal
                  </Button>
                  <Button className="flex-1">
                    Ubah Password
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Settings;
