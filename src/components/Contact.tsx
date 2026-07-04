"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Link2, Award, Download, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ojasvie12@gmail.com",
    href: "mailto:ojasvie12@gmail.com",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "8295152733",
    href: "tel:+918295152733",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jind, Haryana",
    href: null,
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "ojasvie-nagpal",
    href: "https://linkedin.com/in/ojasvie-nagpal",
    color: "from-cyan-500 to-blue-500",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden gradient-bg" ref={ref}>
      {/* Background */}
      <motion.div
        className="absolute right-0 bottom-0 w-96 h-96 bg-purple-600 blob opacity-20"
        animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute left-0 top-0 w-80 h-80 bg-pink-600 blob opacity-20"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text-glow mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-2xl text-gray-400 italic">
            Let&apos;s create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 glass rounded-2xl p-5 card-hover group"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-semibold text-lg">{item.value}</p>
                    </div>
                    <Send className="text-gray-500 ml-auto group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
                  </a>
                ) : (
                  <div className="flex items-center gap-4 glass rounded-2xl p-5">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-semibold text-lg">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Download Resume Button */}
            <motion.a
              href="/resume.pdf"
              download="Ojasvie_Resume.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="flex items-center justify-center gap-3 btn-primary text-white rounded-2xl p-5 w-full text-lg font-semibold mt-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={24} />
              Download My Resume
            </motion.a>
          </motion.div>

          {/* Certification Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30" />
            <div className="relative glass rounded-3xl p-8 overflow-hidden">
              {/* Shine effect */}
              <div className="absolute inset-0 shine" />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Award className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Certification</h3>
                  <p className="text-gray-400">Professional Achievement</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 mb-6">
                <p className="text-purple-300 mb-2 text-sm">Delhi Institute of Digital Marketing</p>
                <h4 className="text-2xl font-bold text-white mb-4">
                  Master in Digital Marketing
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold">
                    A+ Grade
                  </span>
                  <span className="text-gray-400 text-sm">ISO 9001 Certified</span>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-400 italic text-lg">
                  &quot;Passionate about learning. Committed to growing. Ready to contribute.&quot;
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border border-purple-500/30 rounded-full" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border border-pink-500/30 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
