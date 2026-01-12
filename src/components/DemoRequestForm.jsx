import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function DemoRequestForm() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_wrr50kj",
        "template_gjk028k",
        formRef.current,
        "Pqbhn7rcJfPC1r29-"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section id="Contact" className="py-24 bg-gradient-to-br bg-blue-100 text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl text-indigo-900 md:text-4xl font-bold mb-4">
          Transform Your School’s Digital Experience
        </h2>
        <p className="text-slate-600 mb-12">
          Join forward-thinking institutions replacing heavy bags with the EAK
          Pustak System.
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white text-slate-800 rounded-2xl p-8 max-w-3xl mx-auto shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field label="School Name" name="school_name" placeholder="e.g. St. Xavier's High School" />
            <Field label="Your Name" name="name" placeholder="Principal or Administrator" />
            <Field label="Contact Number" name="phone" placeholder="+91 98765 43210" />
            
            <div>
              <label className="block text-sm font-semibold mb-2">
                Student Count
              </label>
              <select
                name="student_count"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500"
              >
                <option>100 - 500</option>
                <option>500 - 1000</option>
                <option>1000+</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)"
            }}
            className="w-full mt-8  hover:bg-black-600 text-white font-bold py-4 rounded-xl transition disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Request Live Demo"}
          </button>

          <p className="text-xs text-slate-400 mt-4">
            🔒 Your data is secure. No spam policy.
          </p>

          {status === "success" && (
            <p className="text-green-600 mt-3 font-semibold">
              ✅ Request sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-3 font-semibold">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

const Field = ({ label, name, placeholder }) => (
  <div>
    <label className="block text-sm font-semibold mb-2">
      {label}
    </label>
    <input
      required
      name={name}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500"
    />
  </div>
);
