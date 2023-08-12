import { AppShell, createStyles } from "@mantine/core";
import { FC, ReactNode } from "react";
import { MainNavbar } from "../components/Sidebar/Navbar";

const useStyles = createStyles((theme) => ({
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
    <AppShell className={classes.appshell} navbar={<MainNavbar />}>
      {children}
    </AppShell>
  );
};
