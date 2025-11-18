// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import contactsvg from "../assets/contact.svg";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); // clear form
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to send message. Try again later.");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 text-white flex flex-col items-center"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-3 text-cyan-400">Contact Me</h2>
        <p className="text-gray-400">Fill out the form below to get in touch.</p>
      </motion.div>

      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12 overflow-hidden">

        {/* SVG — hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="hidden md:flex justify-center w-1/2"
        >
          <img
            src={contactsvg}
            alt="Contact Illustration"
            className="w-4/5 max-w-md"
          />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 bg-black/40 border border-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* Name */}
            <div>
              <label className="block text-sm mb-1 text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-gray-200 focus:border-cyan-400 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1 text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-gray-200 focus:border-cyan-400 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1 text-gray-300">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-gray-200 focus:border-cyan-400 outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold transition
                ${loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-cyan-500 hover:bg-cyan-600"
                }
              `}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
