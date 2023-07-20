import React from "react";
import Image from "next/image";

// Images
import Laursoo from "@/public/images/laursoo.png";

// Components
import Button from "@/lib/functions/button";

// Helper
import { ProductListProps } from "@/lib/functions/types";

const ProductList: React.FC<ProductListProps> = ({
  getSortedItems,
  activeCategory,
  selectedItem,
}) => {
  return (
    <div className="flex flex-col w-auto h-auto ml-[60px]">
      {/* Other Categories */}
      {getSortedItems(activeCategory || "").map((item) => (
        <>
          <div
            key={item.name}
            className={`item p-[20px] sm:py-[50px] flex ${
              selectedItem === item.name ? "selected" : ""
            }`}
          >
            <div className="flex flex-col sm:flex-row my-2 justify-center items-center">
              <Image
                src={Laursoo}
                alt="Laursoo"
                className="h-full w-full sm:w-auto"
              />
              <div className="flex flex-col sm:ml-10 justify-center sm:items-start w-full sm:w-[70%]">
                <div className="w-full flex justify-center sm:justify-start">
                  <h3 className="text-goodpro-bold text-[25px] lg:text-[40px] w-full text-align">
                    {item.name}
                  </h3>
                </div>
                <div className="text-goodpro text-[12px] lg:text-[18px] w-full text-align">
                  {item.label.toUpperCase()}
                </div>
                <div className="w-full flex justify-center sm:justify-start text-carrois mt-3 text-[15px] lg:text-[25px] text-align">
                  {item.description}
                </div>

                <div className="sm:-ml-10 mt-3 w-full justify-center sm:justify-start text-align">
                  <Button label="DOWNLOAD BROCHURE" />
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full" />
        </>
      ))}
    </div>
  );
};

export default ProductList;
