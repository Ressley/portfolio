import { Box, Button } from "@mantine/core";
import { FC, useState } from "react";
import { Contact } from "../../Contact/Contact";
import { About } from "../About/About";
import { Blog } from "../Blog/Blog";
import { Portfolio } from "../Portfolio/Portfolio";
import { Resume } from "../Resume/Resume";
import { Layout } from "./Layout";

const buttons = [
  {
    link: "about",
    label: "About",
    title: "About Me",
    render: <About />,
  },
  {
    link: "resume",
    label: "Resume",
    title: "Resume",
    render: <Resume />,
  },
  {
    link: "portfolio",
    label: "Portfolio",
    title: "Portfolio",
    render: <Portfolio />,
  },
  {
    link: "blog",
    label: "Blog",
    title: "Blog",
    render: <Blog />,
  },
  {
    link: "contact",
    label: "Contact",
    title: "Contact",
    render: <Contact />,
  },
];

export const Content: FC = () => {
  const [active, setActive] = useState<string>(buttons[0].link);
  return (
    <Layout buttons={buttons} setActive={setActive}>
      {buttons.filter((button) => button.link === active)[0].render}
    </Layout>
  );
};
