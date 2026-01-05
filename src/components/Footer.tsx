import logo from "../assets/logo.svg";
import { footerSections } from "../constants";

const Footer: React.FC = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto max-w-[1140px] p-4">
        <div className="mb-8">
          <img src={logo} alt="Company Logo" className="h-8 w-auto" />
        </div>

        <div className="text-white flex flex-wrap justify-between mt-[173px] mb-[104px]">
          {footerSections.map((section, index) => (
            <ul key={index} className="flex flex-col gap-4">
              {section.title && (
                <li>
                  <span className="font-bold">{section.title}</span>
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
