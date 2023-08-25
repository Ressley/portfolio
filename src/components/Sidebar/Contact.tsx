import { Box, createStyles, Text } from "@mantine/core";
import { FC, ReactNode } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    gap: "10px",
    width: "100%",
    cursor: "pointer",
    "&:hover": {
      background: "#272929",
      borderRadius: "20px",
    },
  },
  left: {
    background: "#2B2B2B",
    width: "46px",
    height: "46px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    height: "46px",
    justifyContent: "center",
  },
  label: {
    color: "#9F9E9F",
    fontSize: "16px",
    fontWeight: 600,
  },
  text: {
    color: "#FAFAFA",
    fontSize: "14px",
    fontWeight: 400,
  },
}));

export interface ContactProps {
  label: string;
  text: string;
  icon: ReactNode;
  link: string;
}

export const Contact: FC<ContactProps> = ({ label, text, icon, link }) => {
  const { classes } = useStyles();
  return (
    <Box
      className={classes.wrapper}
      onClick={() => {
        window.open(link, "_blank", "noopener, noreferrer");
      }}
    >
      <Box className={classes.left}>{icon}</Box>
      <Box className={classes.right}>
        <Text className={classes.label}>{label}</Text>
        <Text className={classes.text}>{text}</Text>
      </Box>
    </Box>
  );
};
