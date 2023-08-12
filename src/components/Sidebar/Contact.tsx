import { Box, createStyles, Text } from "@mantine/core";
import { FC, ReactNode } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    gap: "10px",
    padding: "10px",
  },
  left: {
    background: "#2B2B2B",
    width: "64px",
    height: "64px",
    borderRadius: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    height: "64px",
    justifyContent: "center",
  },
  label: {
    color: "#9F9E9F",
    fontSize: "20px",
    fontWeight: 600,
  },
  text: {
    color: "#FAFAFA",
    fontSize: "16px",
    fontWeight: 400,
  },
}));

export interface ContactProps {
  label: string;
  text: string;
  icon: ReactNode;
}

export const Contact: FC<ContactProps> = ({ label, text, icon }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.left}>{icon}</Box>
      <Box className={classes.right}>
        <Text className={classes.label}>{label}</Text>
        <Text className={classes.text}>{text}</Text>
      </Box>
    </Box>
  );
};
