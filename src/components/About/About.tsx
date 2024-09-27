import { Box, createStyles, Text, Title, SimpleGrid } from "@mantine/core";
import { FC } from "react";
import {
  IconChartBar,
  IconAnalyze,
  IconTestPipe,
  IconDeviceVisionPro,
} from "@tabler/icons-react";
import { AboutGrid } from "./AboutGrid";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  text: {
    color: "white",
  },
  header2: {
    color: "white",
    padding: "20px 0",
  },
  grid: {
    color: "cyanide",
  },
}));

const doings = [
  {
    icon: <IconChartBar color="#FFDB70" size={48} />,
    label: "Data Analysis",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    icon: <IconAnalyze color="#FFDB70" size={48} />,
    label: "Data Science",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    icon: <IconTestPipe color="#FFDB70" size={48} />,
    label: "Data Pipelines",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    icon: <IconDeviceVisionPro color="#FFDB70" size={48} />,
    label: "Computer Vision",
    text: "Lorem ipsum dolor sit amet",
  },
];

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
      <Title order={3} className={classes.header2}>
        What I'm Doing
      </Title>
      <Box className={classes.grid}>
        <SimpleGrid cols={2}>
          {doings.map((doing) => {
            return (
              <AboutGrid
                label={doing.label}
                text={doing.text}
                icon={doing.icon}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
