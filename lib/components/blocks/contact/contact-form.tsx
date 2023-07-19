"use client";
import React, { useState, FormEvent } from "react";

// Component
import Button from "@/lib/functions/button";

const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    contactnumber: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      // Handle the response (success or error) accordingly in your UI
      // For example, show a success message or an error message
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle the error in your UI
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="parallelogram-background mt-[60px] sm:mt-[70px] flex">
      <form
        onSubmit={handleSubmit}
        className="margin text-white flex flex-col text-carrois w-full"
        style={{ zIndex: "1" }}
      >
        <div className="margin-y gap-8 flex flex-col">
          <div className="flex flex-col text-1xl sm:text-2xl">
            <h3 className="text-goodpro-bold text-3xl sm:text-5xl mb-5 text-demonicyellow">
              SEND US A MESSAGE
            </h3>
            <label htmlFor="fullName" className="mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullname}
              onChange={(e) => setFullName(e.target.value)}
              className="text-black h-[40px] sm:h-[60px] w-[90%]"
            />
          </div>
          <div className="flex flex-col text-1xl sm:text-2xl">
            <label htmlFor="email" className="mb-2">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black h-[40px] sm:h-[60px] w-[90%]"
            />
          </div>
          <div className="flex flex-col text-1xl sm:text-2xl">
            <label htmlFor="contactNumber" className="mb-2">
              Contact Number:
            </label>
            <input
              type="text"
              id="contactnumber"
              value={formData.contactnumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="text-black h-[40px] sm:h-[60px] w-[90%]"
            />
          </div>
          <div className="flex flex-col text-1xl sm:text-2xl">
            <label htmlFor="message" className="mb-2">
              Message:
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setMessage(e.target.value)}
              className="text-black h-[100px] sm:h-[200px] w-[90%]"
            />
          </div>
          <div className="-ml-10 text-goodpro">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
