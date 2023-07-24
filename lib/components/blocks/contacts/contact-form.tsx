"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// Component
import Button from "@/lib/functions/button";

interface ContactFormProps {
  formDetails: string[];
}

const ContactForm: React.FC<ContactFormProps> = ({ formDetails }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_qp97w9s",
          "template_15zlx2i",
          form.current,
          "iuD4xAnE7Flblsgjt"
        )
        .then(
          (result) => {
            console.log(result.text);
            form.current!.reset();
            alert("Thank you for contacting us!");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="parallelogram-background mt-[60px] sm:mt-[70px] flex">
      <form
        onSubmit={sendEmail}
        ref={form}
        className="margin text-white flex flex-col text-carrois w-full"
        style={{ zIndex: "1" }}
      >
        <div className="margin-y gap-8 flex flex-col">
          <div className="flex flex-col text-1xl sm:text-2xl">
            <h3 className="text-goodpro-bold text-3xl sm:text-5xl mb-5 text-demonicyellow">
              SEND US A MESSAGE
            </h3>
            <label htmlFor="fullName" className="mb-2">
              {formDetails[0]}:
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              className="text-black h-[40px] sm:h-[60px] w-[90%]"
            />
          </div>
          <div className="flex flex-col text-1xl sm:text-2xl">
            <label htmlFor="email" className="mb-2">
              {formDetails[1]}:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="text-black h-[40px] sm:h-[60px] w-[90%]"
            />
          </div>
          <div className="flex flex-col text-1xl sm:text-2xl">
            <label htmlFor="contactNumber" className="mb-2">
              {formDetails[2]}:
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              className="text-black h-[40px] sm:h-[60px] w-[90%]"
            />
          </div>
          <div className="flex flex-col text-1xl sm:text-2xl">
            <label htmlFor="message" className="mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="text-black h-[100px] sm:h-[200px] w-[90%]"
            />
          </div>
          <div className="sm:-ml-10">
            <Button label="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
