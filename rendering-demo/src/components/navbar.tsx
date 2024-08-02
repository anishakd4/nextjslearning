"use client";
import { useState } from "react";
import { NavLinks } from "./nav-links";
import { NavSearch } from "./nav-search";

export const Navbar = () => {
  console.log("navbar rendered");
  const [search, setSearch] = useState("");
  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};
