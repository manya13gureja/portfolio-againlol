'use client'
import React from "react";
import { motion } from "framer-motion";

const articles = [
  {
    img: "https://via.placeholder.com/300x200",
    title: "PAIRING THE UNCOMMON AT RESTAURANT DS",
    text: "A little imbalance can enhance flavor. In our restaurant...",
  },
  {
    img: "https://via.placeholder.com/300x200",
    title: "A BRIEF CONSULTATION WITH IDENTIFIED PATIENT",
    text: "We caught up with the Amsterdam-based artist recently...",
  }
];

export const FeatureArticles: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6 mt-8">
      {articles.map((a, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <img src={a.img} alt={a.title} className="w-full h-auto mb-2" />
          <h3 className="text-fluid font-bold uppercase mb-2">{a.title}</h3>
          <p className="text-fluid">{a.text}</p>
        </motion.div>
      ))}
    </div>
  );
};