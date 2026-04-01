const CTA = () => {
  return (
    <div className="px-6 py-20 text-center text-white bg-gradient-to-r from-purple-600 to-pink-500">

      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        Ready To Transform Your Workflow?
      </h2>

      <p className="mb-6 text-sm text-gray-200 md:text-base">
        Join thousands of professionals who are already using DigiTools to work smarter.
        Start your free trial today.
      </p>

      <div className="flex justify-center gap-4 mb-4">
        <button className="px-6 py-2 font-semibold text-purple-600 bg-white rounded-full">
          Explore Products
        </button>

        <button className="px-6 py-2 border border-white rounded-full">
          View Pricing
        </button>
      </div>

      <p className="text-xs text-gray-200">
        14-day free trial • No credit card required • Cancel anytime
      </p>

    </div>
  );
};

export default CTA;