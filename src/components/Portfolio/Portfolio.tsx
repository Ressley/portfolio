import { FC, useState } from "react";
import { SimpleGrid, createStyles, Box, Text } from "@mantine/core";
import { PortfolioCard } from "./PortfolioCard";

const useStyle = createStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "row",
    color: "white",
    gap: "16px",
  },

  category: {
    cursor: "pointer",
  },
}));

const cards = [
  {
    picture:
      "https://preview.thenewsmarket.com/Previews/TNML/StillAssets/1920x1080/474781.jpg",
    title: "Expo 2017",
    type: "Web Design",
  },
  {
    picture:
      "https://preview.thenewsmarket.com/Previews/TNML/StillAssets/1920x1080/474781.jpg",
    title: "Expo 2017",
    type: "Web Design",
  },
  {
    picture:
      "https://preview.thenewsmarket.com/Previews/TNML/StillAssets/1920x1080/474781.jpg",
    title: "Expo 2017",
    type: "Web Design",
  },
  {
    picture:
      "https://preview.thenewsmarket.com/Previews/TNML/StillAssets/1920x1080/474781.jpg",
    title: "Expo 2017",
    type: "GameDev",
  },
  {
    picture:
      "https://preview.thenewsmarket.com/Previews/TNML/StillAssets/1920x1080/474781.jpg",
    title: "Expo 2017",
    type: "GameDev",
  },
  {
    picture:
      "https://preview.thenewsmarket.com/Previews/TNML/StillAssets/1920x1080/474781.jpg",
    title: "Expo 2017",
    type: "Web Design",
  },
  {
    picture:
      "https://preview.thenewsmarket.com/Previews/TNML/StillAssets/1920x1080/474781.jpg",
    title: "Expo 2017",
    type: "Web Dev",
  },
];

export const Portfolio: FC = () => {
  const { classes } = useStyle();
  const [type, setType] = useState<string>("All");
  const types = [
    "All",
    ...cards
      .map((card) => card.type)
      .filter((type, index, array) => array.indexOf(type) === index),
  ];
  return (
    <>
      <Box className={classes.header}>
        {types.map((type) => (
          <Text className={classes.category} onClick={() => setType(type)}>
            {type}
          </Text>
        ))}
      </Box>
      <SimpleGrid cols={3} spacing={"35px"}>
        {cards
          .filter((card) => card.type === type || type === "All")
          .map((card) => (
            <PortfolioCard card={card} />
          ))}
      </SimpleGrid>
    </>
  );
};
