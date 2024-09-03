"use client";

import { submitComment } from "@/utils/notion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await submitComment(formData);

      if (response) {
        console.log("Form submitted successfully");
        e.target.reset();
        setFormData({ email: "", message: "" });
      } else {
        console.error("Failed to submit form");
        alert("Failed to submit form, please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <form className="flex flex-col text-sm" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white mb-2">
          電子郵件
        </label>
        <input
          id="email"
          type="email"
          placeholder="請輸入電子郵件..."
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:outline-denim-600"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-white mb-2">
          留言
        </label>
        <textarea
          id="message"
          placeholder="請輸入留言..."
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:outline-denim-600"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-denim-600 hover:bg-denim-700 hover:shadow text-sm text-white px-4 py-2 rounded-md w-fit max-w-full md:ml-auto"
      >
        送出
      </button>
    </form>
  );
}
