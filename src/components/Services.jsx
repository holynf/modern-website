import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";
import Title from "./Title";

function Services() {
  const servicesData = [
    {
      id: 1,
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage ...",
      icon: assets.ads_icon,
    },
    {
      id: 2,
      title: "Content marketing",
      description: "We help you exectute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      id: 3,
      title: "Content writing",
      description:
        "We help you create a marketing strategy that drives results.",
      icon: assets.content_icon,
    },
    {
      id: 3,
      title: "Social Media",
      description:
        "We help you build a strong social media presence and engage with your audience.",
      icon: assets.social_icon,
    },
  ];

  return <div id="services" className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
    <img src={assets.bgImage2} alt="bg image" className="absolute -top-110 -left-70 -z-1 dark:hidden" />
    <Title title="How Can we help?" desc="From strategy to execution, we craft digital solutions that move your business forward." />
    <div className="flex flex-col mg:grid grid-cols-2">
      {servicesData && servicesData.length > 0 && servicesData.map((service, index) => (
      <ServiceCard key={index} service={service} index={index} />
    ))}
    </div>
  </div>
}

export default Services;
