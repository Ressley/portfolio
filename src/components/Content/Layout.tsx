import { Box, Button, createStyles, Title } from "@mantine/core";
import { FC, ReactNode, useState } from "react";
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
  },

  header: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },

  title: {
    padding: "20px 0",
    color: "white",
  },

  title_wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "0 20px",
  },

  line: {
    height: "10px",
    width: "50px",
    borderRadius: "5px",
    background: "#FFDB70",
  },
}));

export interface LayoutProps {
  setActive: (link: string) => void;
  buttons: { link: string; label: string; title: string }[];
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ setActive, buttons, children }) => {
  const [title, setTitle] = useState<string>(buttons[0].title);
  const { classes } = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.header}>
        <Box className={classes.title_wrapper}>
          <Title className={classes.title}> {title}</Title>
          <Box className={classes.line}></Box>
        </Box>
        <ContentHeader
          buttons={buttons}
          setActive={(link: string) => {
            setActive(link);
            setTitle(buttons.filter((button) => button.link === link)[0].title);
          }}
        />
      </Box>
      <Box className={classes.inner}>
        <Box p={"20px"}>{children}</Box>
      </Box>
    </Box>
  );
};
