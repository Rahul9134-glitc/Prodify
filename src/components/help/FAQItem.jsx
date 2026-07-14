import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQItem = ({ question, answer, category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-[#1E293B]">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
      >
        <div className="flex-1">

          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-600/20 dark:text-blue-400">
            {category}
          </span>

          <h3 className="mt-3 text-base font-semibold text-gray-900 dark:text-white sm:text-lg">
            {question}
          </h3>

        </div>

        <FiChevronDown
          className={`flex-shrink-0 text-2xl text-gray-500 transition-transform duration-300 dark:text-gray-400 ${
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
          <div className="border-t border-slate-200 px-5 py-5 text-sm leading-7 text-gray-600 dark:border-slate-700 dark:text-gray-300 sm:px-6 sm:text-base">
            {answer}
          </div>
        </div>
      </div>

    </div>
  );
};

export default FAQItem;