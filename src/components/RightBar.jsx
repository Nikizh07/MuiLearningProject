import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", md: "block" } }}>
      <Box position={"fixed"}>
        <Typography variant={"h6"} fontWeight={100}>
          Online Friends
        </Typography>

        <AvatarGroup max={8} sx={{marginRight: "30px"}}>
          <Avatar
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/men/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://randomuser.me/api/portraits/men/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://randomuser.me/api/portraits/women/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://randomuser.me/api/portraits/women/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://randomuser.me/api/portraits/men/5.jpg"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/men/6.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://randomuser.me/api/portraits/men/7.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://randomuser.me/api/portraits/women/8.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://randomuser.me/api/portraits/women/9.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://randomuser.me/api/portraits/men/10.jpg"
          />
        </AvatarGroup>
        <br />
        <Typography variant={"h6"} fontWeight={100}>
          Latest Posts
        </Typography>
        <ImageList sx={{width: "95%", height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default RightBar;
