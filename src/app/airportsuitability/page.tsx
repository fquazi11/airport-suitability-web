'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

const AirportSuitability = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Back Button Section */}
      <section className="fixed top-8 left-8 z-50">
        <Link href="/">
          <motion.div
            className="group flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary transition-colors bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl"
            whileHover={{ x: -5 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg 
              className="w-5 h-5 transform transition-transform group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="font-medium">Back to Home</span>
          </motion.div>
        </Link>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/airport-hero.jpg"
              alt="Airport Background"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Airport Suitability Analysis
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Make informed decisions with our comprehensive airport analysis tools
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg shadow-lg bg-white"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Tools Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Analysis Tools</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <Button variant="outline" className="mt-2">Learn More</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Join us in revolutionizing airport suitability analysis with AI-powered insights.
          </p>
          <Button 
            variant="secondary"
            className="px-8 py-4 text-lg rounded-full hover:scale-105 transition-transform"
          >
            Start Analysis
          </Button>
        </div>
      </section>
    </div>
  );
};

// Feature data
const features = [
  {
    icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/></svg>,
    title: "Real-time Analysis",
    description: "Get instant insights into airport suitability with our advanced AI algorithms."
  },
  {
    icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/></svg>,
    title: "Collaborative Planning",
    description: "Work together with your team to make informed decisions about airport operations."
  },
  {
    icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"/><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"/></svg>,
    title: "Data Visualization",
    description: "View comprehensive data visualizations and reports for better decision-making."
  }
];

// Tools data
const tools = [
  {
    title: "Runway Analysis",
    description: "Evaluate runway conditions, length requirements, and safety parameters."
  },
  {
    title: "Weather Impact",
    description: "Assess weather patterns and their impact on airport operations."
  },
  {
    title: "Traffic Analysis",
    description: "Analyze air traffic patterns and capacity utilization."
  },
  {
    title: "Safety Assessment",
    description: "Comprehensive safety analysis based on multiple parameters."
  }
];

export default AirportSuitability;