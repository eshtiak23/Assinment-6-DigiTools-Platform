const Steps = () => {
  return (
    <div className="bg-[#020617] text-white px-6 md:px-12 py-20 text-center">

      {/* Title Section */}

      <h2 className="text-3xl font-bold md:text-4xl">
        Get Started In 3 Steps
      </h2>
      <p className="mt-2 mb-12 text-sm text-gray-400 md:text-base">
        Start using premium digital tools in minutes, not hours.
      </p>


      {/* Cards Section */}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

        {/* Step 1 */}
        <div className="relative bg-[#0F172A] p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition">

          <span className="absolute px-3 py-1 text-xs bg-purple-600 rounded-full top-4 right-4"> 01</span>

          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-purple-400 bg-purple-900 rounded-full">
            <i className="fa-solid fa-rocket"></i>
          </div>

          <h3 className="text-xl font-semibold">Start Creating</h3>
          <p className="mt-2 text-sm text-gray-400">
            Download and start using your premium tools immediately.</p>
        </div>


        {/* Step 2 */}

        <div className="relative bg-[#0F172A] p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition">

          <span className="absolute px-3 py-1 text-xs bg-purple-600 rounded-full top-4 right-4">
            02
          </span>

          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-purple-400 bg-purple-900 rounded-full">
            <i className="fa-solid fa-box-open"></i>
          </div>

          <h3 className="text-xl font-semibold">Choose Products</h3>
          <p className="mt-2 text-sm text-gray-400">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* Stepa 3 */}

          <div className="relative bg-[#0F172A] p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition">

          <span className="absolute px-3 py-1 text-xs bg-purple-600 rounded-full top-4 right-4">
            03
          </span>

          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-purple-400 bg-purple-900 rounded-full">
            <i className="fa-solid fa-user"></i>
          </div>

          <h3 className="text-xl font-semibold">Create Account</h3>
          <p className="mt-2 text-sm text-gray-400">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        

      </div>
    </div>
  );
};

export default Steps;