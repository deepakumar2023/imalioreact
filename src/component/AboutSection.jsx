export default function AboutSection() {
  return (
    <section className="py-10 px-6 md:px-12 bg-white border-t border-b border-purple-800">
      <div className="max-w-5xl mx-auto text-center">
        {/* Text Content */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center xs:text-left">
          About Imalio: Your Trusted Partner
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed text-left">
          Imalio is a trusted IT and digital services company with 10+ years of
          experience in{" "}
          <span className="font-semibold">
            software development, mobile app development, digital marketing, IT
            solutions, and staffing services.
          </span>{" "}
          We help businesses grow by delivering innovative, scalable, and
          result-driven solutions tailored to their goals. With a skilled team
          and a focus on quality, Imalio is your partner for digital success.
        </p>

        {/* Image Below */}
        <div className="mt-10 rounded-xl overflow-hidden shadow-md">
          <img
            src="/testimonialimages/Webapplication.avif"
            alt="About Imalio"
            className="object-cover w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
