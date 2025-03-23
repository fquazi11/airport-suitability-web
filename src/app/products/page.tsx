import Link from "next/link"; // Import Link from Next.js
import { Button } from "@/components/ui/Button"; // Assuming you have a Button component
import LeafletMap from "@/components/maps/LeafletMap";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function AirportSuitabilityAPI() {
  return (
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

      {/* Product Title Section */}
      <section className="mb-10 text-center">
        <h1 className="text-6xl font-bold">Airport Suitability API</h1>
        <h2 className="text-2xl mt-4">Unlock Smarter Flight Planning with AI-Powered Airport Suitability Insights</h2>
        <p className="mt-4">
          Our <strong>Airport Suitability API</strong> provides real-time, AI-driven insights to optimize airport selection, route planning, and operational efficiency. Designed for <strong>airlines, cargo operators, and flight planning systems</strong>, this API delivers predictive analytics and geospatial intelligence for informed decision-making.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="mt-10">
        <h2 className="text-4xl font-bold text-center">Key Features</h2>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold">1. AI-Powered Airport Scoring</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Advanced <strong>machine learning models</strong> analyze <strong>runway conditions, weather trends, NOTAMs, and infrastructure</strong> to provide a <strong>real-time airport suitability score</strong>.</li>
            <li>Optimized for <strong>airline operations, private aviation, and cargo logistics</strong>.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">2. Real-Time Data & Risk Analysis</h3>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Live NOTAMs, METAR/TAF, and ADS-B integration</strong> for up-to-date airport conditions.</li>
            <li><strong>AI-driven risk assessment</strong> for weather disruptions, congestion, and regulatory restrictions.</li>
            <li><strong>Predictive delay forecasting</strong> based on historical trends and live data.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">3. GeoServer Integration for Mapping & Visualization</h3>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Interactive maps</strong> displaying airport suitability rankings.</li>
            <li><strong>Real-time overlays</strong> for air traffic, terrain, and approach constraints.</li>
            <li><strong>Custom API endpoints</strong> for easy integration into <strong>existing flight planning software</strong>.</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">4. Fuel & Cost Optimization</h3>
          <ul className="list-disc list-inside mt-2">
            <li>AI-driven <strong>fuel tankering recommendations</strong> based on pricing trends and operational feasibility.</li>
            <li><strong>Cargo hub suitability analysis</strong> for selecting the most efficient airports.</li>
            <li><strong>Regulatory compliance automation</strong> to ensure seamless global operations.</li>
          </ul>
        </div>
      </section>

      {/* Who Uses the API Section */}
      <section className="mt-10">
        <h2 className="text-4xl font-bold text-center">Who Uses the Airport Suitability API?</h2>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Airlines & Flight Planners</h3>
          <p>Optimize <strong>route selection and alternate airport planning</strong>. Reduce fuel costs and minimize disruptions.</p>

          <h3 className="text-2xl font-semibold mt-4">Cargo & Logistics Operators</h3>
          <p>Identify <strong>cost-efficient cargo hubs</strong> with AI-driven insights. Predict and mitigate <strong>airport congestion issues</strong>.</p>

          <h3 className="text-2xl font-semibold mt-4">Business Aviation & Private Jet Operators</h3>
          <p>Access real-time <strong>airport suitability scores</strong> for <strong>seamless executive travel</strong>. Ensure optimal airport selection for VIP operations.</p>

          <h3 className="text-2xl font-semibold mt-4">Aviation Software Developers</h3>
          <p>Integrate real-time <strong>airport analytics</strong> into existing <strong>flight planning systems</strong>. Enhance aviation applications with <strong>AI-driven geospatial insights</strong>.</p>
        </div>
      </section>

      {/* Integration & Performance Section */}
      <section className="mt-10">
        <h2 className="text-4xl font-bold text-center">Seamless Integration & Scalable Performance</h2>
        <ul className="list-disc list-inside mt-6">
          <li><strong>RESTful API</strong> for easy integration with aviation platforms.</li>
          <li>Supports <strong>real-time queries</strong> with <strong>high-speed response times</strong>.</li>
          <li><strong>Cloud-based deployment</strong> for global scalability.</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="mt-10 text-center">
        <h2 className="text-4xl font-bold">Get Started Today</h2>
        <p className="mt-4">Enhance your flight operations with <strong>AI-powered airport suitability insights</strong>. Contact us to access the <strong>Airport Suitability API</strong> and revolutionize your <strong>aviation decision-making</strong>.</p>
        <Button variant="primary" className="mt-4">Request API Access</Button>
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
  );
}