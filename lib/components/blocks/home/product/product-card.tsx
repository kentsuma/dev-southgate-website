"use client";

import Image from "next/image";

// Image
import Laursoo from "@/public/images/laursoo.png";

// Types
import { Product } from "@/lib/functions/types";

export default function productCard({ label, image }: Product) {
  return (
    <div className="parallelogram-card">
      <div className="flex flex-col">
        {/* Temporary image used */}
        <Image src={Laursoo} alt="Laursoo" className="w-auto h-auto" />
      </div>
      <div className="mt-3 skew-x-[9deg] ml-3">
        <span className="text-white text-goodpro text-2xl font-bold">
          {label}
        </span>
      </div>
    </div>
  );
}
