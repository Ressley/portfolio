import { Box, createStyles, Text } from "@mantine/core";
import { FC, ReactNode } from "react";

const useStyles = createStyles((theme) => ({
wrapper: {}, 
left:{},
right:{},
label:{},
text:{}
}));


export interface AboutGridProps {
    label: string;
    text: string;
    icon: ReactNode;
  }
  
export const AboutGrid: FC<AboutGridProps> = ({ label, text, icon }) => {
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


  