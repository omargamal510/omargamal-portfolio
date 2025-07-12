"use client";

import { useState } from "react";

interface formInputsTypes {
  label: string;
  placeholder: string;
  type: string;
}

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzjrqqj";

const formInputsData: formInputsTypes[] = [
  {
    label: "Name",
    placeholder: "Enter your name",
    type: "text",
  },
  {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    label: "Message",
    placeholder: "Enter your message",
    type: "text",
  },
];

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setisSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);

    setisSubmitting(true);

    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error sending message.");
      console.error(error);
    } finally {
      setisSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white flex-center flex-col gap-10 w-full md:w-2/3 px-12 py-10 nav-box-shadow rounded-lg"
    >
      {formInputsData.map(({ label, placeholder, type }, index) => (
        <div className="flex flex-col gap-2 w-full" key={index}>
          <label className="text-secondary-gray font-bold text-sm">
            {label}
          </label>
          {index === 2 ? (
            <textarea
              name="message"
              maxLength={500}
              className="text-sm outline-0 max-h-[400px] min-h-[200px] bg-gray-100 py-3 md:py-5 rounded-lg px-2 w-full"
              placeholder={placeholder}
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          ) : (
            <input
              required
              name={type === "email" ? "email" : "name"}
              className="text-sm outline-0 bg-gray-100 py-3 md:py-5 font-medium rounded-lg px-2 w-full"
              type={type}
              placeholder={placeholder}
              value={type === "email" ? form.email : form.name}
              onChange={handleChange}
            />
          )}
        </div>
      ))}

      <button className="bg-main-purple hover:opacity-75 transition-300 text-white px-20 py-3 rounded-lg cursor-pointer">
        {isSubmitting ? "..." : "Submit"}
      </button>
      {/* <Alert /> */}
    </form>
  );
};

export default ContactForm;
