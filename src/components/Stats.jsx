const Stats = () => {
  return (
    <div className="bg-[#020617]">

     
      <div className="w-full bg-gradient-to-r from-purple-500 to-indigo-600">

        <div className="px-4 py-14 sm:px-6 md:px-12">

          <div className="grid grid-cols-1 text-center divide-y sm:grid-cols-2 md:grid-cols-3 sm:divide-y-0 md:divide-x divide-white/20">

            {/*1 */}
            <div className="py-6 md:py-10">
              <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                50K+
              </h2>
              <p className="mt-2 text-sm text-purple-100 md:text-base">
                Active Users
              </p>
            </div>

            {/* 2 */}
            <div className="py-6 md:py-10">
              <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                200+
              </h2>
              <p className="mt-2 text-sm text-purple-100 md:text-base">
                Premium Tools
              </p>
            </div>

            {/* 3 */}
            <div className="py-6 md:py-10">
              <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                4.9
              </h2>
              <p className="mt-2 text-sm text-purple-100 md:text-base">
                Rating
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Stats;