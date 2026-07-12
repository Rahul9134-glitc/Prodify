import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQItem = ({ question, answer, category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700 bg-[#1E293B] transition">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <div>

          <span className="mb-2 inline-block rounded-full bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-400">
            {category}
          </span>

          <h3 className="mt-2 text-lg font-semibold text-white">
            {question}
          </h3>

        </div>

        <FiChevronDown
          className={`text-xl text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-700 px-6 py-5 text-gray-300">
            {answer}
          </div>
        </div>
      </div>

    </div>
  );
};

export default FAQItem;