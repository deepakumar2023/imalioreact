import React from "react";

export default function Services() {
const services = [
{
title: "Software Development",
description:
"Custom software solutions tailored to your business needs and goals for optimal performance.",
img: "/testimonialimages/SoftwareDeveloper.avif",
},
{
title: "Digital Marketing",
description:
"Effective strategies in SEO, SMO, PPC, and more to enhance your online presence.",
img: "/testimonialimages/digital.avif",
},
{
title: "Mobile App Development",
description:
"Innovative mobile applications for Android and iOS to engage your customers effectively.",
img: "/testimonialimages/mobileApp.jpg",
},
];

return ( <section className="bg-[#725eed] py-16 px-6 md:px-12"> <div className="max-w-7xl mx-auto text-center"> <h2 className="text-3xl md:text-4xl font-bold text-white">
Our Services Overview </h2> <p className="mt-4 text-white max-w-2xl mx-auto text-left">
Explore our comprehensive solutions in software development, digital
marketing, mobile apps, IT, and staffing. </p>

    {/* Services Grid */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="h-52 w-full">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 text-left">
            <h3 className="text-lg font-semibold text-black font-sans">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 font-sans">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

);
}
