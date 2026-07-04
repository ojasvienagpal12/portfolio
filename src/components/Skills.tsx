"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Share2,
  Video,
  FileText,
  Search,
  Bot,
  BarChart3,
  MapPin,
  Target,
} from "lucide-react";

const skills = [
  {
    icon: Palette,
    name: "Creative Portfolio",
    highlight: "500+ Marketing Creatives",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Share2,
    name: "Social Media",
    highlight: "20+ Brands Managed",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: Video,
    name: "Video Editing",
    highlight: "Reels & Promos",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: FileText,
    name: "Content Strategy",
    highlight: "Scripts & Calendars",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Search,
    name: "SEO Optimization",
    highlight: "On-Page & Off-Page",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Bot,
    name: "AI Marketing",
    highlight: "AI Content Creation",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    name: "Analytics",
    highlight: "Google & Meta Insights",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: MapPin,
    name: "Google Business",
    highlight: "Local SEO",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Target,
    name: "Meta Ads",
    highlight: "Campaign Management",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden gradient-bg" ref={ref}>
      {/* Background */}
      <motion.div
        className="absolute right-0 top-20 w-96 h-96 bg-pink-600 blob opacity-20"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-2 text-white">CREATIVE</h2>
          <h3 className="text-5xl md:text-6xl font-bold gradient-text-glow mb-4">
            SKILLS
          </h3>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto italic">
            &quot;Good content isn&apos;t just seen, it&apos;s saved, shared, and remembered.&quot;
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 card-hover group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <skill.icon className="text-white" size={28} />
              </div>
              <h4 className="font-bold text-white text-lg mb-1">{skill.name}</h4>
              <p className={`text-sm bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-medium`}>
                {skill.highlight}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
