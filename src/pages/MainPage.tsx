import { Button } from "@mantine/core";
import { FC } from "react";
import { Content } from "../components/Content/Content";
import { MainLayout } from "../layouts/MainLayout";

export const MainPage: FC = () => {
  return (
    <MainLayout>
      <Content />
    </MainLayout>
  );
};
