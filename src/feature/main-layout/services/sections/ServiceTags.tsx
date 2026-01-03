"use client";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button, Grid } from "antd";
import { POPULAR_TAGS } from "@/constants/service/popularTags";

export default function ServiceTags() {
  const { lg } = Grid.useBreakpoint();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = searchParams.get("category");
  const searchQuery = searchParams.get("service");

  if (!currentCategory && !searchQuery) return null;

  const handleTagClick = (serviceTitle: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("service", serviceTitle);
    const newParams = new URLSearchParams();
    newParams.set("service", serviceTitle);

    router.push(`/services?${newParams.toString()}`, { scroll: false });

    // Smoothly scroll to the results grid
    document
      .getElementById("service-grid")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 pb-16">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Popular Tags</h3>
      <div className="flex flex-wrap gap-3">
        {POPULAR_TAGS.map((tag, index) => (
          <Button
            size={lg ? "large" : "small"}
            key={index}
            onClick={() => handleTagClick(tag)}
            className="bg-transparent! border border-[#005B6F]/20! text-primary! font-medium! rounded-sm! 
                     hover:border-primary!  transition-all! duration-200! 
                     text-sm! sm:text-base! cursor-pointer! shadow-sm! hover:shadow-md!"
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
}
