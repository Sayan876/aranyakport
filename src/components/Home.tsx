
import bluedart from "../assets/bluedart-512.png";
import dtdc from "../assets/DTDC-Tracking.jpg";
import delhivery from "../assets/Delhivery-logo-StartupTalky.jpg";
import logo from "../assets/aranyak.jpg";

import { motion } from "motion/react";

import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Clock3,
  ShieldCheck,
  Package,
  Truck,
} from "lucide-react";

const highlights = [
  { icon: MapPin, label: "All India Delivery" },
  { icon: Clock3, label: "Pickup Within 24 Hours" },
  { icon: ShieldCheck, label: "Careful Parcel Handling" },
];

const partners = [
  {
    name: "DTDC",
    image: dtdc,
    description: "Courier Network",
  },
  {
    name: "Blue Dart",
    image: bluedart,
    description: "Express Delivery",
  },
  {
    name: "Delhivery",
    image: delhivery,
    description: "Logistics Network",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-white pt-24 text-neutral-900 transition-colors duration-300 dark:bg-[#141414] dark:text-white"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-red-100/50 blur-[120px] dark:bg-red-500/[0.07]" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-yellow-100/60 blur-[120px] dark:bg-yellow-400/[0.05]" />

        <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-red-700 via-yellow-400 to-red-700" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 lg:px-10 lg:pt-14">

        {/* =================================
            MAIN BRAND IDENTITY
        ================================== */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:gap-7 sm:text-left"
        >
          {/* Aranyak Logo */}
          <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl border border-yellow-200 bg-white p-2 shadow-xl shadow-yellow-900/10 dark:border-neutral-700 dark:bg-neutral-800 sm:h-36 sm:w-36">
            <div className="absolute inset-0 rounded-2xl bg-yellow-400/10 blur-xl" />

            <img
              src={logo}
              alt="Aranyak Courier Service Logo"
              className="relative h-full w-full rounded-xl object-contain"
            />
          </div>

          {/* Brand Name */}
          <div>
            <h2 className="text-4xl font-black tracking-tight text-red-600 dark:text-red-500 sm:text-5xl lg:text-6xl">
              ARANYAK
            </h2>

            <p className="mt-1 text-lg font-extrabold tracking-wide text-neutral-800 dark:text-white sm:text-xl">
              COURIER SERVICE
            </p>

            <div className="mt-3 flex items-center justify-center gap-2 sm:justify-start">
              <span className="h-[2px] w-7 bg-yellow-500" />

              <p className="text-[10px] font-bold uppercase tracking-[2px] text-yellow-700 dark:text-yellow-400 sm:text-xs">
                Your Courier, Our Responsibility
              </p>

              <span className="h-[2px] w-7 bg-yellow-500" />
            </div>
          </div>
        </motion.div>

        {/* =================================
            HERO CONTENT
        ================================== */}

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT: MAIN CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Availability Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 dark:border-red-500/20 dark:bg-red-500/10">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-600" />

              <span className="text-[11px] font-bold tracking-wider text-red-700 dark:text-red-400">
                COURIER SERVICES ACROSS INDIA
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[64px]">
              Your Packages.
              <br />

              <span className="text-red-600 dark:text-red-500">
                Our Responsibility.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-neutral-600 dark:text-neutral-400 sm:text-lg">
              From important documents to personal parcels and
              business shipments, Aranyak makes sending packages
              across India simple with convenient pickup, careful
              handling and trusted delivery networks.
            </p>

            {/* Service Categories */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Personal Parcels",
                "Business Shipping",
                "E-commerce",
                "Documents",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#services"
                className="group inline-flex items-center gap-3 rounded-xl bg-red-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
              >
                Explore Services

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-7 py-4 text-sm font-bold text-neutral-800 transition-all duration-300 hover:border-red-500 hover:text-red-600 dark:border-neutral-700 dark:text-white dark:hover:border-red-500 dark:hover:text-red-400"
              >
                Contact Us

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="mt-12 grid grid-cols-1 gap-5 border-t border-neutral-200 pt-7 dark:border-neutral-800 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-red-600 dark:bg-yellow-400/10 dark:text-yellow-400">
                    <Icon size={19} />
                  </div>

                  <span className="text-xs font-bold text-neutral-600 dark:text-neutral-300">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* =================================
              RIGHT: DELIVERY PARTNERS
          ================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative Background */}
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-red-100 via-yellow-50 to-orange-100 opacity-70 blur-2xl dark:from-red-500/10 dark:via-yellow-400/5 dark:to-orange-500/10" />

            <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-2xl shadow-neutral-900/[0.06] dark:border-neutral-800 dark:bg-[#1c1c1c] sm:p-8">

              {/* Panel Heading */}
              <div className="mb-7 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[2px] text-red-600 dark:text-red-400">
                    Our Trusted Delivery Partners
                  </p>

                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                    Powered by Leading Networks
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                    Aranyak connects your shipments with established
                    courier partners for delivery across India.
                  </p>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-100 text-red-600 dark:bg-yellow-400/10 dark:text-yellow-400 sm:flex">
                  <Truck size={25} />
                </div>
              </div>

              {/* Delivery Partner Cards */}
              <div className="space-y-4">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.15,
                    }}
                    className="group flex min-h-[112px] items-center gap-5 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg dark:border-neutral-700 dark:bg-[#242424] dark:hover:border-red-500/40 dark:hover:bg-[#292929]"
                  >
                    {/* Partner Logo */}
                    <div className="flex h-[76px] w-[125px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-sm">
                      <img
                        src={partner.image}
                        alt={`${partner.name} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    {/* Partner Details */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-extrabold text-neutral-900 dark:text-white sm:text-xl">
                        {partner.name}
                      </h3>

                      <p className="mt-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        {partner.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-neutral-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-600"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Bottom Information */}
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-red-50 p-4 dark:bg-red-500/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400">
                  <Package size={21} />
                </div>

                <div>
                  <p className="text-sm font-bold text-neutral-900 dark:text-white">
                    One Destination. Multiple Networks.
                  </p>

                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                    Courier solutions for individuals and businesses.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =================================
            BOTTOM BRAND STATEMENT
        ================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-neutral-200 pt-7 text-center dark:border-neutral-800 sm:flex-row sm:text-left"
        >
          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            Connecting people and businesses, across India.
          </p>

          <p className="text-xs font-extrabold uppercase tracking-[2px] text-red-600 dark:text-red-400">
            ARANYAK COURIER SERVICE
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
