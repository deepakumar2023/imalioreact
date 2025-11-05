import React from 'react';

function Service() {
  return (
    <>
      {/* Banner Section */}
      <div className="relative h-[400px] m-5">
        <img
          src="/services/about-banner.avif"
          alt="Imalio Overview"
          className="w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
          <h1 className="text-white text-4xl font-bold">Contact</h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col justify-center items-center m-5">
        <h1 className="font-extrabold text-[32px]">Get in Touch with Imalio</h1>
        <p className="text-gray-500">We are here to assist you with your inquiries and needs.</p>
      </div>

      {/* Form + Image Section */}
      <div className="bg-white flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row w-full">
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile</label>
                <input
                  type="tel"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter Mobile"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="/services/Contactimage.avif"
              alt="Contact"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
