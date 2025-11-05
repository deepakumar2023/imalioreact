import React from "react";

export default function Testimonials() {
const feedbacks = [
{
name: "Mohit",
country: "India",
review:
"The digital marketing strategies implemented by Imalio significantly boosted our online presence and sales. Their professionalism and expertise are unmatched. We couldn't be happier!",
image: "/testimonialimages/phone.avif",
rating: 5,
},
{
name: "Sarah",
country: "UAE",
review:
"Imalio delivered outstanding software solutions that exceeded our expectations. Highly recommended!",
image: "/testimonialimages/photo.avif",
rating: 5,
},
];

return ( <section className="py-16 bg-white"> <div className="max-w-6xl mx-auto px-6 text-center">
{/* Section Heading */} <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
Client Feedback </h2> <p className="mt-2 text-gray-600">
Hear what our clients say about our exceptional services and results. </p>

    {/* Feedback Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      {feedbacks.map((feedback, index) => (
        <div
          key={index}
          className="bg-[#fffab2] p-8 rounded-md shadow-md text-left"
        >
          {/* Stars */}
          <div className="flex text-yellow-500 mb-4">
            {Array.from({ length: feedback.rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>

          {/* Review Text */}
          <p className="text-gray-800 mb-6 font-sans">{feedback.review}</p>

          {/* User Info */}
          <div className="flex items-center space-x-4">
            <img
              src={feedback.image}
              alt={feedback.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{feedback.name}</p>
              <p className="text-sm text-gray-600">{feedback.country}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

);
}
