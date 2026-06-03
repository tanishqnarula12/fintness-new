"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Wealth Management",
    questions: [
      { q: "What is the minimum investment required?", a: "The investment amount depends on your financial goals and planning requirements." },
      { q: "How often is my portfolio reviewed?", a: "Portfolios are reviewed periodically and whenever significant life or market events occur." },
      { q: "Will my investments be actively monitored?", a: "Yes. We continuously review portfolio performance and suitability." },
    ]
  },
  {
    category: "Investment Planning",
    questions: [
      { q: "How much should I invest every month?", a: "The amount depends on your goals, timeline, and existing assets." },
      { q: "Should I invest through SIP or lump sum?", a: "Both can be effective depending on your financial situation and market conditions." },
      { q: "Can I modify my investments later?", a: "Yes. Investment strategies should evolve as your needs change." },
    ]
  },
  {
    category: "Risk Mitigation",
    questions: [
      { q: "How much life insurance do I need?", a: "Coverage depends on your income, liabilities, goals, and family responsibilities." },
      { q: "Is health insurance necessary if my employer provides coverage?", a: "Employer health insurance offers valuable coverage, but it is linked to your employment. Having your own health insurance policy ensures continuous protection regardless of job changes and provides greater long-term security." },
      { q: "When should I review my insurance?", a: "At least annually or after major life events." },
    ]
  },
  {
    category: "Tax Optimization",
    questions: [
      { q: "Can tax planning be done throughout the year?", a: "Yes. Effective tax planning should be a year-round activity." },
      { q: "Does tax saving mean locking money for long periods?", a: "Not necessarily. Different solutions offer varying levels of flexibility." },
      { q: "Can tax planning improve investment returns?", a: "Tax-efficient investing can enhance overall post-tax wealth creation." },
    ]
  },
  {
    category: "Loan Against Securities",
    questions: [
      { q: "Which securities are eligible?", a: "Eligible securities typically include approved mutual funds, listed shares (stocks), bonds, and other investments as per the lender's approved list." },
      { q: "Do I have to sell my investments?", a: "No. Your investments remain in place as collateral." },
      { q: "How quickly can funds be received?", a: "Once the securities are pledged and the required formalities are completed, the loan amount can often be disbursed within as little as 30 minutes, subject to lender processes and operational timelines." },
    ]
  }
];

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
        onClick={onClick}
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-800'}`}>
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 text-base leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">Find answers to common questions about our wealth management services.</p>
        </div>

        <div className="space-y-12">
          {faqs.map((category, catIdx) => (
            <div key={catIdx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-1.5 h-6 bg-blue-500 rounded-full mr-3"></span>
                {category.category}
              </h3>
              <div>
                {category.questions.map((q, qIdx) => {
                  const id = `${catIdx}-${qIdx}`;
                  return (
                    <AccordionItem
                      key={qIdx}
                      question={q.q}
                      answer={q.a}
                      isOpen={openIndex === id}
                      onClick={() => toggle(id)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
