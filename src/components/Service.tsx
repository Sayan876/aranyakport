
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Package,
  Truck,
  MapPin,
  Clock3,
  ShieldCheck,
  ShoppingBag,
  FileText,
  RotateCcw,
  Boxes,
  PackageCheck,
  Building2,
  Globe2,
  Wallet,
  ClipboardCheck,
  Zap,
} from "lucide-react";

const services = [
  {
    id: 1,
    number: "01",
    title: "Domestic Courier",
    subtitle: "Delivering Across India",
    description:
      "Send parcels, documents and packages anywhere in India through established courier delivery networks. Reliable shipping solutions for individuals and businesses.",
    icon: Truck,
    color: "from-red-600 to-rose-800",
    light: "bg-red-50",
    points: [
      "Nationwide courier booking",
      "Door-to-door delivery",
      "Personal and business shipments",
      "Multiple courier partner options",
    ],
    tag: "NATIONWIDE DELIVERY",
  },
  {
    id: 2,
    number: "02",
    title: "Doorstep Pickup",
    subtitle: "We Pick Up, You Relax",
    description:
      "Save time with convenient doorstep parcel pickup. Arrange a pickup from your home, office or business location without visiting a courier center.",
    icon: MapPin,
    color: "from-orange-500 to-red-600",
    light: "bg-orange-50",
    points: [
      "Convenient doorstep collection",
      "Pickup within 24 hours of booking",
      "Home and office pickup",
      "Easy shipment arrangement",
    ],
    tag: "CONVENIENT PICKUP",
  },
  {
    id: 3,
    number: "03",
    title: "E-commerce Shipping",
    subtitle: "Supporting Online Businesses",
    description:
      "Courier and shipping support for online sellers and growing businesses. Send customer orders through established delivery networks.",
    icon: ShoppingBag,
    color: "from-yellow-500 to-orange-600",
    light: "bg-yellow-50",
    points: [
      "E-commerce seller support",
      "Customer order shipping",
      "Return parcel handling",
      "Small and medium parcel booking",
    ],
    tag: "SELLER SUPPORT",
  },
  {
    id: 4,
    number: "04",
    title: "Document & Parcel Delivery",
    subtitle: "Every Package Matters",
    description:
      "Send important documents, educational materials, personal parcels, books, stationery and other legally permitted items with careful handling.",
    icon: FileText,
    color: "from-blue-600 to-indigo-700",
    light: "bg-blue-50",
    points: [
      "Official and educational documents",
      "Books and stationery",
      "Personal gifts and parcels",
      "Business documents",
    ],
    tag: "SAFE HANDLING",
  },
  {
    id: 5,
    number: "05",
    title: "Shipment Tracking",
    subtitle: "Stay Updated at Every Step",
    description:
      "Keep track of your shipments with available tracking facilities and stay informed about your parcel's delivery progress.",
    icon: PackageCheck,
    color: "from-emerald-500 to-teal-700",
    light: "bg-emerald-50",
    points: [
      "Shipment status updates",
      "Tracking through courier partners",
      "Pre and post shipment updates",
      "Better delivery visibility",
    ],
    tag: "TRACK YOUR SHIPMENT",
  },
  {
    id: 6,
    number: "06",
    title: "Return & Business Logistics",
    subtitle: "Solutions That Support Your Business",
    description:
      "Courier assistance for return parcels, commercial shipments and businesses that need dependable parcel transportation.",
    icon: RotateCcw,
    color: "from-purple-600 to-violet-800",
    light: "bg-purple-50",
    points: [
      "Return parcel services",
      "Commercial courier bookings",
      "Cargo and parcel shipping",
      "Company and institutional support",
    ],
    tag: "BUSINESS SOLUTIONS",
  },
];

const additionalServices = [
  {
    icon: Package,
    title: "Personal Courier",
    description: "Send personal parcels, gifts and everyday shipments.",
  },
  {
    icon: Building2,
    title: "Corporate Shipping",
    description: "Courier assistance for companies and institutions.",
  },
  {
    icon: Boxes,
    title: "Cargo & Bulk Parcels",
    description: "Shipping support for cargo and larger consignments.",
  },
  {
    icon: ClipboardCheck,
    title: "Official Documents",
    description: "Send important educational and official documents.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges.",
  },
  {
    icon: Globe2,
    title: "Pan-India Coverage",
    description: "Courier service availability throughout India.",
  },
];

