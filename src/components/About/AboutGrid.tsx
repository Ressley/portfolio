import { Box, createStyles, Text, SimpleGrid } from "@mantine/core";
import { FC, ReactNode } from "react";

const useStyles = createStyles((theme) => ({
wrapper: {
    display: "flex", 
    flexDirection: "row",
    gap: "10px",
    padding: "20px",
    background: "#2b2b2b", 
    width: "360px", 
    height: "83px", 
    borderRadius: "14px",
    
}, 
left:{
    alignItems: "center", 
    justifyContent: "center",
    margin: "auto 0"
},
right:{
  display: "flex", 
  flexDirection: "column",
  justifyContent: "center", 
  gap: "15px"
},
label:{
    color: "#9f9f9f", 
    fontWeight: "bold",
    fontSize: "20px"
},
text:{
    color: "white"
}
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


  