import React from "react";

function Aboutpage() {
  const testimonials = [
    {
      quote:
        "Imalio transformed our business with their exceptional software development and digital marketing expertise. Highly recommended!",
      name: "John Doe",
      image: "/services/photo1.avif",
    },
    {
      quote:
        "The mobile app developed by Imalio exceeded our expectations and significantly improved our customer engagement.",
      name: "Jane Smith",
      image: "/services/photo1.avif",
    },
  ];

  return (
    <>
      <div className="m-5">
        {/* Top Image and Heading */}
        <div className="w-full relative h-[400px]">
          <img
            src="/services/about-banner.avif"
            alt="Imalio Overview"
            className="w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
            <h1 className="text-white text-4xl font-bold">About Imalio</h1>
          </div>
        </div>

        {/* Content and Right Image */}
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto py-16 px-4 gap-10">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6 text-gray-800 font-sans">
            <p>
              <strong>Imalio</strong> is a full-service IT and digital solutions company with
              over <strong>10 years of experience</strong> empowering businesses through
              technology and innovation. We specialize in{" "}
              <strong>software development, mobile app development, digital marketing, IT
              infrastructure solutions</strong>, and <strong>staffing services</strong>,
              offering end-to-end support for businesses of all sizes.
            </p>
            <p>
              Our mission is to help clients achieve sustainable growth by delivering{" "}
              <strong>customized, result-oriented solutions</strong> that are aligned with
              their goals. Whether it's building powerful software, creating high-performing
              mobile apps, launching data-driven digital marketing campaigns, or providing
              expert IT talent — we ensure <strong>quality, agility, and transparency</strong>{" "}
              in everything we do.
            </p>
            <p>
              With a passionate team of professionals and a strong focus on innovation,{" "}
              <strong>Imalio</strong> is your reliable partner for navigating the digital
              landscape and staying ahead in a competitive market.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="/services/aboutsecond.avif"
              alt="Imalio Design"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="relative h-screen m-5">
        {/* Background image */}
        <img
          src="/services/photoAbout.avif"
          alt="Background"
          className="object-cover w-full h-full absolute inset-0 z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

        {/* Testimonials Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 text-white">
            {testimonials.map((t, index) => (
              <div key={index} className="p-6 rounded-lg shadow-lg bg-black bg-opacity-50">
                <div className="flex justify-center text-yellow-400 mb-4 text-lg">
                  {"★".repeat(5)}
                </div>
                <p className="text-base italic mb-4 text-center">{t.quote}</p>
                <div className="flex items-center justify-center gap-3 mt-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <p className="font-semibold font-sans">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutpage;
