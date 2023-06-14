import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ContainerSection from "../../Components/ContainerSection";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Project() {
  const datas = [
    {
      id: 1,
      nama: "project1",
      url: "https://belajar-neon.vercel.app/",
      image: "project1.jpg",
    },
    {
      id: 2,
      nama: "project2",
      url: "https://belajar-bootstrap-d2ge.vercel.app/",
      image: "project2.jpg",
    },
    {
      id: 3,
      nama: "project3",
      url: "https://web-film-three.vercel.app/",
      image: "project3.jpg",
    },
  ];

  return (
    <ContainerSection title={"Project"}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 14 }}
        >
          {datas.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                <a href={item.url}>
                  <img src={item.image} className="projectImage" />
                </a>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ContainerSection>
  );
}
