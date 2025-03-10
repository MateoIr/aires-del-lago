import { useState } from "react";
import { Box } from "@mui/material";

const HousePhotoSlider = ({ images, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleMouseEnter = () => {
    if (images.length > 1) {
      setCurrentIndex(1);
    }
  };

  const handleMouseLeave = () => {
    setCurrentIndex(initialIndex);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "all opacity 1s ease-in-out",
      }}
    />
  );
};

export default HousePhotoSlider;
