import Link from "next/link";
import { FC } from "react";
import Typography from "../common/Typography";
import Input from "../common/Input";
import Button from "../common/Button";

const Footer: FC = () => {
  const footerLinks = [
    {
      title: "Links",
      items: ["Home", "Shop", "About", "Contact"],
    },
    {
      title: "Help",
      items: ["Payment Options", "Returns", "Privacy Policies"],
    },
  ];

  return (
    <footer className="bg-white text-black p-6 md:py-16 md:px-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-20 md:mx-20">
        {/* Company Info */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0 space-y-2 md:space-y-12">
          <h2 className="text-2xl font-bold md:mb-2">Funiro.</h2>
          <address className="text-gray-500">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </address>
        </div>

        {/* Links and Help Sections */}
        <div className="w-full md:w-1/3 flex justify-between mb-6 md:mb-0">
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4 md:space-y-12">
              <Typography
                variant="h1"
                value={section.title}
                className="text-gray-500 text-xl font-medium"
              />

              <div className="flex flex-col gap-2 md:gap-8">
                {section.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href="/shop"
                    className="text-black text-lg hover:underline font-medium"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/3 flex flex-col space-y-2 md:space-y-12">
          <Typography
            variant="h1"
            value="Newsletter"
            className="text-gray-500 text-xl font-medium"
          />
          <form className="flex mt-2 gap-4 ">
            <Input
              type="email"
              placeholder="Enter Your Email Address"
              className="rounded-none border-t-0 border-x-0 border-b-2 border-black/40 placeholder:font-medium px-2"
            />
            <Button
              value="SUBSCRIBE"
              variant="v4"
              className="border-black/40 text-lg font-semibold"
            />
          </form>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-12 pt-6 md:mt-16 md:mx-20 md:pt-8 ">
        <p className="text-black text-lg">
          &copy; 2023 Funiro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
