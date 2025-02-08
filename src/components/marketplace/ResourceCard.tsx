import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, DollarSign, Star } from "lucide-react";

interface ResourceCardProps {
  title?: string;
  description?: string;
  price?: number;
  rating?: number;
  category?: string;
  imageUrl?: string;
  ownerName?: string;
  ownerAvatar?: string;
  available?: boolean;
}

const ResourceCard = ({
  title = "Professional Camera Kit",
  description = "High-end DSLR camera with multiple lenses and accessories. Perfect for professional photoshoots.",
  price = 75,
  rating = 4.8,
  category = "Photography",
  imageUrl = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop",
  ownerName = "Sarah Johnson",
  ownerAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  available = true,
}: ResourceCardProps) => {
  return (
    <Card className="w-[340px] h-[380px] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <Badge
            className={`absolute top-4 right-4 ${available ? "bg-green-500" : "bg-red-500"}`}
          >
            {available ? "Available" : "Booked"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg truncate">{title}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{description}</p>
        <Badge variant="secondary" className="mb-2">
          {category}
        </Badge>
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-gray-600" />
          <span className="font-semibold">{price}</span>
          <span className="text-gray-600">/day</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={ownerAvatar} />
              <AvatarFallback>
                {ownerName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600">{ownerName}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <CalendarDays className="w-4 h-4" />
            <span className="text-sm">Available Now</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
