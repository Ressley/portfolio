import { FC } from "react";
import { Card, createStyles, Image, Text, Box } from "@mantine/core";

const useStyles = createStyles((theme) => ({

wrapper:{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "16px"
    
},
header:{
    display: "flex",
    flexDirection: "row",

},
image: {

},
title: {
    color: "whitesmoke"
},
type:{
    color: "whitesmoke"
}


}));
export interface PortfolioCardProps {
  card: {
    picture: string;
    title: string;
    type: string;
  };
}

export const PortfolioCard: FC<PortfolioCardProps> = ({ card }) => {
  const { classes } = useStyles();
  return (
    <>
      <Box className={classes.wrapper}>
        <Image src={card.picture}
        width={"100%"}
        radius={"xs"}
        className={classes.image}
        />
        <Text className={classes.title}>
            {card.title}
        </Text>
        <Text className={classes.type}>
            {card.type}

        </Text>
      </Box>
    </>
  );
};
