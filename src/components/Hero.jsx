import { useState, useEffect } from "react";
import HeroCard from "./HeroCard";

export default function Hero() {
  // top row cards data
  const topCards = [
    {
      image: "/images/card-1.webp",
      translate: "translate-y-[-30%]",
      hidden: "",
    },
    {
      image: "/images/card-2.webp",
      translate: "translate-y-[-20%]",
      hidden: "",
    },
    {
      image: "/images/card-3.webp",
      translate: "translate-y-[-10%]",
      hidden: "",
    },
    {
      image: "/images/card-4.webp",
      translate: "translate-y-[0%]",
      hidden: "max-sm:hidden",
    },
    {
      image: "/images/card-5.webp",
      translate: "translate-y-[10%]",
      hidden: "max-sm:hidden max-lg:hidden",
    },
  ];

  // bottom row cards data
  const bottomCards = [
    {
      image: "/images/card-6.webp",
      translate: "translate-y-[-20%]",
      hidden: "",
    },
    {
      image: "/images/card-2.webp",
      translate: "translate-y-[-10%]",
      hidden: "",
    },
    { image: "/images/card-3.webp", translate: "translate-y-[0%]", hidden: "" },
    {
      image: "/images/card-4.webp",
      translate: "translate-y-[10%]",
      hidden: "max-sm:hidden",
    },
    {
      image: "/images/card-5.webp",
      translate: "translate-y-[20%]",
      hidden: "max-sm:hidden max-lg:hidden",
    },
  ];

  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();

      const day = now.getDate();
      const month = now.toLocaleString("en-US", { month: "long" });
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      setTime(`${day} ${month} ${year}, ${hours}:${minutes}:${seconds}`);
    }

    updateTime(); // run immediately on load
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    // section here starts

    <section className="flex justify-center items-center h-[600px] max-sm:h-[500px] w-full relative">
      {/* text of hero section */}
      <div className="flex flex-col absolute z-200" id="heroText">
        <p className="text-center text-h6 font-bold max-[400px]:text-h6">
          In the age of AI, it's been about
        </p>
        <p className="text-center text-h6 max-[400px]:text-h6" id="clock">
          {time}
        </p>
        <p className="text-center text-h6 max-[400px]:text-h6">
          since you tried us.
        </p>
      </div>

      {/* background cards presenation div */}
      <div className="w-full max-w-[1024px] bg-gradient-to-r from-[#fafafa] via-primary-white to-[#fafafa] absolute z-100 flex h-full flex-col justify-between overflow-hidden">
        <div
          id="cardsUpRow"
          className="w-full h-fit flex justify-between -translate-y-[20%] gap-8 relative max-md:gap-4 max-sm:px-2 sm:max-lg:px-3"
        >
          {topCards.map((card, index) => (
            <HeroCard
              key={index}
              image={card.image}
              translate={card.translate}
              hidden={card.hidden}
            />
          ))}
        </div>

        <div
          id="cardsUpDown"
          className="w-full h-fit flex justify-between translate-y-[50%] gap-8 relative max-md:gap-4 max-sm:px-2 sm:max-lg:px-3"
        >
          {bottomCards.map((card, index) => (
            <HeroCard
              key={index}
              image={card.image}
              translate={card.translate}
              hidden={card.hidden}
            />
          ))}
        </div>
      </div>

      {/* background here of this section */}
      <div className="h-full bg-primary-grey w-full opacity-10 absolute z-0"></div>
    </section>
  );
}
