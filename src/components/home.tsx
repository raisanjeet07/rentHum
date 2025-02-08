import React, { useState } from "react";
import Header from "./marketplace/Header";
import FilterBar from "./marketplace/FilterBar";
import ResourceGrid from "./marketplace/ResourceGrid";

interface HomeProps {
  initialResources?: Array<{
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
  }>;
}

const Home = ({
  initialResources = [
    {
      id: "1",
      title: "Professional Camera Kit",
      description: "High-end DSLR camera with multiple lenses and accessories",
      price: 75,
      rating: 4.8,
      category: "photography",
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
      category: "tools",
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
      category: "spaces",
      imageUrl:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=500&auto=format&fit=crop",
      ownerName: "Emma Davis",
      ownerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      available: false,
    },
  ],
}: HomeProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCreateListing = () => {
    // Placeholder for create listing functionality
    console.log("Create listing clicked");
  };

  const filteredResources = initialResources.filter((resource) => {
    const matchesSearch = resource.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || resource.category === selectedCategory;
    const matchesPrice =
      resource.price >= priceRange[0] && resource.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearch} onCreateListing={handleCreateListing} />
      <main className="pt-[72px]">
        <FilterBar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />
        <ResourceGrid resources={filteredResources} />
      </main>
    </div>
  );
};

export default Home;
