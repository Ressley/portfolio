import { Box, createStyles } from "@mantine/core";
import { FC } from "react";

const useStyles = createStyles((theme) => ({
  avatar: {
    width: "160px",
    height: "160px",
    borderRadius: "40px",
    border: "2px solid #393838",
    background: "#2B2B2B",
  },
}));

export const Avatar: FC = () => {
  const { classes } = useStyles();
  return <Box className={classes.avatar}></Box>;
};
