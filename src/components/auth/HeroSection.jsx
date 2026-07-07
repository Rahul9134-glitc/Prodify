import heroImage from "../../assets/img/Museum.webp";

const HeroSection = () => {
  return (
    <section className="relative hidden w-1/2 overflow-hidden lg:flex">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hero Background"
        className="h-screen w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
        <p className="mb-4 text-sm uppercase tracking-[8px] text-gray-300">
          Inspired by the Future
        </p>

        <h1 className="max-w-xl text-5xl font-extrabold leading-tight text-white">
          Welcome to <span className="text-blue-500">PRODIFY</span>
        </h1>

        <p className="mt-6 max-w-md text-lg text-gray-300">
          Organize your daily tasks, track your productivity and achieve your
          goals with a modern dashboard.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;