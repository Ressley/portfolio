import { AppShell, Box, createStyles } from "@mantine/core";
import { FC, ReactNode } from "react";
import { MainNavbar } from "../components/Sidebar/Navbar";
import { SideBar } from "../components/Sidebar/SideBar";

const useStyles = createStyles((theme) => ({
  wrapper: {
    width: "1200px",
    height: "100%",
    margin: "20px auto",
    display: "flex",
    background: "#121212",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    width: "240px",
    height: "100%",
  },
  right: {
    width: "860px",
    height: "100%",
  },
  appshell: {
    background: "#121212",
    padding: "20px",
  },
}));

export interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.left}>
        <SideBar />
      </Box>
      <Box className={classes.right}></Box>
    </Box>
  );
};
