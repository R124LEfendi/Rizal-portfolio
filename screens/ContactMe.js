import * as React from "react";
import ContainerSection from "../Components/ContainerSection";
import Typography from "@mui/material/Typography";
import { SocialIcon } from "react-social-icons";
import { Container, Grid, Avatar } from "@mui/material";
import { Box } from "@mui/system";

export default function About() {
  return (
    <ContainerSection title={"Hubungi saya"}>
      <Grid
        id="contact-me"
        container
        sx={{ display: { md: "flex", xs: "grid" } }}
      >
        <Grid
          item
          md={6}
          xs={12}
          display="block"
          sx={{ paddingTop: { xs: "25px", md: "0px" } }}
        >
          <Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3955.115374756137!2d112.06642507455524!3d-7.562397992451555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzMnNDQuNiJTIDExMsKwMDQnMDguNCJF!5e0!3m2!1sid!2sid!4v1686750398920!5m2!1sid!2sid"
              width="300"
              height="450"
              loading="lazy"
            ></iframe>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box>
            <Typography variant="h6" fontWeight="semi-bold">
              Media Sosial :
            </Typography>
          </Box>
          <Box mt={1} display="flex" gap="5px">
            <Box>
              <SocialIcon url="https://facebook.com/rizal.argas" />
            </Box>
            <Box>
              <SocialIcon url="https://www.instagram.com/iam.rizalefendi/" />
            </Box>
            <Box>
              <SocialIcon url="https://api.whatsapp.com/send?phone=6289672108138" />
            </Box>
            <Box>
              <SocialIcon url="https://mail.google.com/mail/u/0/#inbox/rizalgaras@gmail.com" />
            </Box>
          </Box>
          <Box mt={2}>
            <Typography variant="h6" fontWeight="semi-bold">
              Alamat :
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dusun Sugihwaras,RT 019 RW 005,Desa Babadan,Kecamatan
              Patianrowo,Kab Nganjuk,Provinsi Jawa Timur.
            </Typography>
            <Typography mt={2} variant="h6" fontWeight="semi-bold">
              Nomor Handphone :
            </Typography>
            <Typography variant="body2" color="text.secondary">
              089672108138
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ContainerSection>
  );
}
