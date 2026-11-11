
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
  Headphones,
} from "lucide-react";

const Contact = () => {
  const phone = "7063166843";
  const email = "suryadeepdutta420@gmail.com";

  const contacts = [
    {
      title: "Call Us",
      detail: "+91 70631 66843",
      description: "Speak directly with us",
      icon: Phone,
      href: `tel:+91${phone}`,
      action: "Call Now",
    },
    {
      title: "WhatsApp",
      detail: "+91 70631 66843",
      description: "Message us for quick assistance",
      icon: MessageCircle,
      href: `https://wa.me/91${phone}`,
      action: "Chat Now",
    },
    {
      title: "Email Us",
      detail: email,
      description: "Send us your queries",
      icon: Mail,
      href: `mailto:${email}`,
      action: "Send Email",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-5 py-16 text-neutral-900 transition-colors dark:bg-[#101010] dark:text-white sm:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-9 text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-700 dark:bg-red-950/40 dark:text-red-400">
            <Headphones size={14} />
            We're here to help
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get in <span className="text-red-600">Touch</span>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-neutral-600 dark:text-neutral-400">
            Have a shipment inquiry or need assistance? Contact Aranyak
            Courier Service. We're happy to help.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.a
                key={contact.title}
                href={contact.href}
                target={contact.title === "WhatsApp" ? "_blank" : undefined}
                rel={contact.title === "WhatsApp" ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition-colors hover:border-red-300 hover:bg-red-50/50 dark:border-neutral-800 dark:bg-[#171717] dark:hover:border-red-900 dark:hover:bg-[#1d1717]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950/50 dark:text-red-400">
                    <Icon size={21} />
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="text-neutral-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-600"
                  />
                </div>

                <h3 className="text-lg font-bold">{contact.title}</h3>

                <p className="mt-1 break-all text-sm font-semibold text-red-600 dark:text-red-400">
                  {contact.detail}
                </p>

                <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                  {contact.description}
                </p>

                <div className="mt-5 border-t border-neutral-200 pt-3 text-sm font-semibold text-neutral-800 dark:border-neutral-800 dark:text-neutral-200">
                  {contact.action}
                  <span className="ml-2 text-red-600">→</span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="mt-7 text-center text-xs text-neutral-500 dark:text-neutral-500">
          Aranyak Courier Service · Your Courier, Our Responsibility.
        </p>
      </div>
    </section>
  );
};

export default Contact;
