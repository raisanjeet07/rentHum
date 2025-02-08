import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AuthDialog from "@/components/auth/AuthDialog";

interface HeaderProps {
  onSearch?: (query: string) => void;
  onCreateListing?: () => void;
  userAvatar?: string;
  userName?: string;
  notifications?: number;
}

const Header = ({
  onSearch = () => {},
  onCreateListing = () => {},
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
  userName = "John Doe",
  notifications = 3,
}: HeaderProps) => {
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="w-full h-[72px] px-6 bg-white border-b border-gray-200 flex items-center justify-between fixed top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-primary">RentHub</h1>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search for resources..."
            className="w-full pl-10 pr-4"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {!isLoggedIn ? (
          <Button onClick={() => setShowAuthDialog(true)}>Login</Button>
        ) : (
          <>
            <Button
              onClick={onCreateListing}
              className="flex items-center gap-2"
              variant="default"
            >
              <Plus className="h-4 w-4" />
              Create Listing
            </Button>

            {/* Notifications */}
            <div className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </Button>
            </div>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar>
                    <AvatarImage src={userAvatar} alt={userName} />
                    <AvatarFallback>
                      {userName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>My Listings</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
        <AuthDialog open={showAuthDialog} onOpenChange={setShowAuthDialog} />
      </div>
    </header>
  );
};

export default Header;
