import { Button } from "@mantine/core";
import { FC } from "react";
import { MainLayout } from "../layouts/MainLayout";

export const MainPage: FC = () => {
  return (
    <MainLayout>
      <Button>Hello World</Button>
    </MainLayout>
  );
};
