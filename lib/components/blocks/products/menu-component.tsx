"use client";
import React, { useState, useEffect } from "react";

// Components
import { MenuCategories } from "./menu-categories";
import ProductList from "./product-list";
import { Pagination } from "./pagination";

// Helper
import { MenuItem, MenuData } from "@/lib/functions/types";

const getSortedItems = (
  category: string,
  currentPage: number,
  itemsPerPage: number,
  menuData: MenuData["menuData"]
) => {
  const items: MenuItem[] = [];

  if (category === "ALL") {
    Object.values(menuData).forEach((categoryItems) => {
      items.push(...categoryItems);
    });
  } else if (category !== "ALL" && category !== "") {
    const categoryItems = menuData[category];
    if (categoryItems) {
      items.push(...categoryItems);
    }
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedItems = items.slice(startIndex, endIndex);

  return slicedItems;
};

export default function MenuComponent({ menuData }: MenuData) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [allItems, setAllItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleClick = (category: string) => {
    setActiveCategory(category === activeCategory ? "" : category);
    setSelectedItem(null);
    setCurrentPage(1); // Reset currentPage to 1
  };

  console.log(allItems);

  useEffect(() => {
    const items: MenuItem[] = [];

    if (activeCategory === "ALL") {
      Object.values(menuData).forEach((categoryItems) => {
        items.push(...categoryItems);
      });
    } else if (activeCategory !== "ALL" && activeCategory !== "") {
      const categoryItems = menuData[activeCategory];
      if (categoryItems) {
        items.push(...categoryItems);
      }
    }

    console.log("LENGTH", items.length);
    setAllItems(items.length); // Update the total number of items
  }, [activeCategory, menuData]);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(allItems / itemsPerPage);

    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      {/* Menu Categories */}
      <MenuCategories
        activeCategory={activeCategory}
        handleClick={handleClick}
        menuData={menuData}
      />
      {/* Details */}
      <ProductList
        getSortedItems={() =>
          getSortedItems(activeCategory, currentPage, itemsPerPage, menuData)
        }
        activeCategory={activeCategory}
        selectedItem={selectedItem}
      />
      {/* Pagination */}
      <Pagination
        allItems={allItems}
        currentPage={currentPage}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        activeCategory={activeCategory}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
}
