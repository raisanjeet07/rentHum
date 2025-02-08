import React from "react";
import ResourceCard from "./ResourceCard";

interface Resource {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  imageUrl: string;
  ownerName: string;
  ownerAvatar: string;
  available: boolean;
}

interface ResourceGridProps {
  resources?: Resource[];
}

const ResourceGrid = ({
  resources = [
    {
      id: "1",
      title: "Professional Camera Kit",
      description: "High-end DSLR camera with multiple lenses and accessories",
      price: 75,
      rating: 4.8,
      category: "Photography",
      imageUrl:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop",
      ownerName: "Sarah Johnson",
      ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      available: true,
    },
    {
      id: "2",
      title: "Power Tools Set",
      description:
        "Complete set of professional power tools for home improvement",
      price: 45,
      rating: 4.6,
      category: "Tools",
      imageUrl:
        "https://images.unsplash.com/photo-1581147036324-c1c9597a378b?q=80&w=500&auto=format&fit=crop",
      ownerName: "Mike Smith",
      ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      available: true,
    },
    {
      id: "3",
      title: "Event Space",
      description: "Modern venue perfect for meetings and small events",
      price: 200,
      rating: 4.9,
      category: "Spaces",
      imageUrl:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=500&auto=format&fit=crop",
      ownerName: "Emma Davis",
      ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      available: false,
    },
  ],
}: ResourceGridProps) => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              title={resource.title}
              description={resource.description}
              price={resource.price}
              rating={resource.rating}
              category={resource.category}
              imageUrl={resource.imageUrl}
              ownerName={resource.ownerName}
              ownerAvatar={resource.ownerAvatar}
              available={resource.available}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceGrid;
