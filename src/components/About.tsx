"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Lightbulb,
  Target,
  RefreshCw,
  Users,
  Search,
  TrendingUp,
  Download,
} from "lucide-react";

const values = [
  { icon: Lightbulb, name: "Creativity", color: "from-purple-500 to-pink-500" },
  { icon: Target, name: "Strategy", color: "from-pink-500 to-red-500" },
  { icon: RefreshCw, name: "Consistency", color: "from-cyan-500 to-blue-500" },
  { icon: Users, name: "Team Collaboration", color: "from-green-500 to-teal-500" },
  { icon: Search, name: "Detail-Oriented", color: "from-yellow-500 to-orange-500" },
  { icon: TrendingUp, name: "Result-Driven", color: "from-indigo-500 to-purple-500" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden gradient-bg" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        className="absolute -left-40 top-1/2 w-80 h-80 bg-purple-600 blob opacity-20"
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-2 text-white">ABOUT</h2>
            <h3 className="text-5xl md:text-6xl font-bold gradient-text-glow mb-8">
              ME
            </h3>

            <p className="text-3xl font-light text-purple-300 mb-6 italic">
              Hello, I&apos;m Ojasvie
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I am an aspiring <span className="text-purple-400 font-semibold">Digital Marketing Professional</span> with
              practical experience in Social Media Management, SEO, Creative Designing,
              Content Strategy, AI-powered Marketing, and Digital Advertising.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Throughout my journey, I have worked with <span className="text-pink-400 font-semibold">20+ businesses</span> across
              different industries, helping them strengthen their digital presence through
              creative content, social media management, and marketing strategies.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="btn-primary text-white px-8 py-3 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Connect
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download="Ojasvie_Resume.pdf"
                className="btn-outline text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8">
              <h4 className="text-2xl font-bold mb-8 text-center">
                <span className="gradient-text-glow">MY VALUES</span>
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="glass rounded-xl p-4 card-hover"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-3`}>
                      <value.icon className="text-white" size={24} />
                    </div>
                    <span className="text-white font-medium text-sm">
                      {value.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
