"use client";

import { motion } from "framer-motion";
import { Heart, Link2, Mail, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: "#0a0a12" }}>
      {/* Top Border Gradient */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              <span className="gradient-text-glow">O</span>
              <span className="text-white">jasvie</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Digital Marketing Professional specializing in Social Media Management,
              SEO, and Creative Content Strategy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-4 transition-all duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:ojasvie12@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-all">
                    <Mail size={18} />
                  </div>
                  ojasvie12@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918295152733"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500/20 to-red-500/20 flex items-center justify-center group-hover:from-pink-500 group-hover:to-red-500 transition-all">
                    <Phone size={18} />
                  </div>
                  8295152733
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/ojasvie-nagpal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500 group-hover:to-blue-500 transition-all">
                    <Link2 size={18} />
                  </div>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-gray-400 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Made with <Heart className="text-red-500" size={18} fill="currentColor" /> by
            <span className="gradient-text font-semibold">Ojasvie</span>
          </motion.p>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All Rights Reserved
          </p>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
