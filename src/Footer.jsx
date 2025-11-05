
import { Link } from "react-router-dom";
export default function Footer() {

  const menuItems = [
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/service" },
    { name: "Contact Us", link: "/contact" },
    { name: "Blogs", link: "/blogs" },
  ];
  return (
    <footer className="bg-[#725edd] text-white py-10 ">
      <div className=" mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Services</h3>
          <p className="text-sm mb-6">
            Expert solutions in software and digital marketing.
          </p>
          <p className="text-xs">© 2025. All rights reserved.</p>
        </div>

        {/* Middle Section */}
        <div className="flex  flex-col space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-white font-semibold transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-sm font-bold mb-3 uppercase">Contact</h3>

          <p className="text-sm">Phone :  +91-7880958868  +91 74287 91233</p>
          {/* <p className="text-sm"></p> */}
          {/* <p className="text-sm">+91-7428791233</p> */}
          <p className="text-sm">Email : info@imalio.com</p>
          <label className="block text-sm mb-2">Your Email Address</label>
          <input
            type="email"
            placeholder="Enter your email here"
            className="w-full px-4 py-2 rounded-lg  bg-white text-black focus:outline-none  border border-white"
          />
          <button className="mt-4 bg-indigo-900 px-6 py-2 rounded-full hover:bg-indigo-800 transition">
            Submit Your Inquiry
          </button>
        </div>
      </div>
    </footer>
  );
}
