import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  const footerSections = [
    {
      items: [
        {
          text: <img src={logo} alt="Company Logo" className="h-8 w-auto" />,
          href: "#",
        },
        { text: "www.companyname.com", href: "#" },
        { text: "companyname@gmail.com", href: "mailto:companyname@gmail.com" },
        { text: "Phone: +7 485-118-03-25", href: "tel:+74851180325" },
      ],
    },
    {
      title: "Home",
      items: [
        { text: "Landingpage", href: "#" },
        { text: "Documentation", href: "#" },
        { text: "Referral Program", href: "#" },
        { text: "UI & UX Design", href: "#" },
        { text: "Web Design", href: "#" },
      ],
    },
    {
      title: "Menu",
      items: [
        { text: "Landingpage", href: "#" },
        { text: "Documentation", href: "#" },
        { text: "Referral Program", href: "#" },
        { text: "UI & UX Design", href: "#" },
        { text: "Web Design", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { text: "Landingpage", href: "#" },
        { text: "Documentation", href: "#" },
        { text: "Referral Program", href: "#" },
      ],
    },
  ];

  return (
    <div className="bg-black">
      <div className="container mx-auto max-w-[1140px] p-4">
        <div className="text-white flex flex-wrap justify-between mt-[173px] mb-[104px]">
          {footerSections.map((section, index) => (
            <ul key={index} className="flex flex-col gap-4">
              {section.title && (
                <li>
                  <a href="#" className="font-bold">
                    {section.title}
                  </a>
                </li>
              )}
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href}>{item.text}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
