import client from "@/lib/apollo/client";
import React from "react";

// Components
import Banner from "@/lib/components/reusable-blocks/banner";
import Accordion from "@/lib/components/blocks/about/accordion/accordion";
import Paralllogram from "@/lib/components/reusable-blocks/parallelogram";

// Helper Functions
import { arrangeData } from "@/lib/functions/helper";
import { getAboutPage } from "@/lib/functions/service";

export default async function AboutPage() {
  const data = await getAboutPage();
  const banner = data.nodeByUri.blocks[0].attributes.data;
  const faq = data.faqs.edges;
  const parallelogram = data.nodeByUri.blocks[1].attributes.data;

  const parallelDeets = arrangeData(parallelogram);
  console.log(parallelDeets);
  return (
    <main>
      <section>
        <Banner banner={banner} />
      </section>

      <section>
        <Paralllogram data={parallelDeets} />
      </section>
      {/* Accordion Section */}
      <section>
        <Accordion faq={faq} />
      </section>
    </main>
  );
}
