// import Image from "next/image";
import { ThemeProvider } from "@/components/ThemeProvider";
import LeafletMap from "@/components/maps/LeafletMap";
import Button from "@/components/ui/Button";
// import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

const AirportSuitability = () => {
  return (
    <ThemeProvider>
    <main className="min-h-screen p-8 transition-colors dark:bg-gray-90">
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Back Button Section */}
      <section className="mb-10 text-center">
        <Link href="/" className="text-blue-500 underline">
          Back to Home
        </Link>
      </section>

      {/* Hero Section */}
      <section className="mb-10 text-center">
        <h1 className="text-8xl font-bold">Airport Suitability Solution</h1>
        <p className="text-lg mt-4">
          Optimize Your Flight Planning with AI-Powered Airport Suitability Analysis.
        </p>
        <Button variant="primary" className="mt-4">Get in Touch</Button>
      </section>

      {/* Maximize Efficiency Section */}
      <section className="mt-10 text-center">
        <h2 className="text-4xl font-bold">Maximize Efficiency, Minimize Risk</h2>
        <p className="mt-4">
          Airport suitability is critical for <strong>flight planning, cargo operations, and airline route optimization</strong>. Our <strong>AI-driven airport suitability solution</strong> provides real-time insights into airport performance, infrastructure constraints, regulatory compliance, and operational risks.
        </p>
        <p className="mt-4">
          Harness the power of <strong>machine learning, geospatial intelligence, and historical performance analysis</strong> to make informed airport selection decisions.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="mt-10">
        <h2 className="text-4xl font-bold text-center">How It Works</h2>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">1. AI-Powered Airport Scoring</h3>
          <p>We analyze <strong>over 100 parameters</strong> to determine an airport&apos;s suitability for your operations, including:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Runway length & surface condition</li>
            <li>Weather patterns & historical delays</li>
            <li>Ground handling & cargo infrastructure</li>
            <li>Regulatory restrictions & NOTAMs</li>
            <li>Fuel availability & pricing trends</li>
          </ul>
          <p className="mt-2">Each airport receives an <strong>AI-calculated suitability score</strong>, helping airlines and operators make data-driven choices.</p>

          <h3 className="text-2xl font-semibold mt-6">2. Real-Time Geospatial Mapping</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Integrates with GeoServer to provide interactive airport suitability maps.</li>
            <li>Live NOTAMs & METAR data for up-to-date operational conditions.</li>
            <li>Predictive congestion models to forecast airspace and ground delays.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">3. Dynamic Weather & Risk Analysis</h3>
          <ul className="list-disc list-inside mt-2">
            <li>AI models predict turbulence, storms, and crosswind risks affecting airport operations.</li>
            <li>Real-time alerts for adverse conditions impacting approach and departure.</li>
            <li>Automated alternate airport recommendations in case of disruptions.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">4. Cargo & Fuel Optimization</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Optimize cargo operations by selecting airports with the best handling facilities.</li>
            <li>Fuel tankering strategies based on real-time price fluctuations and operational costs.</li>
            <li>AI-driven cost simulations for strategic airport selection.</li>
          </ul>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="mt-10 text-center">
        <h2 className="text-4xl font-bold">Who Benefits?</h2>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Airlines & Cargo Operators</h3>
          <p>Reduce delays and improve operational efficiency. Identify cost-effective refueling and cargo handling locations.</p>

          <h3 className="text-2xl font-semibold mt-4">Business Aviation & Charter Services</h3>
          <p>Optimize airport selection for private flights. Ensure seamless executive travel with AI-driven recommendations.</p>

          <h3 className="text-2xl font-semibold mt-4">Flight Dispatch & Operations Teams</h3>
          <p>Make data-backed decisions on airport suitability. Minimize risks associated with weather and infrastructure limitations.</p>
        </div>
      </section>

      {/* Technology & Data Sources Section */}
      <section className="mt-10">
        <h2 className="text-4xl font-bold text-center dark:text-white">Technology & Data Sources</h2>
        <ul className="list-disc list-inside mt-6">
          <li>GeoServer & PostGIS for real-time spatial analysis.</li>
          <li>Machine learning models for airport suitability scoring.</li>
          <li>Integration with global NOTAMs, METAR/TAF, and ADS-B data.</li>
          <li>Predictive analytics powered by AI-driven simulations.</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="mt-10 text-center">
        <h2 className="text-4xl font-bold dark:text-white">Ready to Optimize Your Flight Operations?</h2>
        <p className="mt-4">Get in touch with us to explore how our <strong>AI-powered Airport Suitability solution</strong> can enhance your <strong>flight planning, cargo operations, and cost efficiency</strong>.</p>
        <Button variant="primary" className="mt-4">Contact us today!</Button>
      </section>

      <section className="mt-10">
        <LeafletMap />
      </section>

      {/* Footer Section */}
      <footer className="mt-10 text-center">
        <p>Contact us at: info@airportsuitability.com</p>
        <p>© 2025 AirportSuitability</p>
      </footer>
    </main>
    </ThemeProvider>
  );
}

export default AirportSuitability;