

import { FaUsers, FaClock } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import CountUp from "react-countup";

export default function StatsSection() {
  return (
    <div className="bg-[#2D236D] py-14 px-4 shadow-lg">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our Achievements
        </h2>
        <p className="mt-3 text-gray-300 text-sm md:text-base">
          We take pride in delivering excellence and building trust with our clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        
        {/* Box 1 */}
        <div className="p-6 text-center text-white  hover:scale-105 transition-transform duration-300">
          <FaUsers size={36} className="mx-auto mb-3" />
          <p className="text-3xl font-bold">
            <CountUp start={0} end={150} duration={5} />+
          </p>
          <p className="mt-2 text-sm">Client-Centric</p>
        </div>

        {/* Box 2 */}
        <div className="p-6 text-center text-white   hover:scale-105 transition-transform duration-300">
          <FaClock size={36} className="mx-auto mb-3" />
          <p className="text-3xl font-bold">
            <CountUp start={0} end={20} duration={5} />+
          </p>
          <p className="mt-2 text-sm">Years Experience</p>
        </div>

        {/* Box 3 */}
        <div className="p-6 text-center text-white  hover:scale-105 transition-transform duration-300">
          <GoProject size={36} className="mx-auto mb-3" />
          <p className="text-3xl font-bold">
            <CountUp start={0} end={20} duration={5} />+
          </p>
          <p className="mt-2 text-sm">Total Project</p>
        </div>

      </div>
    </div>
  );
}
