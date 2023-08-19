import { FC } from "react";
import { Text, Box, Timeline, createStyles } from "@mantine/core"
import { IconBook} from "@tabler/icons-react"
import { ResumeLine} from "./ResumeLine"
const useStyles = createStyles ((theme) => ({
text1:{
  color: "yellow"
},
texts:{

},
items:{

},
data: {
  
}

}));

const education = {
  type : "Education",
  items : [
    {
      title: "University School Of The Arts",
      years: "2007 — 2008",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },
    {
      title: "New York Academy Of Art",
      years: "2006 — 2007",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },
    {
      title: "High School Of Art And Design",
      years: "2002 — 2004",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    }
  ]
}

const experience = {
  type: "Experience",
  items: [
    {
      title: "Creative Director",
      years: "2015 — Present",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },
    {
      title: "Art Director",
      years: "2013 — 2015",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },
    {
      title: "Web Designer",
      years: "2010 — 2013",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    }
  ]
}


export const Resume: FC = () => {
  const { classes} = useStyles();
  return(
    <>  
      <ResumeLine data={education} />
      <ResumeLine data={experience}/>
      
    </>
  )
  ;
};
