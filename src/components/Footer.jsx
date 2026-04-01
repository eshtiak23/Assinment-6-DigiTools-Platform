const Footer = () => {
  return (
    <div className="bg-[#0F172A] text-gray-400 px-8 py-16">

      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">

        {/* Brand SEction */}
        <div>
          <h2 className="mb-3 text-xl font-bold text-white">DigiTools</h2>
          <p className="text-sm">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools. </p>
        </div>


        <div>
          <h3 className="mb-3 text-white">Product</h3>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Resources Section  */}
        <div>
          <h3 className="mb-3 text-white">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

       {/* Social Menu Sect */}
<div>
  <h3 className="mb-3 text-white">Social Links</h3>

  <div className="flex gap-4 text-xl">

    {/* FB */}

    <a href="#" className="transition hover:text-blue-500">
      <i className="fa-brands fa-facebook"></i>
    </a>

    {/* Y-Tube */}

    <a href="#" className="transition hover:text-red-500">
      <i className="fa-brands fa-youtube"></i>
    </a>

    {/* Insta */}
    
    <a href="#" className="transition hover:text-pink-500">
      <i className="fa-brands fa-square-instagram"></i>
    </a>

  </div>
</div>

      </div>

  
      <div className="flex flex-col justify-between pt-6 mt-10 text-sm border-t border-gray-700 md:flex-row">
        <p>© 2026 DigiTools. All rights reserved.</p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </div>
      </div>

    </div>
  );
};

export default Footer;