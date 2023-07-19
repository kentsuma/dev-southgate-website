"use client";
import React, { useState } from "react";

// Icons
import { SlArrowRight, SlArrowDown } from "react-icons/sl";

interface AccordionCardProps {
  question: string;
  answer: string;
}

const AccordionCard: React.FC<AccordionCardProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    if (isExpanded) {
      setIsExpanded(false);
      setIsClicked(false);
    } else {
      setIsExpanded(true);
      setIsClicked(true);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col mb-1 w-full">
      <div
        className={`faq-parallelogram items-center bg-rivieraparadise cursor-pointer ${
          isExpanded ? "expanded" : ""
        }`}
        onClick={handleCardClick}
      >
        <div className="skew-x-[20deg]">
          <div className="flex flex-row m-3 text-goodpro text-white">
            <div
              className={`w-[100%] text-[18px] lg:text-[25px] text-goodpro font-bold ${
                isClicked ? "text-demonicyellow" : ""
              }`}
            >
              {question.toUpperCase()}
            </div>

            <div className="mt-1 justify-end w-[100%] flex">
              {isExpanded ? <SlArrowDown /> : <SlArrowRight />}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`faq-details mt-3 text-carrois md:text-[15px] text-[12px] lg:text-[20px] ${
          isExpanded ? "expanded" : ""
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default AccordionCard;
