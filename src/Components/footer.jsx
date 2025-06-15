import React from "react";

export default function Footer() {
    // Define the footer items as a constant array within the component
    const footerItems = [
        { name: "About Us", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Contact", link: "#" },
        { name: "Privacy Policy", link: "#" },
        { name: "Terms of Service", link: "#" },
        { name: "Help", link: "#" },
        { name: "Careers", link: "#" },
        { name: "Press", link: "#" },
        { name: "Advertise", link: "#" }
    ];

  return (
    <footer className="w-full max-w-none bg-white/30 backdrop-blur-md shadow-[0_-2px_2px_-1px_rgba(0,0,0,0.1),_0_-4px_6px_-2px_rgba(0,0,0,0.05)] text-gray-800 py-6 px-4 md:px-6 lg:px-8   mb-[50px] md:mb-0">
      <div className="container mx-auto text-center">
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            {footerItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-gray-700 hover:text-gray-900 hover:underline transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Rahul Gupta. All rights reserved.
        </p>
        <p className="text-xs">
          Follow us on{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
          >
            Twitter
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
