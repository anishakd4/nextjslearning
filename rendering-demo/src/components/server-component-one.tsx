import fs from "fs";
import { ClientComponentOne } from "./client-component-one";

export const ServerComponentOne = () => {
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
  return (
    <>
      <h1>Server Component one</h1>
    </>
  );
};
