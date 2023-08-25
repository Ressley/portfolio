import { FC } from "react";
import {
  Box,
  createStyles,
  Card,
  Text,
  Image,
  Badge,
  Group,
  Paper,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    background: "#202022",
    gap: "16px",
    borderRadius: "22px",
    border: "3px solid #2b2a2b",
  },
  subtitle: {
    color: "#9fa09f",
  },
  title: {
    color: "#fafafa",
    fontWeight: 800,
    fontSize: "24px",
    "&:hover": {
      color: "#FFDB70",
    },
  },
  image: {
    transition: "0.5s all ease-in-out",
    "&:hover, &:focus": {
      transform: "scale(1.2)",
    },
  },
  description: {
    color: "#d6d6d6",
    fontSize: "12px",
  },
}));

export interface BlogCardProps {
  card: {
    picture: string;
    text: {
      subtitle: string;
      date: string;
      title: string;
      description: string;
    };
  };
}
export const BlogCard: FC<BlogCardProps> = ({ card }) => {
  const { classes } = useStyles();
  return (
    <>
      <Card className={classes.wrapper} padding={0}>
        <Image
          src={card.picture}
          width={"100%"}
          height={"50%"}
          radius={"xl"}
          className={classes.image}
        />
        <Box p={"1rem 2rem"}>
          <Text className={classes.subtitle}>
            {" "}
            {card.text.subtitle} &#x2022; {card.text.date}
          </Text>
          <Text className={classes.title}>{card.text.title}</Text>
          <Text className={classes.description}>{card.text.description}</Text>
        </Box>
      </Card>
    </>
  );
};
