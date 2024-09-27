import { FC, ReactNode } from "react";
import {
  Timeline,
  Text,
  createStyles,
  Box,
  ThemeIcon,
  Autocomplete,
} from "@mantine/core";
import { IconBook } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  iconWrapper: {
    padding: "1px",
    backgroundImage: theme.fn.gradient({
      from: "#404040",
      to: "#33333300",
      deg: 115,
    }),
    borderRadius: "5px",
  },
  timelineItem: {
    ".mantine-Timeline-itemBullet": {
      backgroundColor: "unset",
      border: "unset",
    },
  },
  bullet: {
    borderRadius: "20px",
    backgroundColor: "#ffd86d",
    border: "2px solid gray",
    width: "24px",
    height: "24px",
  },
  iconBorder: {
    borderRadius: "5px",
    backgroundColor: "#202022",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
  },
  bigwrapper: {
    padding: 20,
    color: "black",
  },
  wrapper: {
    color: "black",
  },
  type: {
    color: "#fafafa",
    fontSize: 28,
    fontWeight: 800,
    padding: "0 0 0 33px"
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: 600,
    padding: "0 0 0 10px"
  },
  years: {
    color: "#ceb25a",
    padding: "0 0 0 10px"
  },
  description: {
    color: "#d6d6d6",
    padding: "0 0 0 10px"
  },
}));

export interface ResumeLineProps {
  data: {
    type: string;
    items: {
      title: string;
      years: string;
      description: string;
    }[];
  };
}

export const ResumeLine: FC<ResumeLineProps> = ({ data }) => {
  const { classes } = useStyles();
  return (
    <Timeline
      className={classes.bigwrapper}
      active={4}
      lineWidth={1}
      bulletSize={48}
      color="gray"
      reverseActive
    >
      <Timeline.Item
        className={classes.type}
        bulletSize={32}
        bullet={
          <Box className={classes.iconWrapper}>
            <Box className={classes.iconBorder}>
              <IconBook size="32px" color="#ffd86d" />
            </Box>
          </Box>
        }
      >
        {data.type}{" "}
      </Timeline.Item>
      {data.items.map((item) => {
        return (
          <Timeline.Item
            bulletSize={32}
            opacity={100}
            className={classes.timelineItem}
            bullet={<Box className={classes.bullet}></Box>}
          >
            <Box className={classes.wrapper}>
              <Text className={classes.title}> {item.title} </Text>
              <Text className={classes.years}> {item.years} </Text>
              <Text className={classes.description}> {item.description} </Text>
            </Box>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
};
