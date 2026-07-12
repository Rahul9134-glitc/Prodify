import { useMemo, useState } from "react";
import { FiSearch, FiHelpCircle, FiArrowLeft } from "react-icons/fi";
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
    <div className="mx-auto max-w-6xl p-6">

      {/* Hero Section */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 shadow-xl">

        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-white/20 p-4">
            <FiHelpCircle className="text-4xl text-white" />
          </div>

          <div>
            <h1 className="text-4xl font-bold text-white">
              Help Center
            </h1>

            <p className="mt-2 text-blue-100">
              Find answers to common questions and learn how to use
              Prodify effectively.
            </p>
          </div>
        </div>

      </div>

      {/* Search */}
      <div className="mt-8 rounded-2xl bg-[#1E293B] p-5 shadow-lg">

        <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-[#0F172A] px-4 py-4">

          <FiSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search any question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
          />

        </div>

        <p className="mt-4 text-sm text-gray-400">
          {filteredFaqs.length} Questions Found
        </p>

      </div>

      {/* FAQ List */}

      <div className="mt-8 space-y-5">

        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              category={item.category}
            />
          ))
        ) : (
          <div className="rounded-2xl bg-[#1E293B] p-12 text-center">

            <h2 className="text-2xl font-semibold text-white">
              No Results Found
            </h2>

            <p className="mt-3 text-gray-400">
              Try searching with different keywords.
            </p>

          </div>
        )}

      </div>

      {/* Bottom Card */}

      <div className="mt-10 rounded-3xl bg-[#1E293B] p-8 text-center shadow-lg">

        <h2 className="text-2xl font-bold text-white">
          Still Need Help?
        </h2>

        <p className="mt-3 text-gray-400">
          If you can't find your answer, you can always return to your
          dashboard and continue managing your tasks.
        </p>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          <FiArrowLeft />
          Back to Dashboard
        </button>

      </div>

    </div>
  );
};

export default HelpCenter;