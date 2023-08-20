import { FC, ReactNode } from "react";
import { Box, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({}));

export interface BlogGridProps {
  grid: {
    picture: string /*ReactNode*/;
    text: {
      subtitle: string;
      title: string;
      description: string;
    }[];
  };
}

export const BlogGrid: FC<BlogGridProps> = ({ grid }) => {
  const { classes } = useStyles();
  return <Box>{grid.picture}</Box>;
};
