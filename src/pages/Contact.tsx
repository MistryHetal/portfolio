import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { profile } from "../data/portfolio";
export function Contact() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name"));
    const email = String(data.get("email"));
    const message = String(data.get("message"));
    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!service || !template || !key) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`,
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("Your email app should open with your message ready to send.");
      return;
    }
    try {
      setBusy(true);
      await emailjs.sendForm(service, template, form, { publicKey: key });
      setStatus("Thanks! Your message has been sent.");
      form.reset();
    } catch {
      setStatus("Could not send your message. Please email me directly.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <section className="section container page-top">
      <div className="section-heading">
        <span className="eyebrow">LET'S CONNECT</span>
        <h1>
          Let's make something
          <br />
          <span className="gradient-text">great together.</span>
        </h1>
        <p>Have an opportunity or a question? Send me a message.</p>
      </div>
      <div className="contact-layout">
        <div className="contact-details">
          <h2>Get in touch</h2>
          <p>
            I'm happy to connect about full-stack roles, collaborations and
            interesting ideas.
          </p>
          <a href={`mailto:${profile.email}`}>
            <Mail />
            {profile.email}
          </a>
          <span>
            <MapPin />
            {profile.location}
          </span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin />
            LinkedIn profile
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github />
            GitHub profile
          </a>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <label>
            Your name
            <input name="name" required placeholder="Jane Smith" />
          </label>
          <label>
            Email address
            <input
              name="email"
              type="email"
              required
              placeholder="jane@example.com"
            />
          </label>
          <label>
            Your message
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me a little about your project..."
            />
          </label>
          <button className="button" type="submit" disabled={busy}>
            {busy ? "Sending..." : "Send message"} <Send size={16} />
          </button>
          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
