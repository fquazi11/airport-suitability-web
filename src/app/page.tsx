import Image from "next/image";
import LeafletMap from "@/components/maps/LeafletMap";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
export default function HomePage() {
  return (
    <main className="min-h-screen p-8 transition-colors dark:bg-gray-90">
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>
      <section className="mb-10 text-center">
        <h1 className="text-8xl font-bold text-2xl font-bold dark:text-white">Airport Suitability Solution</h1>
        <p className="text-lg mt-4">
          Optimize Your Flight Planning with AI-Powered Airport Suitability Analysis.
        </p>
        {/* <Button variant="primary" className="mt-4">Request API Access</Button>
        <Button>Default Button</Button>
        <Button variant="secondary" className="text-gray-700 bg-white"  size="sm">Small Secondary</Button>
        <Button variant="outline" className="text-black bg-white" size="sm" isLoading>Loading</Button> */}
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Request API Access</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button isLoading>Loading Button</Button>
        </div>
      </section>

      <section className="mt-10">
        <LeafletMap />
      </section>

      {/* Add additional sections: How it Works, Benefits, etc. */}
    </main>
  );
}