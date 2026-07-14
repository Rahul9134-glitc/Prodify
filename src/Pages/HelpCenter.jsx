import { useMemo, useState } from "react";
import {
  FiSearch,
  FiHelpCircle,
  FiArrowLeft,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import FAQItem from "../components/help/FAQItem";
import { faqData } from "../data/faqData";

const HelpCenter = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const filteredFaqs = useMemo(() => {
    return faqData.filter(
      (item) =>
        item.question.toLowerCase().includes(search.toLowerCase()) ||
        item.answer.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="mx-auto max-w-7xl space-y-8">

      {/* Hero */}

      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-6 shadow-xl sm:p-10">

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur">
            <FiHelpCircle className="text-5xl text-white" />
          </div>

          <div>

            <h1 className="text-3xl font-bold text-white sm:text-5xl">
              Help Center
            </h1>

            <p className="mt-3 max-w-2xl text-sm text-blue-100 sm:text-lg">
              Find answers to frequently asked questions and learn
              how to use <span className="font-semibold">Prodify</span>
              like a pro.
            </p>

          </div>

        </div>

      </div>

      {/* Search */}

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg dark:border-slate-700 dark:bg-[#1E293B]">

        <div className="flex items-center gap-3 rounded-2xl border border-slate-300 bg-slate-50 px-4 py-4 dark:border-slate-600 dark:bg-[#0F172A]">

          <FiSearch className="text-xl text-gray-500 dark:text-gray-400" />

          <input
            type="text"
            placeholder="Search your question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-gray-900 outline-none placeholder:text-gray-500 dark:text-white"
          />

        </div>

        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          {filteredFaqs.length} Questions Found
        </p>

      </div>

      {/* FAQ */}

      <div className="space-y-5">

        {filteredFaqs.length ? (
          filteredFaqs.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              category={item.category}
            />
          ))
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center shadow-md dark:border-slate-700 dark:bg-[#1E293B]">

            <FiSearch className="mx-auto mb-5 text-6xl text-gray-400" />

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              No Results Found
            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Try searching with another keyword.
            </p>

          </div>
        )}

      </div>

      {/* Bottom */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg dark:border-slate-700 dark:bg-[#1E293B]">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">

          <FiHelpCircle className="text-3xl text-white" />

        </div>

        <h2 className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">
          Still Need Help?
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-500 dark:text-gray-400">
          Can't find what you're looking for? You can always go back
          to your dashboard and continue managing your productivity.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
        >
          <FiArrowLeft />
          Back to Dashboard
        </button>

      </div>

    </div>
  );
};

export default HelpCenter;