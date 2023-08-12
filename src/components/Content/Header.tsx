import { Box, createStyles, Text } from "@mantine/core";
import { FC } from "react";

const useStyles = createStyles((theme) => ({
  header: {
    padding: "20px 40px",
    height: "fit-content",
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    background: "#2B2B2B",
    borderRadius: "0px 25px",
  },
  text: {
    color: "white",
    ":hover": {
      color: "#FFDB70",
    },
    cursor: "pointer",
  },
}));

export interface HeaderProps {
  buttons: { link: string; label: string }[];
}

export const ContentHeader: FC<HeaderProps> = ({ buttons }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.header}>
      {buttons.map((item) => {
        return <Text className={classes.text}> {item.label}</Text>;
      })}
    </Box>
  );
};
