'use client';
import { motion } from 'framer-motion';
import { FaUsers, FaCog, FaBolt, FaChartPie } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#1A1F36] rounded-2xl p-6 shadow-lg flex flex-col items-center text-center text-white">
      <motion.div
        className="text-4xl mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default function FeaturesSection() {
  return (
    <section className="bg-[#0E1320] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">
          Feature packed to make <br />
          <span className="text-blue-400">Digital marketing easier and affordable.</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Experience Intelligent Features to optimize your marketing efforts.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <FeatureCard 
          icon={<FaUsers className="text-blue-400" />} 
          title="Reach Target Audience"
          description="Connect with the perfect audience using AI-driven targeting techniques, maximizing impact with minimal effort."
        />
        <FeatureCard 
          icon={<FaCog className="text-purple-400" />} 
          title="Marketing made Easier"
          description="Save time with automated workflows that handle the heavy lifting, allowing you to focus on creativity."
        />
        <FeatureCard 
          icon={<FaBolt className="text-yellow-400" />} 
          title="Intelligent Agents to Optimize your Reach"
          description="AI-powered agents refine your marketing strategy in real-time, ensuring optimal reach and engagement."
        />
      </div>
      <div className="mt-8 flex justify-center">
        <FeatureCard 
          icon={<FaChartPie className="text-green-400" />} 
          title="Smart Marketing Insights"
          description="Gain data-driven insights for smarter decision-making, staying ahead of trends and optimizing campaigns."
        />
      </div>
    </section>
  );
}
