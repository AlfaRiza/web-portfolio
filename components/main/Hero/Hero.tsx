import HeroContent from "@/components/sub/HeroContent";
import { type FC, type ReactElement } from "react"
import StarsCanvas from "../StarBackground";

const Hero: FC = (): ReactElement => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute left-0 z-[1] object-cover top-[-400px]"
      >
        <source src={require("@/public/blackhole.webm")} type="video/webm" />
      </video>
      <HeroContent />
      <StarsCanvas />
    </div>
  );
}

export default Hero
