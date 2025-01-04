import Image from "next/image";
import React from "react";

const benefits = [
  {
    title: "Quality Products",
    description:
      "We offer top-notch fitness equipment that enhances your workout experience.",
    image: "https://i.postimg.cc/xCMqjtRT/pexels-pavel-danilyuk-6296018.jpg",
  },
  {
    title: "Affordable Prices",
    description:
      "Get the best value for your money with our competitively priced products.",
    image: "https://i.postimg.cc/rwZDfdsc/pexels-ketut-subiyanto-4720822.jpg",
  },
  {
    title: "Expert Support",
    description:
      "Our team of experts is here to help you with any questions or concerns.",
    image: "https://i.postimg.cc/CMWTswSt/kike-vega-F2qh3yjz6-Jk-unsplash.jpg",
  },
  {
    title: "Fast Shipping",
    description:
      "Enjoy quick and reliable delivery for all your fitness equipment needs.",
    image: "https://i.postimg.cc/xCMqjtRT/pexels-pavel-danilyuk-6296018.jpg",
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="bg-slate-800 py-12">
      <div className=" mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-2">Why Choose Us?</h2>
        <div className="grid grid-cols-1 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-slate-700 shadow-lg rounded-lg p-2 flex flex-col items-center text-center"
            >
              <Image
                alt={benefit.title}
                className="rounded-xl"
                height={500}
                src={benefit.image}
                width={600}
              />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-white text-2xl text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
