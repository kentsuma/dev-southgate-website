import Image from "next/image";

export default function DynamicBrands({ brands }: any) {
  return (
    <div className="flex flex-col lg:flex-row margin-y justify-center  lg:h-[500px]">
      <div className="lg:-rotate-90 flex  h-auto w-full lg:h-[200px] lg:w-[650px] items-center justify-center lg:-mr-10 lg:mt-[160px]">
        <span className=" flex text-goodpro-bold text-[40px] lg:text-[60px] w-[500px] lg:mt-[300px] items-center align-center justify-center lg:justify-end">
          OUR BRANDS
        </span>
      </div>
      <div className="h-full items-center flex justify-end lg:mr-20">
        <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-3 w-full h-fit">
          {brands.nodes.map((brand: any) => (
            <div
              key={brand.brandDetails.image.id}
              className="lg:w-[250px] w-[150px] h-auto flex justify-center m-3"
            >
              <Image
                src={brand.brandDetails.image.sourceUrl}
                alt={brand.brandDetails.name}
                className="max-w-full"
                width="1000"
                height="1000"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
