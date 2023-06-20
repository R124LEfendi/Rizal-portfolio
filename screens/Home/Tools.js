import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ContainerSection from "../../Components/ContainerSection";

const slideImages = [
  {
    url: "html.png",
    caption: "HTML CSS Javascript",
  },
  {
    url: "bootstrap.png",
    caption: "Bootstrap",
  },
  {
    url: "mui.webp",
    caption: "Material UI",
  },
  {
    url: "React.webp",
    caption: "React JS",
  },
];

function Tools(props) {
  return (
    <ContainerSection title="Skill">
      <Box id="tools" className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <Box className="each-slide" key={index}>
              <Box
                height="600px"
                width="100%"
                style={{
                  backgroundImage: `url(${slideImage.url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <Typography color="white">{slideImage.caption}</Typography>
              </Box>
            </Box>
          ))}
        </Slide>
      </Box>
    </ContainerSection>
  );
}

export default Tools;
