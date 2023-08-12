import { Box, createStyles, Text } from "@mantine/core";
import { FC } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  text: {
    color: "white",
  },
}));

export const About: FC = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Text className={classes.text}>
        I'm Creative Director and UI/UX Designer from Sydney, Australia, working
        in web development and print media. I enjoy turning complex problems
        into simple, beautiful and intuitive designs.
      </Text>
      <Text className={classes.text}>
        My job is to build your website so that it is functional and
        user-friendly but at the same time attractive. Moreover, I add personal
        touch to your product and make sure that is eye-catching and easy to
        use. My aim is to bring across your message and identity in the most
        creative way. I created web design for many famous brand companies.
      </Text>
    </Box>
  );
};
