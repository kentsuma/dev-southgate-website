// Components
import DynamicProducts from "@/lib/components/blocks/home/product/products";
import Banner from "@/lib/components/reusable-blocks/banner";
import CarouselStatements from "@/lib/components/blocks/home/carousel";
import Brands from "@/lib/components/blocks/home/brands";
import Parallelogram from "@/lib/components/reusable-blocks/parallelogram";
import EmbedVideo from "@/lib/components/reusable-blocks/embed-video";

// Helper functions
import { getHomePage } from "@/lib/functions/service";
import { arrangeData } from "@/lib/functions/helper";

export default async function Home() {
  const data = await getHomePage();
  const banner = data.nodeByUri.blocks[0].attributes.data;
  const video = data.nodeByUri.blocks[5];
  const parallelogram = data.nodeByUri.blocks[1].attributes.data;
  const productCategories = data.productCategories;
  const testimonies = data.testimonies.nodes;
  const brands = data.brands;

  const parallelDeets = arrangeData(parallelogram);

  return (
    <main>
      <section>
        <Banner banner={banner} />
      </section>
      {/* Parallelogram Section */}
      <section className="w-full">
        <Parallelogram data={parallelDeets} />
      </section>
      {/* Products Section */}
      <section>
        <DynamicProducts products={productCategories} />
      </section>
      <section>
        {/* Carousel Here */}
        <CarouselStatements statements={testimonies} />
      </section>
      <section>
        <Brands brands={brands} />
      </section>
      <section>
        <EmbedVideo video={video.attributes.url} />
      </section>
    </main>
  );
}
