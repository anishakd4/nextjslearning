"use client";
import { useState } from "react";

export const ClientComponentOne = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("Batman");
  return (
    <>
      <h1>Client Component one</h1>
      {children}
    </>
  );
};
