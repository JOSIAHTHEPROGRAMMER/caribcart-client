import { Link} from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {


  const handlePublicRoute = () => {
    scrollTo(0, 0);
  };


  return (
    <footer className="px-4 md:px-16 lg:px-24 xl:px-40 pt-8 w-full text-gray-600">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-400/30 pb-6">
        <div className="md:max-w-96">

          <div className="flex items-center ml-10 gap-2 mb-6">
            <Link to='/'>

              <img
                src={assets.logo}
                alt="CaribCart Logo"
                className="h-10 scale-300 cursor-pointer"
                onClick={handlePublicRoute}
              />
            </Link>

          </div>

          <p className="mt-6 text-sm text-gray-700">
            Your trusted marketplace for buying and selling social media profiles.
            Connect, trade, and purchase profiles in a safe, hassle free environment
            with thousands of satisfied users.
          </p>
        </div>

        <div className="flex-1 flex items-start md:justify-evenly gap-12 md:gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  to='/'
                  onClick={handlePublicRoute}
                  className="hover:text-gray-900 transition-colors text-left"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/aboutus'
                  onClick={handlePublicRoute}
                  className="hover:text-gray-900 transition-colors text-left"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link to='/contact'
                  onClick={handlePublicRoute}
                  className="hover:text-gray-900 transition-colors text-left"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link to='/privacypolicy'
                  onClick={handlePublicRoute}
                  className="hover:text-gray-900 transition-colors text-left"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link to='/careers'
                  onClick={handlePublicRoute}
                  className="hover:text-gray-900 transition-colors text-left"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div className="text-sm space-y-2 text-gray-700">
              <p>+1-868-555-0123</p>
              <p>contact@caribcart.com</p>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center text-xs md:text-sm pb-5 text-gray-700">
        Copyright 2024 © CaribCart. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;