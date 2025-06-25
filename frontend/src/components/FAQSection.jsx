import React, { useState } from "react";
import { faqData } from "../constants/faqData";
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars
import SpotlightCard from "../lib/SpotlightCard";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="w-full relative py-7.5">
      <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-12 relative">
        <div className="col-start-2 col-span-10 relative flex items-center">
          <h2 className="sm:text-2xl md:text-3xl lg:text-4xl font-[600] col-span-4 w-full text-center text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="col-start-2 col-span-10 relative flex items-center">
          <p className="pt-2 sm:w-4/5 lg:w-3/4 mx-auto text-center text-base sm:text-md text-white/60">
            Get answers to your questions about our product, pricing, and
            everything in between.
          </p>
        </div>{" "}
        {/* Accordion */}
        <div className="col-start-2 col-span-10 mt-8 space-y-0">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "shadow-lg border-[#695BC4]"
                  : "shadow border-transparent rounded-xl"
              } border`}
            >
              {" "}
              <SpotlightCard
                className="border-transparent bg-transparent"
                spotlightColor="rgba(105, 91, 196, 1)"
                spotlightSize={150}
              >
                {" "}
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex justify-between items-center p-5 text-left transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-[#695BC4]/20 hover:bg-[#27215B]/80 border border-transparent hover:border-[#695BC4]/20"
                      : "bg-[#695BC4]/20 hover:bg-[#27215B]/80 border border-transparent hover:border-[#695BC4]/20"
                  }`}
                  aria-expanded={activeIndex === index}
                >
                  <span className="z-10 font-medium text-lg text-white">
                    {item.question}
                  </span>
                  <div
                    className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-[#695BC4] text-white rotate-180"
                        : "bg-gray-100 text-[#312E41]"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="transition-transform duration-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />{" "}
                    </svg>
                  </div>
                </button>
              </SpotlightCard>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-white"
                  >
                    <div className="p-5 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>

                    {/* Visual elements for enhanced UI */}
                    <div className="px-5 pb-5 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#695BC4]"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#27215B]"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#695BC4]"></div>
                      </div>

                      <button className="text-sm text-[#695BC4] hover:text-[#27215B] flex items-center gap-1 transition-colors duration-300">
                        <span>Learn more</span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
