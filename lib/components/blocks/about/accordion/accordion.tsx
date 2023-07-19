import React from "react";

// Components
import AccordionCard from "./accordion-card";

export default async function Accordion({ faq }: { faq: any }) {
  console.log(faq);
  return (
    <div className="flex justify-center w-full items-center flex-col lg:flex-row">
      <div className="lg:-rotate-90 sideways-text  sm:justify-end md:mt-10 lg:mt-20 items-center lg:h-[500px] flex lg:ml-3 lg:-mr-5 w-full sm:w-auto justify-center">
        <h1 className="text-goodpro-bold text-[50px] sm:text-[60px] pt-3">
          {"FAQ's"}
        </h1>
      </div>
      <div className="flex flex-col margin justify-center items-center margin-y gap-5 w-[70%]">
        {faq.map((data: any) => (
          <AccordionCard
            key={data.node.id}
            question={data.node.faqs.question}
            answer={data.node.faqs.answer}
          />
        ))}
      </div>
    </div>
  );
}
