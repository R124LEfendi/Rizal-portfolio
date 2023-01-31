import * as React from "react";
import ContainerSection from "../../Components/ContainerSection";
import Typography from "@mui/material/Typography";
import { Container, Grid, Avatar } from "@mui/material";
import { Box } from "@mui/system";

export default function About() {
  return (
    <ContainerSection title={"Tentang saya"}>
      <Grid
        id="about"
        container
        sx={{ display: { md: "flex", xs: "grid", alignItems: "center" } }}
      >
        <Grid item md={6}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Perkenalkan nama saya adalah Rizal Efendi. Saya adalah seorang
              front end developer. Saya memulai belajar programming karena
              diajak oleh teman saya dan juga ketertarikan saya tentang dunia
              teknologi terutama Teknik Informatika.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          display="flex"
          justifyContent="center"
          margin="auto"
          sx={{ paddingTop: { xs: "25px", md: "0px" } }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/Rizal.jpg"
            sx={{ width: 200, height: 200 }}
          />
        </Grid>
      </Grid>
    </ContainerSection>
  );
}
