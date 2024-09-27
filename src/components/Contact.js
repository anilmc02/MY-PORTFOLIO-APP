// src/components/Contact.js
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data to be sent to Web3 Forms
    const data = {
      access_key: "9af93ae9-7119-4317-8c70-7354d8b8b16f", // Your Web3 forms access key
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      // Send the form data to Web3 Forms using fetch API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form successfully submitted:", result);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form after successful submission
      } else {
        console.error("Form submission failed:", response.statusText);
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("Error during submission. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto relative">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send Message
          </button>

          {/* Back to Home Button after Submit Button with gap */}
          <a
            href="#home"
            className="block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Back to Home
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;
