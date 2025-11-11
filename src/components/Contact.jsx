import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (You can connect EmailJS later)");
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 text-white flex flex-col items-center"
    >
      {/* Header (minimal animation) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-3 text-cyan-400">Contact Me</h2>
        <p className="text-gray-400">
          Fill out the form below to get in touch with me.
        </p>
      </motion.div>

      {/* Content wrapper */}
      <div className="w-full max-w-6xl px-6 md:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* SVG Illustration — hidden on small screens */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex justify-center w-1/2"
        >
          <img
            src="/src/assets/contact1.svg"
            alt="Contact Illustration"
            className="w-4/5 max-w-md object-contain"
          />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full md:w-1/2 bg-black/40 border border-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-5 text-left"
          >
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-200">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-gray-200 focus:outline-none focus:border-cyan-400 transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-200">
                Email
              </label>
              <input
                type="email"
                placeholder="me@example.com"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-gray-200 focus:outline-none focus:border-cyan-400 transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-200">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-gray-200 focus:outline-none focus:border-cyan-400 transition resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
