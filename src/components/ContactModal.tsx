import { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8fe5905d-2fcf-46be-8b7a-7f3024b1997a",

          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,

          from_name: "Portfolio Contact Form",
          to: "sujayrout.cs@gmail.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Email failed:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-3xl bg-background p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Close contact form"
        >
          <X size={19} />
        </button>

        {/* Heading */}
        <div className="mb-6 pr-8">
          <h2 className="text-2xl font-bold">
            Let's Talk
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Have a question or want to get in touch?
            Send a message below.
          </p>
        </div>

        {sent ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle2
              size={48}
              className="text-green-500"
            />

            <h3 className="mt-4 text-xl font-semibold">
              Message Sent!
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Thanks for reaching out. I'll get back to you
              as soon as possible.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Name */}
            <div>
              <label className="mb-1.5 block text-sm font-medium">
                Name
              </label>

              <input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-1.5 block text-sm font-medium">
                Email
              </label>

              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-blue-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="mb-1.5 block text-sm font-medium">
                Subject
              </label>

              <input
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-1.5 block text-sm font-medium">
                Message
              </label>

              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-blue-500"
              />
            </div>

            {/* Send */}
            <button
              type="submit"
              disabled={isSending}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400"
            >
              {isSending ? "Sending..." : "Send Message"}

              {!isSending && (
                <Send
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
