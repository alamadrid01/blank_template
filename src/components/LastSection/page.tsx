import Image from "next/image";
import React from "react";

const LastSection = () => {
  return (
    <div className="mt-6 mb-[30rem] h-[900px] ">
      <div
        className="flex h-full w-full relative items-end !bg-[length:auto_833px] !bg-top min-[1129px]:!bg-[length:100%_auto]"
        style={{
          background:
            `linear-gradient(to bottom, black, transparent 6%), linear-gradient(to right, black, transparent 2%, transparent 98%, black), url("/images/tr.jpg") no-repeat`,
            height: "100%",
          left: "50%",
          position: "relative",
          transform: "translateX(-50%)",
          maxWidth: "2500px",
        }}
      >
        <div className="w-full bg-gradient-to-b from-transparent -mb-[13rem] via-1-black from-20% via-75%">
          <div className="relative mx-auto grid w-full max-w-screen-xl gap-12 px-5 md:grid-cols-2 xl:grid-cols-3">
            {cardData.map(({ imgSrc, alt, title, description }, index) => (
              <div key={index} className="w-full md:max-w-[355px]">
                <Image  src={imgSrc} alt={alt} className="mb-4 h-8 w-8" width={200} height={200} />
                <p className="mb-2 text-xl font-medium">{title}</p>
                <p className="text-text-secondary">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


const cardData = [
  {
    imgSrc: "https://www.datocms-assets.com/53643/1726975575-quality.svg?auto=format&h=40&q=10&w=40",
    alt: "Only the top 1% of homes",
    title: "Only the top 1% of homes",
    description:
      "We’ll never not look like the pictures. We select homes in the most beautiful destinations and pour our hearts into making them magical so you can leave your stress at the door.",
  },
  {
    imgSrc: "https://www.datocms-assets.com/53643/1726975407-hotel.svg?auto=format&h=40&q=10&w=40",
    alt: "Hotel-grade amenities",
    title: "Hotel-grade amenities",
    description:
      "We’ll never leave you with nothing to do. From workstations with super fast WiFi to gyms, pools, and saunas, our locations are set up for you to effortlessly blend work and play.",
  },
  {
    imgSrc: "https://www.datocms-assets.com/53643/1726975319-concierge.svg?auto=format&h=40&q=10&w=40",
    alt: "24/7 Concierge service",
    title: "24/7 Concierge service",
    description:
      "We’ll never leave you hanging. Our text-based Concierge is always available to help make your trip the best ever – from house questions to activity recommendations and more.",
  },
  {
    imgSrc: "https://www.datocms-assets.com/53643/1727207060-mountains-cloud-1.svg?auto=format&h=40&q=10&w=40",
    alt: "Inspiring and stunning views",
    title: "Inspiring and stunning views",
    description:
      "We’ll never leave you uninspired. Every Wander is located in an incredible setting with stunning views that will have you feeling inspired and refreshed in no time. Adventure awaits.",
  },
  {
    imgSrc: "https://www.datocms-assets.com/53643/1727206777-house-cleaning-star-2.svg?auto=format&h=40&q=10&w=40",
    alt: "Meticulous cleaning",
    title: "Meticulous cleaning",
    description:
      "We’ll never have you check in to a dirty house with crusty ketchup in the fridge. Our cleaning teams are meticulous about quality. We won't leave you a list of chores at check out either.",
  },
  {
    imgSrc: "https://www.datocms-assets.com/53643/1726975279-safety.svg?auto=format&h=40&q=10&w=40",
    alt: "Safety and security",
    title: "Safety and security",
    description:
      "We’ll never pass you off to a stranger. All of the Wander locations on our platform are hand-picked by us and managed to our incredibly high, industry-leading safety standards.",
  },
];

export default LastSection;
