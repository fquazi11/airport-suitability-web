'use client'
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import Button from "@/components/ui/Button"; // Ensure this path is correct
import Link from "next/link";
import { useState } from "react"; // Import useState for form handling

const ContractPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <ThemeProvider>
      <div className="fixed top-4 right-4">
              <ThemeToggle />
          </div>
          {/* Back Button Section */}
          <section className="mb-10 text-center">
              <Link href="/" className="text-blue-500 underline">
                  Back to Home
              </Link>
          </section><main className="min-h-screen p-8 transition-colors dark:bg-gray-90">
        <h1 className="text-6xl font-bold dark:text-white">Contact Us</h1>
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
      </main>
    </ThemeProvider>
  );
};

export default ContractPage; // Ensure you have a default export