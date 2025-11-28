import { Link } from "react-router-dom";


export default function HeroSection() {
  return (
    <div className="bg-[#2D236d] text-white mt-1  sm:mt-10">
      {/* Hero Content */}
      <div className="max-w-6xl mx-auto text-center py-20 px-6">
        <h1 className="text-[18px] sm:text-[40px]   md:text[50px] font-bold leading-snug text-left">
          Your Vision, Powered by Code. Your Growth, <br/> Driven by Data.
        </h1>
        <p className="mt-4 text-lg text-gray-200 text-left">
        IMALIO is your end-to-end digital partner. We engineer scalable software, execute data-driven marketing campaigns, and build the integrated tech stack that transforms ambitious businesses into market leaders.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 px-8 py-3 border  rounded-full text-white hover:bg-white hover:text-[#2D2172] transition"
        >
          Get Started
        </Link>
      </div>

      {/* Service Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto pb-16 px-6">
        {/* IT Solutions */}
        <div className="bg-[#3A2A85] p-8 rounded-md text-center shadow-md">
          <h2 className="text-xl font-semibold">IT Solutions</h2>
          <p className="mt-2 text-gray-200 font-sans ">
            Tailored IT solutions for your business needs.
          </p>
        </div>

        {/* Digital Marketing */}
        <div className="bg-[#3A2A85] p-8 rounded-md text-center shadow-md">
          <h2 className="text-xl font-semibold">Digital Marketing</h2>
          <p className="mt-2 text-gray-200">Mobile App Development</p>
        </div>

        {/* Boost Online Presence */}
        <div className="bg-[#3A2A85] p-8 rounded-md text-center shadow-md">
          <h2 className="text-xl font-semibold">
            Boost your online presence and reach customers.
          </h2>
          <p className="mt-2 text-gray-200 font-sans">
            Creating engaging apps for Android and iOS.
          </p>
        </div>
      </div>
    </div>
  );
}
