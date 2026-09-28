import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
const workflowSteps = [
  {
    title: "Discovery",
    description: "Understanding your needs and goals to set a clear direction (zoom call)",
  },
  {
    title: "Template Selection/Design",
    description: "Selecting and developing templates and visuals that align with your brand.",
  },
  {
    title: "Site Development & Customization",
    description: "Setting up your WordPress site, adding your content, and customizing it to match your goals.",
  },
  {
    title: "Launch & Support",
    description: "Launching your website smoothly and providing support for updates and maintenance.",
  },
];


export function Workflow() {
  return (
    <section id="workflow" className="bg-[#FAFAFA] py-20 px-6 md:px-16 lg:px-24">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">How I Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              className={`group bg-white p-6 rounded-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:bg-[#1C1C1C] transition-all duration-300 cursor-pointer ${index % 2 === 0 ? "md:justify-self-start" : "md:justify-self-end"}`}
            >
              <div className="flex items-center gap-4 mb-4">
                {/* Circle Number */}
                <div className="w-8 h-8 flex items-center justify-center border-3 border-[#1C1C1C] rounded-full font-bold text-[#1C1C1C] group-hover:text-[#FFC300] group-hover:border-[#FFC300] transition-all duration-300">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-semibold text-[#1C1C1C] group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h3>
              </div>
              <p className="text-[#333333] group-hover:text-neutral-300 transition-colors duration-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={itemVariants}
          className="mt-20 bg-[#1C1C1C] text-white p-12 rounded-[10px] text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Let’s Make Your Business Stand Out</h3>
          <p className="mb-6 text-[#E0E0E0]">
           Stand out from your competitors with a website that truly represents your business.
          </p>
          <Link
            href="/contactus"
            className="inline-block bg-[#FFC300] hover:bg-[#e6b200] text-[#1C1C1C] font-semibold py-3 px-6 rounded-[8px] transition-all duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
    </section>
    
  );
}

export default Workflow;
