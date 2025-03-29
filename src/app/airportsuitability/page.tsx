'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import LeafletMap from "@/components/maps/LeafletMap";

const AirportSuitability = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
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

      {/* Hero Section with Map Overlay */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10">
              <div className="w-full h-full">
                <LeafletMap />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              AI-Powered Aviation Intelligence
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              Transform your flight operations with advanced airport suitability analysis
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="primary"
                className="px-8 py-4 text-lg bg-blue-500 hover:bg-blue-600 rounded-full hover:scale-105 transition-all"
              >
                Start Analysis
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-4 text-lg rounded-full border-blue-400 text-blue-400 hover:bg-blue-400/10"
              >
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Features Grid */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Powered by Advanced AI Technology
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500/50 transition-all"
              >
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Analytics Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">Real-time Airport Analytics</h2>
            <p className="text-gray-300">
              Get instant insights into airport conditions, weather patterns, and operational metrics
              with our advanced analytics dashboard.
            </p>
            <ul className="space-y-4 text-gray-300">
              {analyticsFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-xl overflow-hidden shadow-2xl border border-gray-700"
          >
            <LeafletMap className="w-full h-[400px]" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Aviation Operations?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join leading aviation companies using our AI-powered solutions
            </p>
            <Button 
              variant="secondary"
              className="px-8 py-4 text-lg bg-white text-blue-600 rounded-full hover:scale-105 transition-transform"
            >
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Feature data
const aiFeatures = [
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "Predictive Analytics",
    description: "AI-powered predictions for weather patterns and operational conditions."
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    title: "Safety Assessment",
    description: "Real-time safety scoring using multiple data points and AI analysis."
  },
  {
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    title: "Performance Metrics",
    description: "Comprehensive analytics dashboard for operational insights."
  }
];

const analyticsFeatures = [
  "Real-time weather monitoring",
  "Runway condition assessment",
  "Traffic pattern analysis",
  "Safety risk evaluation",
  "Operational efficiency metrics"
];

export default AirportSuitability;