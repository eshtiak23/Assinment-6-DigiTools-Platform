const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-[#020617]">
      
      {/* Left */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          All Digital Tools <br /> in One Platform
        </h1>

        <p className="text-gray-400 mt-4">
          Simplify your workflow with powerful tools designed for creators,
          developers, and professionals.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 px-6 py-2 rounded text-white">
            Get Started
          </button>
          <button className="border border-gray-600 px-6 py-2 rounded text-gray-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Right (Image Placeholder) */}
      <div className="mt-10 md:mt-0">
        <img
          src="https://via.placeholder.com/400"
          alt="banner"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Banner;