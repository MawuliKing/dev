"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch (err) {
      setError("Network error.");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <div>
        <label
          htmlFor="name"
          className="block font-medium mb-1 text-gray-600 dark:text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border-0 border-b border-gray-300 dark:border-gray-700 bg-transparent px-0 py-2 focus:outline-none focus:ring-0 text-gray-600 dark:text-gray-300 rounded-none"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block font-medium mb-1 text-gray-600 dark:text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border-0 border-b border-gray-300 dark:border-gray-700 bg-transparent px-0 py-2 focus:outline-none focus:ring-0 text-gray-600 dark:text-gray-300 rounded-none"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block font-medium mb-1 text-gray-600 dark:text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border-0 border-b border-gray-300 dark:border-gray-700 bg-transparent px-0 py-2 focus:outline-none focus:ring-0 text-gray-600 dark:text-gray-300 rounded-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded px-4 py-2 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition disabled:opacity-50 outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-green-600 dark:text-green-400 text-sm mt-2">
          Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 dark:text-red-400 text-sm mt-2">{error}</p>
      )}
    </form>
  );
}
