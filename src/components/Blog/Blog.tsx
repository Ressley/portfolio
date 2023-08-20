import { FC } from "react";
import { BlogGrid } from "./BlogGrid";
import { createStyles } from "@mantine/core";

const useStyle = createStyles((theme) => ({}));

const design = {
  picture: "ab",
  text: [
    {
      subtitle: "string",
      title: "string",
      description: "string",
    },
  ],
};

export const Blog: FC = () => {
  const classes = useStyle();
  return (
    <>
      <BlogGrid grid={design} />
    </>
  );
};
