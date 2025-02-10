import Image from "next/image";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../Constants";
import Link from "next/link";
import { copyrightSign } from "../assets/icons";

// create a component
const Footer = () => {
  return (
    <footer className="max-container" id="contact-us">
      <div className="flex flex-col items-start">
        <div>
        <a href="/">
          <Image src={footerLogo} width={150} height={46} alt="Nike Logo" />
        </a>
        <p className="info-text mt-6 sm:max-w-sm">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size in Store. Get Rewards.
        </p>

        {/* Social Media Links */}
        <div className="flex items-center gap-5 mt-8">
          {socialMedia?.map((data, index) => (
            <div
              className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              key={data.id || `social-${index}`}
            >
              <Image src={data.src} alt={data?.alt} width={24} height={24} />
            </div>
          ))}
        </div>  
        </div>     
      </div>
      <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section, index) => (
            <div key={section.id || `section-${index}`}>
              <h4 className="text-white font-montserrat text-2xl mt-8">{section.title}</h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={link.name} className="mt-2 text-slate-gray font-montserrat text-base leading-normal hover:text-white-400 cursor-pointer">
                    <a >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
            <div className="flex justify-start items-center gap-2 font-montserrat cursor-pointer">
              <Image src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full m-0"/>
              <p className="info-text">Copyright. All rights reserved</p>
            </div>
            <p className="info-text cursor-pointer">
            Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
