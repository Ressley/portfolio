import { Box, Button, createStyles, Title } from "@mantine/core";
import { FC, ReactNode } from "react";
import { ContentHeader } from "./Header";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "end",
    background: "#1E1F1F",
    borderRadius: "25px",
    border: "2px solid #393838",
    height: "100%",
  },

  inner: {
    width: "100%",
    padding: "20px",
  },

  header: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },

  title: {
    padding: "20px",
    color: "white",
  },
}));

const buttons = [
  {
    link: "about",
    label: "About",
    title: "About Me",
  },
  {
    link: "resume",
    label: "Resume",
    title: "About Me",
  },
  {
    link: "portfolio",
    label: "Portfolio",
    title: "About Me",
  },
  {
    link: "blog",
    label: "Blog",
    title: "About Me",
  },
  {
    link: "contact",
    label: "Contact",
    title: "About Me",
  },
];

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.header}>
        <Box className={classes.title}>
          <Title> {buttons[0].title}</Title>
        </Box>
        <ContentHeader buttons={buttons} />
      </Box>
      <Box className={classes.inner}>
        <Box p={"20px"}>{children}</Box>
      </Box>
    </Box>
  );
};
