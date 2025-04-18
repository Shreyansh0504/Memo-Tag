import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2021",
    event: "Company Founded",
    detail: "Started with a vision to transform dementia care",
  },
  {
    year: "2022",
    event: "Prototype Developed",
    detail: "First working prototype tested with 50 families",
  },
  {
    year: "2023",
    event: "Clinical Trials",
    detail: "Partnered with 3 major hospitals for validation",
  },
  {
    year: "2024",
    event: "Product Launch",
    detail: "MemoTag available in US and EU markets",
  },
];

const Traction = () => {
  return (
    <section id="traction" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Traction
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            MemoTag is already making an impact in the lives of caregivers and
            patients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center"
          >
            <p className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              1,200+
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Families Using MemoTag
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center"
          >
            <p className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              87%
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Reduction in Missed Medications
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg text-center"
          >
            <p className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              $4.2M
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              In Funding Raised
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-600 dark:bg-blue-400 transform -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  } mb-8 md:mb-0`}
                >
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {milestone.detail}
                    </p>
                  </div>
                </div>
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="bg-blue-600 dark:bg-blue-400 text-white w-16 h-16 rounded-full flex items-center justify-center relative z-10">
                      <span className="text-xl font-bold">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;
