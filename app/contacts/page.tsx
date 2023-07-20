import React from "react";

// Components
import Banner from "@/lib/components/reusable-blocks/banner";
import ContactForm from "@/lib/components/blocks/contacts/contact-form";
import MapView from "@/lib/components/blocks/contacts/map-view";

// Helper
import { getContactPage } from "@/lib/functions/service";

export default async function ContactPage() {
  const contactData = await getContactPage();
  const banner = contactData[0].attributes.data;
  const map = contactData[2].attributes.data;

  return (
    <main>
      {/* Banner */}
      <section>
        <Banner banner={banner} />
      </section>
      {/* Contact Forms */}
      <section>
        <ContactForm />
      </section>
      {/* Maps */}
      <section>
        <div className="w-full flex flex-col sm:flex-row items-center justify-left h-auto my-[55px] -ml-[100px]">
          <div className="flex items-center justify-center sm:justify-end sm:-rotate-90 w-full sm:w-[700px] sm:-ml-[100px]">
            <span className="text-goodpro-bold text-[20px] ml-[50%] sm:ml-0 sm:text-[50px] sm:transform sm:-translate-x-2xl">
              FIND US
            </span>
          </div>
          <MapView location={map} />
        </div>
      </section>
    </main>
  );
}
