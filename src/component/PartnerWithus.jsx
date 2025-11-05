import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function PartnerWithUs() {
  const logos = [
    { src: "/partnerlogo/yubai.webp", name: "Company One", alt: "yubai" },
    { src: "/partnerlogo/target.png", name: "Company Two", alt: "yubai" },
    { src: "/partnerlogo/aayanaa.jpg", name: "Company Three", alt: "yubai" },
    { src: "/partnerlogo/Just-Office-Logo.png", name: "Company Four", alt: "yubai" },
    { src: "/partnerlogo/unt-mart.png", name: "Company Five", alt: "yubai" },
    { src: "/partnerlogo/universal.webp", name: "Company Six", alt: "yubai" },
    { src: "/partnerlogo/aftaab.png", name: "Company Seven", alt: "yubai" },
  ];

  return (
    <section className="bg-white py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 xl:px-20">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center px-2">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D236D]">
          Partner With Us
        </h3>
        <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Join hands with us to grow together. We collaborate with innovative
          companies to build impactful solutions and create long-term value.
        </p>
      </div>

      {/* Logo Slider */}
      <div className="mt-10 sm:mt-12 md:mt-16 max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 1200, disableOnInteraction: false }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 25 },
            640: { slidesPerView: 4, spaceBetween: 30 },
            768: { slidesPerView: 5, spaceBetween: 35 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
            1280: { slidesPerView: 5, spaceBetween: 45 },
          }}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center justify-center p-2 sm:p-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-20 sm:h-14 sm:w-28 md:h-14 md:w-32 lg:h-14 lg:w-28 xl:h-14 xl:w-32 object-contain transition-transform duration-300 hover:scale-105"
                />
                <p className="mt-2 text-gray-700 text-xs sm:text-sm md:text-base font-medium text-center">
                  {logo.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Call to Action */}
      <div className="mt-12 sm:mt-14 md:mt-16 text-center">
        <a
          href="/contact"
          className="inline-block px-6 sm:px-5 md:px-5 py-2.5 sm:py-3 md:py-3 rounded-lg bg-indigo-600 text-white text-sm sm:text-base md:text-lg font-medium hover:bg-indigo-700 transition-all"
        >
          Become a Partner
        </a>
      </div>
    </section>
  );
}
