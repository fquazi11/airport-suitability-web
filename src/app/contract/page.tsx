'use client'
import { useState } from "react"; // Import useState for form handling
import { Button } from "@/components/ui/Button"; // Assuming you have a Button component
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log({ name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

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
      <section className="mb-10 text-center">
        <h1 className="text-6xl font-bold dark:text-white">Contact Us</h1>
        <p className="mt-4">We'd love to hear from you! Please fill out the form below.</p>
      </section>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold dark:text-white">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold dark:text-white">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold dark:text-white">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
          />
        </div>

        <Button type="submit" variant="primary" className="mt-4">Send Message</Button>
      </form>

      <section className="mt-10 text-center">
        <h2 className="text-4xl font-bold dark:text-white">Contact Information</h2>
        <p className="mt-4">You can also reach us at:</p>
        <p className="mt-2">Email: <a href="mailto:info@airportsuitability.com" className="text-blue-500">info@airportsuitability.com</a></p>
        <p className="mt-2">Phone: <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a></p>
      </section>
    </main>
  );
}