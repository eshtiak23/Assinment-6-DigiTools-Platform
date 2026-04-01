const Stats = () => {
  return (
    <div className="px-6 md:px-12 py-16 bg-[#020617]">

      
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Trusted by Thousands </h2>
        <p className="mt-2 text-sm text-gray-400 md:text-base">
          Join a growing community using our platform daily
        </p>
      </div>

      
      <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 md:grid-cols-3">

        

        <div className="bg-[#0F172A] p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition">
          <h2 className="text-4xl font-bold text-purple-500 md:text-5xl">
            50K+
          </h2>
          <p className="mt-2 text-gray-400">Active Users </p>
        </div>

        
        <div className="bg-[#0F172A] p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition">
          <h2 className="text-4xl font-bold text-purple-500 md:text-5xl">
            200+
          </h2>
          <p className="mt-2 text-gray-400">Premium Tools </p>
        </div>

        
        <div className="bg-[#0F172A] p-8 rounded-xl border border-gray-800 hover:border-purple-500 transition">
          <h2 className="text-4xl font-bold text-purple-500 md:text-5xl">
            4.9
          </h2>
          <p className="mt-2 text-gray-400">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;