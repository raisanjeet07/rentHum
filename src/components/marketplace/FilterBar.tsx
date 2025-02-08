import React from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DatePickerWithRange from "@/components/ui/date-picker-with-range";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterBarProps {
  onCategoryChange?: (category: string) => void;
  onDateRangeChange?: (range: { from: Date; to: Date }) => void;
  onPriceRangeChange?: (range: number[]) => void;
  selectedCategory?: string;
  dateRange?: { from: Date; to: Date };
  priceRange?: number[];
}

const FilterBar = ({
  onCategoryChange = () => {},
  onDateRangeChange = () => {},
  onPriceRangeChange = () => {},
  selectedCategory = "",
  dateRange = {
    from: new Date(),
    to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  },
  priceRange = [0, 1000],
}: FilterBarProps) => {
  const categories = [
    "All Categories",
    "Tools",
    "Equipment",
    "Spaces",
    "Vehicles",
    "Electronics",
    "Photography",
  ];

  return (
    <div className="w-full h-16 px-4 bg-white border-b flex items-center justify-between gap-4 shadow-sm">
      <div className="flex items-center gap-4 flex-1">
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category.toLowerCase()}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-[300px] justify-start text-left font-normal"
            >
              <Calendar className="mr-2 h-4 w-4" />
              <span>Select dates</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <DatePickerWithRange
              date={dateRange}
              onSelect={(range: any) => onDateRangeChange(range)}
            />
          </PopoverContent>
        </Popover>

        <div className="flex items-center gap-4 min-w-[300px]">
          <span className="text-sm text-gray-500">Price Range:</span>
          <div className="flex items-center gap-2 flex-1">
            <Input
              type="number"
              value={priceRange[0]}
              className="w-20"
              onChange={(e) =>
                onPriceRangeChange([parseInt(e.target.value), priceRange[1]])
              }
            />
            <Slider
              min={0}
              max={1000}
              step={10}
              value={priceRange}
              onValueChange={onPriceRangeChange}
              className="flex-1"
            />
            <Input
              type="number"
              value={priceRange[1]}
              className="w-20"
              onChange={(e) =>
                onPriceRangeChange([priceRange[0], parseInt(e.target.value)])
              }
            />
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        onClick={() => {
          onCategoryChange("");
          onDateRangeChange({
            from: new Date(),
            to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });
          onPriceRangeChange([0, 1000]);
        }}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default FilterBar;
