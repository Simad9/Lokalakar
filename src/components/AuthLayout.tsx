import { ReactNode } from "react";
import logo from "@/assets/logo.png";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  leftContent?: {
    title: string;
    description: string;
  };
}

const AuthLayout = ({ children, title, subtitle, leftContent }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex bg-background">
      {/* Left side - decorative */}
      <div className="hidden lg:flex lg:w-1/2 bg-auth-pattern/30 p-12 flex-col justify-between relative overflow-hidden">
        {/* Decorative pattern background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M20 20 Q30 10, 40 20 T60 20" stroke="currentColor" fill="none" strokeWidth="2" className="text-primary"/>
                <circle cx="70" cy="70" r="15" stroke="currentColor" fill="none" strokeWidth="2" className="text-primary"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>

        <div className="flex items-center gap-3 z-10">
          <img src={logo} alt="LOKALAKAR" className="h-12 w-12" />
          <span className="text-2xl font-bold text-foreground">LOKALAKAR</span>
        </div>

        {leftContent && (
          <div className="z-10">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              {leftContent.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {leftContent.description}
            </p>
          </div>
        )}
      </div>

      {/* Right side - form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-3 mb-8 justify-center">
            <img src={logo} alt="LOKALAKAR" className="h-10 w-10" />
            <span className="text-xl font-bold text-foreground">LOKALAKAR</span>
          </div>

          <div className="bg-card rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-card-foreground mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground mb-8">{subtitle}</p>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
