import { FC } from "react";
import { BlogCard } from "./BlogCard";
import { SimpleGrid, createStyles } from "@mantine/core";

const useStyle = createStyles((theme) => ({}));

const design = {
  picture:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/NU_Building.jpg/1200px-NU_Building.jpg",
  text: {
    subtitle: "Design",
    date: "Dec 24, 2022",
    title: "Design Conferences in 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptates ipsa voluptate accusantium quisquam sunt, accusamus ipsum vero adipisci illum fugit aperiam. Et itaque deserunt, dicta iure vel illo maxime",
  },
};

export const Blog: FC = () => {
  const classes = useStyle();
  return (
    <SimpleGrid cols={2} spacing={"40px"}>
      <BlogCard card={design} />
      <BlogCard card={design} />
      <BlogCard card={design} />
      <BlogCard card={design} />
      <BlogCard card={design} />
      <BlogCard card={design} />
      <BlogCard card={design} />
      <BlogCard card={design} />
    </SimpleGrid>
  );
};

/* 
     
      <BlogCard card={design} />
      <BlogCard card={design} />
      <BlogCard card={design} />
      <BlogCard card={design} />
      <BlogCard card={design} /> */
