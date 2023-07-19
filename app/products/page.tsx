import React from "react";
import client from "@/lib/apollo/client";

// Components
import Banner from "@/lib/components/reusable-blocks/banner";
import MenuComponent from "@/lib/components/blocks/products/menu-component";

// Helper
import { GetProductsPage } from "@/lib/graphql";

export default async function ProductsPage() {
  async function getProductsPage() {
    const pages = await client.query({
      query: GetProductsPage,
    });

    return await pages?.data;
  }

  const data = await getProductsPage();
  const bannerData = data.nodeByUri.blocks[0].attributes.data;
  console.log(bannerData);
  const products = data.products;

  const productsData: {
    CARS: {
      name: string;
      label: string;
      description: string;
      image: string;
      id: string;
    }[];
    SUV: {
      name: string;
      label: string;
      description: string;
      image: string;
      id: string;
    }[];
    VAN: {
      name: string;
      label: string;
      description: string;
      image: string;
      id: string;
    }[];
    "TRUCKS & BUS": {
      name: string;
      label: string;
      description: string;
      image: string;
      id: string;
    }[];
  } = {
    CARS: [],
    SUV: [],
    VAN: [],
    "TRUCKS & BUS": [],
  };

  products.nodes.forEach((node: any) => {
    const { title, label, description, type, image } = node.productDetails;
    const id = node.id;

    const product = {
      name: title,
      label,
      description,
      image: image.sourceUrl,
      id,
    };

    if (type === "Car") {
      productsData.CARS.push(product);
    } else if (type === "Suv") {
      productsData.SUV.push(product);
    } else if (type === "Van") {
      productsData.VAN.push(product);
    } else if (type === "Trucks-Bus") {
      productsData["TRUCKS & BUS"].push(product);
    }
  });

  return (
    <main>
      {/* Header Section */}
      <section>
        <Banner banner={bannerData} />
      </section>
      {/* Menu Section */}
      <section>
        <div>
          <MenuComponent menuData={productsData} />
        </div>
      </section>
    </main>
  );
}
