import { Box, Button } from "@mantine/core";
import { FC } from "react";
import { About } from "../About/About";
import { Layout } from "./Layout";

export const Content: FC = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};
