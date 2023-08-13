import { Box, createStyles, Text } from "@mantine/core";
import { FC, useState } from "react";

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
  link: {
    color: "white",
    cursor: "pointer",
    "&:hover": {
      opacity: "60%",
    },
  },

  linkActive: {
    "&, &:hover": {
      color: "#FFDB70",
    },
  },
}));

export interface HeaderProps {
  setActive: (link: string) => void;
  buttons: { link: string; label: string }[];
}

export const ContentHeader: FC<HeaderProps> = ({ setActive, buttons }) => {
  const { classes, cx } = useStyles();
  const [active, setActiveInner] = useState<string>(buttons[0].link);
  return (
    <Box className={classes.header}>
      {buttons.map((item) => {
        return (
          <Text
            className={cx(classes.link, {
              [classes.linkActive]: active === item.link,
            })}
            onClick={() => {
              setActive(item.link);
              setActiveInner(item.link);
            }}
          >
            {" "}
            {item.label}
          </Text>
        );
      })}
    </Box>
  );
};
