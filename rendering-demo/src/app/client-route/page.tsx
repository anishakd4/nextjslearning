"use client";

import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

// import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
  console.log("client route rendered");
  const theme = useTheme();
  const result = clientSideFunction();
  // const result = serverSideFunction();
  return (
    <h1 style={{ color: theme.colors.primary }}>ClientRoutePage {result}</h1>
  );
}
