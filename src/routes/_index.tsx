import type { MetaFunction } from "@remix-run/node";
import { MainStack } from "../components/MainStack";

export const meta: MetaFunction = () => {
  return [
    { title: "All About China" },
    { name: "description", content: "An app I made for my health class." },
  ];
};

export default function Index() {
  return (
    <MainStack />
  );
}
