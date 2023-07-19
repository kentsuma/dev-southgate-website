import Image from "next/image";
import ProductCard from "./product-card";
import Button from "@/lib/functions/button";

export default function DynamicProducts({ products }: any) {
  const reversedProducts = [];
  for (let i = products.edges.length - 1; i >= 0; i--) {
    reversedProducts.push(products.edges[i]);
  }

  return (
    <div className="lg:flex lg:flex-col block justify-end w-auto margin-y overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:justify-end ">
        <div className="flex  h-auto w-auto justify-center items-center">
          <span className="lg:-rotate-90 flex text-goodpro-bold text-[40px] lg:text-[55px] items-end align-bottom justify-center">
            OUR PRODUCTS
          </span>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
          {reversedProducts.map((product: any) => (
            <div key={product.node.id} className="flex flex-col">
              <ProductCard
                label={product.node.productCategory.name}
                image={product.node.productCategory.image.sourceUrl}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-3 mr-[790px]">
        <Button label="SEE DETAILS" />
      </div>
    </div>
  );
}
