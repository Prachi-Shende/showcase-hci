import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NotificationsDropdown } from "./NotificationsDropdown";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 glass backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 gradient-instagram rounded-lg blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <Sparkles className="relative h-8 w-8 text-primary" />
          </div>
          <span className="text-xl font-bold gradient-instagram text-gradient">ShowCase</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          <Link to="/">
            <Button 
              variant="ghost" 
              className={cn(
                "rounded-xl",
                isActive("/") && "bg-accent text-accent-foreground"
              )}
            >
              Home
            </Button>
          </Link>
          <Link to="/explore">
            <Button 
              variant="ghost"
              className={cn(
                "rounded-xl",
                isActive("/explore") && "bg-accent text-accent-foreground"
              )}
            >
              Explore
            </Button>
          </Link>
          <Link to="/profile">
            <Button 
              variant="ghost"
              className={cn(
                "rounded-xl",
                isActive("/profile") && "bg-accent text-accent-foreground"
              )}
            >
              My Portfolio
            </Button>
          </Link>
          <Link to="/build">
            <Button 
              variant="gradient"
              size="sm"
              className="ml-2"
            >
              Build Portfolio
            </Button>
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search for creators, developers..." 
              className="w-64 pl-10 rounded-xl glass"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Notifications */}
          <NotificationsDropdown />

          {/* Profile/Settings */}
          <Link to="/settings">
            <Button 
              variant="ghost" 
              size="icon" 
              className={cn(
                "rounded-xl",
                isActive("/settings") && "bg-accent"
              )}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
