import React from "react";
import {
  Stack,
  ImageList,
  ImageListItem,
  Box,
  ImageListItemBar,
} from "@mui/material";

const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.name}>
            <img
              src={`${item.name}?w=164&h=164`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <ImageList
        variant="woven"
        sx={{ width: 500, height: 450 }}
        cols={3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.name}>
            <img
              src={`${item.name}?w=164&h=164`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.name}>
              <img src={`${item.name}?w=248`} alt={item.title} loading="lazy" />
              <ImageListItemBar title={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

const itemData = [
  {
    name: "cj1",
    title: "captain jack1",
  },
  {
    name: "cj2",
    title: "captain jack2",
  },
  {
    name: "cj3",
    title: "captain jack3",
  },
  {
    name: "cj4",
    title: "captain jack4",
  },
  {
    name: "cj5",
    title: "captain jack5",
  },
  {
    name: "cj6",
    title: "captain jack6",
  },
  {
    name: "cj7",
    title: "captain jack7",
  },
  {
    name: "cj8",
    title: "captain jack8",
  },
  {
    name: "cj9",
    title: "captain jack9",
  },
  {
    name: "cj10",
    title: "captain jack10",
  },
];

export default MuiImageList;
