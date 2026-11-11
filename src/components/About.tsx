
import { motion } from "motion/react";

import bluedart from "../assets/bluedart-512.png";
import dtdc from "../assets/DTDC-Tracking.jpg";
import delhivery from "../assets/Delhivery-logo-StartupTalky.jpg";
import logo from "../assets/aranyak.jpg";

import {
  ShieldCheck,
  Truck,
  MapPin,
  Clock3,
  Package,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

const partners = [
  {
    name: "DTDC",
    image: dtdc,
    description: "Courier & Express Delivery",
    number: "01",
  },
  {
    name: "Blue Dart",
    image: bluedart,
    description: "Express Logistics Network",
    number: "02",
  },
  {
    name: "Delhivery",
    image: delhivery,
    description: "Integrated Logistics Network",
    number: "03",
  },
];

const features = [
  {
    icon: Globe2,
    title: "Nationwide Reach",
    description:
      "Courier solutions connecting individuals and businesses across India.",
  },
  {
    icon: Clock3,
    title: "Convenient Pickup",
    description:
      "Doorstep pickup arrangements with pickup within 24 hours of booking.",
  },
  {
    icon: ShieldCheck,
    title: "Careful Handling",
    description:
      "Attention and care for your documents, parcels and business shipments.",
  },
  {
    icon: Truck,
    title: "Multiple Networks",
    description:
      "Access to established courier delivery networks through our partners.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#fafafa] py-24 text-neutral-900 transition-colors duration-300 dark:bg-[#141414] dark:text-white"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-red-100/50 blur-[120px] dark:bg-red-500/[0.06]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-yellow-100/60 blur-[120px] dark:bg-yellow-400/[0.04]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =================================
            ABOUT INTRODUCTION
        ================================== */}

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* Brand Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-red-100 via-yellow-50 to-orange-100 opacity-70 blur-2xl dark:from-red-500/10 dark:via-yellow-400/5 dark:to-orange-500/10" />

            <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-2xl shadow-neutral-900/[0.06] dark:border-neutral-800 dark:bg-[#1c1c1c] sm:p-12">

              {/* Brand Logo */}
              <div className="mx-auto flex h-52 w-52 items-center justify-center overflow-hidden rounded-3xl border border-neutral-100 bg-white p-3 dark:border-neutral-700 sm:h-64 sm:w-64">
                <img
                  src={logo}
                  alt="Aranyak Courier Service"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="mt-8 text-center">
                <h2 className="text-3xl font-black tracking-tight text-red-600 dark:text-red-500 sm:text-4xl">
                  ARANYAK
                </h2>

                <p className="mt-1 text-sm font-extrabold tracking-[3px] text-neutral-800 dark:text-white">
                  COURIER SERVICE
                </p>

                <div className="mt-4 flex items-center justify-center gap-3">
                  <span className="h-[2px] w-8 rounded-full bg-yellow-500" />

                  <p className="text-[10px] font-bold uppercase tracking-[2px] text-yellow-700 dark:text-yellow-400">
                    Your Courier, Our Responsibility
                  </p>

                  <span className="h-[2px] w-8 rounded-full bg-yellow-500" />
                </div>
              </div>

              {/* Decorative Bottom Strip */}
              <div className="mt-9 grid grid-cols-3 gap-2 border-t border-neutral-200 pt-6 dark:border-neutral-700">
                <div className="text-center">
                  <Package className="mx-auto text-red-600 dark:text-red-400" size={22} />
                  <p className="mt-2 text-[10px] font-bold text-neutral-500 dark:text-neutral-400">
                    PARCELS
                  </p>
                </div>

                <div className="text-center">
                  <Truck className="mx-auto text-red-600 dark:text-red-400" size={22} />
                  <p className="mt-2 text-[10px] font-bold text-neutral-500 dark:text-neutral-400">
                    SHIPPING
                  </p>
                </div>

                <div className="text-center">
                  <MapPin className="mx-auto text-red-600 dark:text-red-400" size={22} />
                  <p className="mt-2 text-[10px] font-bold text-neutral-500 dark:text-neutral-400">
                    DELIVERY
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Accent */}
            <div className="absolute -right-4 -top-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-white shadow-xl shadow-red-600/20">
              <Truck size={29} />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 dark:border-red-500/20 dark:bg-red-500/10">
              <span className="h-2 w-2 rounded-full bg-red-600" />

              <span className="text-[11px] font-bold uppercase tracking-[2px] text-red-700 dark:text-red-400">
                About Aranyak
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[58px]">
              Every Parcel Has
              <br />
              <span className="text-red-600 dark:text-red-500">
                A Destination.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-neutral-600 dark:text-neutral-400">
              Aranyak Courier Service is focused on making courier
              and parcel shipping simple, convenient and accessible.
              Whether it is an important document, a personal parcel
              or a business shipment, we help customers arrange
              deliveries through established courier networks.
            </p>

            <p className="mt-5 text-base leading-8 text-neutral-600 dark:text-neutral-400">
              With a focus on convenient doorstep pickup, careful
              parcel handling and nationwide delivery support,
              Aranyak aims to make every shipment a smoother
              experience for individuals and businesses.
            </p>

            {/* Brand Statement */}
            <div className="mt-9 border-l-4 border-yellow-400 bg-yellow-50/70 px-6 py-5 dark:bg-yellow-400/[0.06]">
              <p className="text-lg font-extrabold leading-relaxed text-neutral-900 dark:text-white">
                "Your Courier, Our Responsibility."
              </p>

              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Every shipment deserves attention, care and
                dependable delivery support.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =================================
            OUR DELIVERY PARTNERS
        ================================== */}

        <div className="mt-28">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 dark:border-yellow-400/20 dark:bg-yellow-400/10">
              <Truck size={15} className="text-yellow-700 dark:text-yellow-400" />

              <span className="text-[11px] font-bold uppercase tracking-[2px] text-yellow-800 dark:text-yellow-400">
                Our Delivery Network
              </span>
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Our Trusted
              <span className="text-red-600 dark:text-red-500">
                {" "}Delivery Partners.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-400">
              Aranyak works with established courier and logistics
              networks to provide shipping solutions for different
              delivery requirements.
            </p>
          </motion.div>

          {/* Partner Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl hover:shadow-red-900/[0.06] dark:border-neutral-800 dark:bg-[#1c1c1c] dark:hover:border-red-500/30 sm:p-9"
              >
                {/* Card Decoration */}
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-red-50 transition-transform duration-500 group-hover:scale-150 dark:bg-red-500/[0.05]" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-[2px] text-red-600 dark:text-red-400">
                      PARTNER {partner.number}
                    </span>

                    <ArrowUpRight
                      size={20}
                      className="text-neutral-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-600"
                    />
                  </div>

                  {/* Partner Logo */}
                  <div className="mt-8 flex h-36 items-center justify-center overflow-hidden rounded-2xl border border-neutral-100 bg-white p-5 dark:border-neutral-700">
                    <img
                      src={partner.image}
                      alt={`${partner.name} delivery partner logo`}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Partner Information */}
                  <div className="mt-7">
                    <h3 className="text-2xl font-extrabold tracking-tight">
                      {partner.name}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                      {partner.description}
                    </p>
                  </div>

                  <div className="mt-7 h-1 w-12 rounded-full bg-yellow-400 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =================================
            WHY ARANYAK
        ================================== */}

        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[2px] text-red-600 dark:text-red-400">
              The Aranyak Difference
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Shipping With Confidence.
            </h2>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-xl dark:border-neutral-800 dark:bg-[#1c1c1c]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white dark:bg-red-500/10 dark:text-red-400">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-lg font-extrabold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =================================
            CLOSING BRAND STATEMENT
        ================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-8 text-center dark:border-neutral-800 dark:bg-[#1c1c1c] sm:p-14"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-red-600 dark:bg-yellow-400/10 dark:text-yellow-400">
            <Package size={27} />
          </div>

          <h2 className="mt-7 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Connecting Every Delivery
            <br />
            <span className="text-red-600 dark:text-red-500">
              With Trust.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-neutral-500 dark:text-neutral-400">
            Aranyak Courier Service — Your trusted connection
            for personal parcels, business shipments and
            delivery solutions across India.
          </p>

          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-red-600 via-yellow-400 to-red-600" />
        </motion.div>

      </div>
    </section>
  );
};

export default About;