const benefits = [
  {
    icon: Clock3,
    title: "24-Hour Pickup",
    description: "Pickup within 24 hours of booking.",
  },
  {
    icon: ShieldCheck,
    title: "Careful Handling",
    description: "Attention to your parcels and shipments.",
  },
  {
    icon: MapPin,
    title: "Nationwide Reach",
    description: "Delivery services across India.",
  },
  {
    icon: Zap,
    title: "Reliable Service",
    description: "Convenient and dependable shipping support.",
  },
];

const Service = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + services.length) % services.length
    );
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentService = services[activeSlide];
  const ActiveIcon = currentService.icon;

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-24 text-neutral-900 transition-colors duration-300 dark:bg-[#141414] dark:text-white"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-20 h-96 w-96 rounded-full bg-red-100/50 blur-[120px] dark:bg-red-500/[0.06]" />
        <div className="absolute -right-48 top-[40%] h-96 w-96 rounded-full bg-yellow-100/50 blur-[120px] dark:bg-yellow-400/[0.04]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =================================
            SECTION HEADING
        ================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 dark:border-red-500/20 dark:bg-red-500/10">
            <Package size={15} className="text-red-600 dark:text-red-400" />
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-red-700 dark:text-red-400">
              What We Offer
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Courier Solutions
            <br />
            <span className="text-red-600 dark:text-red-500">
              For Every Need.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-400 sm:text-lg">
            From personal parcels to business shipments, Aranyak
            Courier Service offers convenient shipping solutions
            backed by established delivery networks across India.
          </p>
        </motion.div>

        {/* =================================
            AUTOMATIC SERVICE CAROUSEL
        ================================== */}

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-[#171717] shadow-2xl shadow-neutral-900/10 dark:border dark:border-neutral-800">

            {/* Carousel Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className={`absolute -right-20 -top-32 h-[450px] w-[450px] rounded-full bg-gradient-to-br ${currentService.color} opacity-20 blur-[100px]`}
              />

              <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="relative grid min-h-[510px] items-center gap-10 p-7 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-16"
              >

                {/* Carousel Content */}
                <div className="order-2 lg:order-1">

                  <div className="mb-7 flex items-center gap-3">
                    <span className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold text-white">
                      SERVICE {currentService.number}
                    </span>

                    <span className="text-[10px] font-bold uppercase tracking-[2px] text-yellow-400">
                      {currentService.tag}
                    </span>
                  </div>

                  <p className="mb-3 text-sm font-semibold text-neutral-400">
                    {currentService.subtitle}
                  </p>

                  <h3 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {currentService.title}
                    <span className="text-red-500">.</span>
                  </h3>

                  <p className="mt-7 max-w-xl text-sm leading-8 text-neutral-300 sm:text-base">
                    {currentService.description}
                  </p>

                  {/* Service Features */}
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {currentService.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 text-sm text-neutral-200"
                      >
                        <ShieldCheck
                          size={17}
                          className="mt-0.5 shrink-0 text-yellow-400"
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 text-sm font-extrabold text-neutral-950 transition-all hover:-translate-y-1 hover:bg-yellow-300"
                  >
                    Enquire About This Service
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>

                {/* Visual Illustration */}
                <div className="order-1 flex items-center justify-center lg:order-2">
                  <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">

                    {/* Decorative Circles */}
                    <div className="absolute inset-0 rounded-full border border-white/10" />
                    <div className="absolute inset-7 rounded-full border border-dashed border-white/20" />
                    <div className="absolute inset-14 rounded-full bg-white/[0.04] backdrop-blur-sm" />

                    {/* Main Icon */}
                    <motion.div
                      key={currentService.id}
                      initial={{ scale: 0.7, rotate: -15, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className={`relative flex h-36 w-36 items-center justify-center rounded-[2rem] bg-gradient-to-br ${currentService.color} shadow-2xl sm:h-44 sm:w-44`}
                    >
                      <ActiveIcon
                        size={85}
                        strokeWidth={1.3}
                        className="text-white"
                      />
                    </motion.div>

                    {/* Floating Label */}
                    <div className="absolute -right-2 top-8 rounded-xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-5">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-yellow-400" />
                        <span className="text-xs font-bold text-white">
                          Aranyak Service
                        </span>
                      </div>
                    </div>

                    {/* Bottom Floating Label */}
                    <div className="absolute -bottom-1 -left-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-6">
                      <div className="flex items-center gap-2">
                        <PackageCheck
                          size={18}
                          className="text-yellow-400"
                        />
                        <span className="text-xs font-bold text-white">
                          Trusted Shipping
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation */}
            <div className="relative flex flex-wrap items-center justify-between gap-5 border-t border-white/10 px-7 py-6 sm:px-12 lg:px-16">

              {/* Slide Indicators */}
              <div className="flex items-center gap-2">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    type="button"
                    aria-label={`Go to ${service.title}`}
                    aria-current={activeSlide === index ? "true" : undefined}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeSlide === index
                        ? "w-9 bg-yellow-400"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>

              {/* Counter and Arrows */}
              <div className="flex items-center gap-5">
                <p className="text-xs font-bold tabular-nums text-neutral-400">
                  <span className="text-white">
                    {String(activeSlide + 1).padStart(2, "0")}
                  </span>
                  {" / "}
                  {String(services.length).padStart(2, "0")}
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous service"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white transition-all hover:border-yellow-400 hover:bg-yellow-400 hover:text-neutral-950"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next service"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white transition-all hover:border-yellow-400 hover:bg-yellow-400 hover:text-neutral-950"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Progress Bar */}
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
            <motion.div
              key={`${activeSlide}-${isPaused}`}
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? "0%" : "100%" }}
              transition={{
                duration: isPaused ? 0 : 5,
                ease: "linear",
              }}
              className="h-full rounded-full bg-red-600"
            />
          </div>
        </div>

        {/* =================================
            SERVICE BENEFITS
        ================================== */}

        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[2px] text-red-600 dark:text-red-400">
              Why Choose Aranyak
            </p>

            <h3 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Shipping Made Simpler.
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-500 dark:text-neutral-400">
              Convenient courier services designed around your
              everyday shipping needs.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl hover:shadow-red-900/[0.05] dark:border-neutral-800 dark:bg-[#1c1c1c] dark:hover:border-red-500/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-all group-hover:bg-red-600 group-hover:text-white dark:bg-red-500/10 dark:text-red-400">
                  <Icon size={23} />
                </div>

                <h4 className="mt-6 text-lg font-extrabold">
                  {title}
                </h4>

                <p className="mt-2 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =================================
            ADDITIONAL SERVICES
        ================================== */}

        <div className="mt-24">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[2px] text-red-600 dark:text-red-400">
                More From Aranyak
              </p>

              <h3 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                More Ways We Can Help.
              </h3>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-bold text-red-600 transition-colors hover:text-red-700 dark:text-red-400"
            >
              Get in touch
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group flex gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 transition-all hover:border-yellow-400 hover:bg-white hover:shadow-lg dark:border-neutral-800 dark:bg-[#1c1c1c] dark:hover:bg-[#222]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-100 text-red-600 transition-all group-hover:bg-red-600 group-hover:text-white dark:bg-yellow-400/10 dark:text-yellow-400">
                  <Icon size={22} />
                </div>

                <div>
                  <h4 className="font-extrabold">
                    {title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =================================
            BOTTOM CTA
        ================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 overflow-hidden rounded-[2rem] bg-gradient-to-r from-red-700 via-red-600 to-red-800 px-7 py-14 text-center shadow-xl shadow-red-900/10 sm:px-12 sm:py-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border-[35px] border-white/[0.06]" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full border-[35px] border-white/[0.06]" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-yellow-300 backdrop-blur-sm">
              <Truck size={28} />
            </div>

            <h3 className="mt-7 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Ready to Send Your Parcel?
            </h3>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-red-100 sm:text-base">
              Let Aranyak take care of your courier needs.
              Get in touch with us to arrange your next shipment.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 text-sm font-extrabold text-neutral-950 transition-all hover:-translate-y-1 hover:bg-yellow-300"
            >
              Contact Aranyak
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Service;
