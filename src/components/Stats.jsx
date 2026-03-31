const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-12 bg-[#020617] text-center">
      
      <div className="bg-[#0F172A] p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-white">10K+</h2>
        <p className="text-gray-400">Active Users</p>
      </div>

      <div className="bg-[#0F172A] p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-white">500+</h2>
        <p className="text-gray-400">Tools Available</p>
      </div>

      <div className="bg-[#0F172A] p-6 rounded-lg">
        <h2 className="text-3xl font-bold text-white">1K+</h2>
        <p className="text-gray-400">Positive Reviews</p>
      </div>

    </div>
  );
};

export default Stats;