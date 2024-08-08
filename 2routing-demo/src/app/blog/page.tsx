import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "anishblog",
  },
};

// export const metadata: Metadata = {
//   title: "Blog",
// };

export default function Blog() {
  return <h1>Blog</h1>;
}
