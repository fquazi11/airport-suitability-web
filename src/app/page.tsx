import Image from "next/image";
import LeafletMap from "@/components/maps/LeafletMap";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8 transition-colors dark:bg-red-300">
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="mb-10 text-center">
        <h1 className="text-8xl font-bold text-2xl font-bold">Airport Suitability Solution</h1>
        <p className="text-lg mt-4">
          Optimize Your Flight Planning with AI-Powered Airport Suitability Analysis.
        </p>
        <Button variant="outline" className="mt-4 bg-white dark:bg-red-800">
              <Link href="/partners">Get in Touch</Link>
            </Button>
      </section>

      {/* Products and Services Section */}
      <section className="mt-10 text-center">
        <h2 className="text-4xl font-bold">Our Products</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-6">
          <div className="border p-4 rounded-lg">
            <h3 className="text-2xl font-semibold">Airport Suitability</h3>
            <p>Optimize Your Flight Planning with AI-Powered Airport Suitability Analysis.</p>
            <Button variant="outline" className="mt-2">
              <Link href="/airportsuitability">Discover Airport Suitability</Link>
            </Button>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="text-2xl font-semibold">Upcoming Products</h3>
            <p>AI-Powered Products for the Aviation domain.</p>
            <Button variant="outline" className="mt-2">
              <Link href="/products">Discover Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <LeafletMap />
      </section>

      {/* Footer Section */}
      <footer className="mt-10 text-center">
        <p>Contact us at: info@airportsuitability.com</p>
        <p>© 2025 AirportSuitability</p>
      </footer>

      {/* Add additional sections: How it Works, Benefits, etc. */}
    </main>
  );
}