
import { motion } from "motion/react";

import bluedart from "../assets/bluedart-512.png";
import dtdc from "../assets/DTDC-Tracking.jpg";
import delhivery from "../assets/Delhivery-logo-StartupTalky.jpg";
import logo from "../assets/aranyak.jpg";
import amazon from "../assets/amazon.jpeg";
import xpress from "../assets/xpressjpeg.jpeg";
import ekart from "../assets/ekart.jpeg";
import fedex from "../assets/fedex.jpeg";
import ups from "../assets/ups.jpeg";
import dhlexpress from "../assets/dhlexpress.jpeg";

import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Clock3,
  ShieldCheck,
  Package,
  Truck,
  Globe2,
  Boxes,
  FileText,
  Plane,
} from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Domestic & International" },
  { icon: Clock3, label: "Convenient Pickup" },
  { icon: ShieldCheck, label: "Careful Parcel Handling" },
];

const services = [
  { icon: Package, label: "Personal Parcels" },
  { icon: FileText, label: "Documents" },
  { icon: Boxes, label: "Business Shipments" },
];

const domesticNetworks = [
  { name: "DTDC", image: dtdc },
  { name: "Blue Dart", image: bluedart },
  { name: "Delhivery", image: delhivery },
  { name: "Amazon", image: amazon },
  { name: "Xpressbees", image: xpress },
  { name: "Ekart", image: ekart },
];

const internationalNetworks = [
  { name: "DHL Express", image: dhlexpress },
  { name: "FedEx", image: fedex },
  { name: "UPS", image: ups },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-white pt-24 text-neutral-900 transition-colors duration-300 dark:bg-[#141414] dark:text-white"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-red-100/50 blur-[120px] dark:bg-red-500/[0.07]" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-yellow-100/60 blur-[120px] dark:bg-yellow-400/[0.05]" />

        <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-red-700 via-yellow-400 to-red-700" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 lg:px-10 lg:pt-14">

        {/* Brand Identity */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left"
        >
          <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-yellow-200 bg-white p-2 shadow-xl shadow-yellow-900/10 dark:border-neutral-700 dark:bg-neutral-800 sm:h-32 sm:w-32">
            <div className="absolute inset-0 rounded-2xl bg-yellow-400/10 blur-xl" />

            <img
              src={logo}
              alt="Aranyak Courier Service"
              className="relative h-full w-full rounded-xl object-contain"
            />
          </div>

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

        {/* Main Hero */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 dark:border-red-500/20 dark:bg-red-500/10">
              <Globe2 size={15} className="text-red-600 dark:text-red-400" />

              <span className="text-[11px] font-bold tracking-wider text-red-700 dark:text-red-400">
                DOMESTIC & INTERNATIONAL SHIPPING
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[64px]">
              Your World.
              <br />

              <span className="text-red-600 dark:text-red-500">
                Our Delivery Network.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-neutral-600 dark:text-neutral-400 sm:text-lg">
              From local parcels and important documents to
              international shipments, Aranyak connects your
              deliveries with established courier networks.
              Simple booking, convenient pickup and shipping
              solutions for individuals and businesses.
            </p>

            {/* Service Categories */}
            <div className="mt-7 flex flex-wrap gap-3">
              {services.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  <Icon size={15} className="text-red-600 dark:text-red-400" />
                  {label}
                </div>
              ))}
            </div>

            {/* Service Types */}
            <div className="mt-7 grid max-w-xl grid-cols-2 gap-3">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-[#1c1c1c]">
                <div className="mb-2 flex items-center gap-2 text-red-600 dark:text-red-400">
                  <Truck size={19} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Domestic
                  </span>
                </div>
                <p className="text-sm font-semibold">
                  Shipping Across India
                </p>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  Parcels, documents and business goods.
                </p>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-[#1c1c1c]">
                <div className="mb-2 flex items-center gap-2 text-red-600 dark:text-red-400">
                  <Plane size={19} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    International
                  </span>
                </div>
                <p className="text-sm font-semibold">
                  Worldwide Shipping
                </p>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  International document and parcel delivery.
                </p>
              </div>
            </div>

            {/* Buttons */}
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

            {/* Highlights */}
            <div className="mt-11 grid grid-cols-1 gap-4 border-t border-neutral-200 pt-7 dark:border-neutral-800 sm:grid-cols-3">
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

          {/* RIGHT: DELIVERY NETWORKS */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-red-100 via-yellow-50 to-orange-100 opacity-70 blur-2xl dark:from-red-500/10 dark:via-yellow-400/5 dark:to-orange-500/10" />

            <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-2xl shadow-neutral-900/[0.06] dark:border-neutral-800 dark:bg-[#1c1c1c] sm:p-7">

              {/* Panel Heading */}
              <div className="mb-7">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-500" />

                  <p className="text-xs font-bold uppercase tracking-[2px] text-red-600 dark:text-red-400">
                    Our Shipping Network
                  </p>
                </div>

                <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Connected to
                  <br />
                  <span className="text-neutral-500 dark:text-neutral-400">
                    Trusted Delivery Networks.
                  </span>
                </h2>
              </div>

              {/* Domestic Network */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Truck size={17} className="text-red-600 dark:text-red-400" />
                  <h3 className="text-sm font-extrabold uppercase tracking-wider">
                    Domestic Networks
                  </h3>
                  <span className="ml-auto rounded-full bg-yellow-100 px-2.5 py-1 text-[10px] font-bold text-yellow-800 dark:bg-yellow-400/10 dark:text-yellow-400">
                    6 NETWORKS
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {domesticNetworks.map((network, index) => (
                    <motion.div
                      key={network.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + index * 0.07,
                      }}
                      className="group flex min-h-[105px] flex-col items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-md dark:border-neutral-700 dark:bg-[#242424] dark:hover:border-red-500/40 dark:hover:bg-[#292929]"
                    >
                      <div className="flex h-[58px] w-full items-center justify-center rounded-lg bg-white p-2">
                        <img
                          src={network.image}
                          alt={`${network.name} logo`}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <p className="mt-2 text-[11px] font-bold text-neutral-700 dark:text-neutral-200">
                        {network.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-700" />
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-neutral-400">
                  International Shipping
                </span>
                <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-700" />
              </div>

              {/* International Networks */}
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <Plane size={17} className="text-red-600 dark:text-red-400" />
                  <h3 className="text-sm font-extrabold uppercase tracking-wider">
                    International Networks
                  </h3>
                  <span className="ml-auto rounded-full bg-red-100 px-2.5 py-1 text-[10px] font-bold text-red-700 dark:bg-red-500/10 dark:text-red-400">
                    3 NETWORKS
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {internationalNetworks.map((network, index) => (
                    <motion.div
                      key={network.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.75 + index * 0.1,
                      }}
                      className="group flex min-h-[95px] flex-col items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 p-2 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-md dark:border-neutral-700 dark:bg-[#242424] dark:hover:border-red-500/40 dark:hover:bg-[#292929]"
                    >
                      <div className="flex h-[55px] w-full items-center justify-center rounded-lg bg-white p-2">
                        <img
                          src={network.image}
                          alt={`${network.name} logo`}
                          loading="lazy"
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <p className="mt-2 text-[10px] font-bold text-neutral-700 dark:text-neutral-200">
                        {network.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
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

                  <p className="mt-1 text-xs leading-5 text-neutral-600 dark:text-neutral-400">
                    Shipping solutions for individuals and businesses,
                    subject to destination and service availability.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Brand Statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-neutral-200 pt-7 text-center dark:border-neutral-800 sm:flex-row sm:text-left"
        >
          <p className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            Connecting people and businesses across borders.
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
