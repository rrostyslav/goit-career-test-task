import { Typography } from "@/components/Typography";
import { Button } from "@/components/Button";
import { useNavigate } from "react-router";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleViewNowClick = () => {
    navigate("/catalog");
  };

  return (
    <div className="h-full flex bg-[url('/src/assets/images/hero.jpg')] bg-cover items-center px-[112px]">
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-4">
          <Typography name="h1" color="inputs">
            Campers of your dreams
          </Typography>
          <Typography name="h2" color="inputs">
            You can find everything you want in our catalog
          </Typography>
        </div>
        <Button onClick={handleViewNowClick}>View Now</Button>
      </div>
    </div>
  );
};
