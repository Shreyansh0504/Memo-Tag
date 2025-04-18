import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "MemoTag has given me peace of mind knowing my father is safe while maintaining his independence.",
    author: "Sarah Johnson",
    role: "Caregiver",
  },
  {
    quote:
      "As a neurologist, I've seen firsthand how MemoTag improves medication adherence and reduces hospital visits.",
    author: "Dr. Michael Chen",
    role: "Neurologist",
  },
  {
    quote:
      "The activity tracking has helped us identify patterns in my mother's behavior we never noticed before.",
    author: "David Martinez",
    role: "Family Member",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Caregivers & Professionals
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from those who've experienced the MemoTag difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
