import { createStyles, Navbar, Text } from "@mantine/core";
import { FC } from "react";
import { SideBar } from "./SideBar";

const useStyles = createStyles((theme) => ({
  navbar: {
    background: "#121212",
    border: "unset",
    padding: "50px",
  },
}));

export const MainNavbar: FC = () => {
  const { classes } = useStyles();
  return (
    <Navbar className={classes.navbar} width={{ base: "30%" }}>
      <Navbar.Section grow>
        <SideBar />
      </Navbar.Section>
    </Navbar>
  );
};
