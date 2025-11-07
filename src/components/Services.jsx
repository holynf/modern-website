import assets from "../assets/assets";

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

  return <div id="services">Services</div>;
}

export default Services;
