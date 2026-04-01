const Pricing = () => {
  return (
    <div className="bg-[#020617] text-white px-6 md:px-12 py-20 text-center">

      {/* Title */}
      <h2 className="text-3xl font-bold md:text-4xl">
        Simple, Transparent Pricing
      </h2>
      <p className="mt-2 mb-12 text-gray-400">
        Choose the plan that fits your needs.
      </p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

        {/* Starter */}
        <div className="bg-[#0F172A] p-8 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold">Starter</h3>
          <p className="mt-4 text-3xl font-bold">$0<span className="text-sm text-gray-400">/month</span></p>

          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>✔ 10 free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
          </ul>

          <button className="w-full py-2 mt-6 bg-purple-600 rounded-full hover:bg-purple-700">
            Get Started Free
          </button>
        </div>

        {/* Pro (Highlighted) */}
        <div className="relative p-8 text-white rounded-xl bg-gradient-to-r from-purple-600 to-purple-800">

          <span className="absolute px-3 py-1 text-xs text-black -translate-x-1/2 bg-yellow-400 rounded-full -top-3 left-1/2">
            Most Popular
          </span>

          <h3 className="text-xl font-semibold">Pro</h3>
          <p className="mt-4 text-3xl font-bold">$29<span className="text-sm">/month</span></p>

          <ul className="mt-4 space-y-2 text-sm">
            <li>✔ All premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Cloud sync</li>
          </ul>

          <button className="w-full py-2 mt-6 text-black bg-white rounded-full">
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className="bg-[#0F172A] p-8 rounded-xl border border-gray-800">
          <h3 className="text-xl font-semibold">Enterprise</h3>
          <p className="mt-4 text-3xl font-bold">$99<span className="text-sm text-gray-400">/month</span></p>

          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Dedicated support</li>
          </ul>

          <button className="w-full py-2 mt-6 bg-purple-600 rounded-full hover:bg-purple-700">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;