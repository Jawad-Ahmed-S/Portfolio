import React from "react";
import { motion } from "framer-motion";
import { Code, PenTool, RefreshCw, Settings, ShoppingCart } from "lucide-react";
import Link from 'next/link'
const services = [
  {
    title: "Landing Page Development",
    description: "Crafting high-converting, mobile-friendly landing pages that grab attention and drive results.",
    icon: <PenTool size={32} />,
  },
  {
    title: "Portfolio Website Creation",
    description: "Designing clean, modern portfolios that showcase your work and make a lasting impression.",
    icon: <Code size={32} />,
  },
  {
    title: "Website Redesigns",
    description: "Refreshing outdated websites with sleek, responsive designs that match today’s standards.",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "Website Maintenance",
    description: "Keeping your website smooth, secure, and always up-to-date so you can focus on your business.",
    icon: <Settings size={32} />,
  },
  {
    title: "E-commerce Store Setup",
    description: "Building beautiful, user-friendly online stores to help you sell with confidence.",
    icon: <ShoppingCart size={32} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function Services() {
  return (
    <section id="services" className="bg-[#FAFAFA] py-20 px-6 md:px-16 lg:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          
          <h2 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6">
            My Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white p-8 rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:bg-[#1C1C1C] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#1C1C1C] group-hover:text-[#FFC300] transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#1C1C1C] group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-[#333333] group-hover:text-neutral-300 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call-To-Action Box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={itemVariants}
          className="mt-20 bg-[#1C1C1C] text-white p-12 rounded-[10px] text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Not sure if I can handle your project?</h3>
          <p className="mb-6 text-[#E0E0E0]">
            Feel free to reach out and let’s see if we’re a good fit. I’m happy to discuss your unique needs.
          </p>
          <Link
            href="/contactus"
            className="inline-block bg-[#FFC300] hover:bg-[#e6b200] text-[#1C1C1C] font-semibold py-3 px-6 rounded-[8px] transition-all duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
