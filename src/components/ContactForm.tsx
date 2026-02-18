import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent!");
          form.current?.reset();
        },
        () => setStatus("Failed to send message.")
      );
  };

  return (
    <motion.div
      className="max-w-lg mx-auto my-5 border p-6 rounded-2xl shadow-lg"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Contact Me
      </h2>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">

        {/* Name */}
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--text-color)",
          }}
        />

        {/* Email */}
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--text-color)",
          }}
        />

        {/* Title / Subject */}
        <input
          type="text"
          name="email_subject"
          placeholder="Title / Subject"
          required
          className="p-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--text-color)",
          }}
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="p-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--text-color)",
          }}
        />

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-lg border transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            backgroundColor: "var(--bg-color)",
            borderColor: "var(--text-color)",
          }}
        >
          Send Message
        </motion.button>
      </form>

      {/* Status message */}
      {status && (
        <motion.p
          className="mt-4 text-center dark:text-gray-400 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {status}
        </motion.p>
      )}
    </motion.div>
  );
};

export default ContactForm;
