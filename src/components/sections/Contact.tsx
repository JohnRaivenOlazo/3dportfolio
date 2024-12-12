import { useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e : any) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_eixtpe8", // EmailJS service ID
        "template_n0xjpv9", // EmailJS template ID
        form.current,
        "JJP4XUwcSe2OyYQpT" // EmailJS user ID (public key)
      ).then(
        (result) => {
          alert("Message sent successfully! 🚀");
          console.log(result.text);
        },
        (error) => {
          alert("An error occurred, please try again. ⚠");
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="text-white pb-20">
      <form ref={form} onSubmit={sendEmail} className="w-full rounded-lg shadow-lg text-sm">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-50 pb-2">Let's Connect.</h2>
      <p className="pb-6 sm:pb-8 text-sm text-gray-400">Have a <span className="text-gray-100">project</span> in mind or just want to say hi?</p>
        <div className="mb-4">
          <input
            type="text"
            name="to_name"
            className="w-full p-3 rounded bg-gray-800 shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="from_name"
            className="w-full p-3 rounded bg-gray-800 shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            rows={4}
            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>
        <button type="submit" className="text-md flex items-center gap-2 bg-gray-900 hover:bg-teal-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all transform hover:-translate-y-1">
          <FaPaperPlane className="text-lg" /> Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
