import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

const Home: React.FC = () => {
  const words = [
    "Starboy",
    "Creepin",
    "Zaroorat",
    "Galliyan",
    "Karige Loga",
    "Ae Dil Hai Mushkil ",
  ];
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="max-sm:text-xl text-2xl flex flex-col gap-2 w-full max-sm:font-semibold font-bold text-secondary-foreground">
        <div>
          My Favourite Song :{" "}
          <FlipWords className="text-primary" words={words} />
        </div>
        <div>
          Made by{" "}
          <a
            href="https://github.com/cygnuxxs"
            target="_blank"
            className="text-primary hover:underline"
          >
            Cygnuxxs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
