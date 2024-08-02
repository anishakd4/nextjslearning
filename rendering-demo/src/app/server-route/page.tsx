import { ImageSlider } from "@/components/ImageSlider";
import { clientSideFunction } from "@/utils/client-utils";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
  console.log("server route rendered");
  const result = serverSideFunction();
  // const result2 = clientSideFunction();
  return (
    <>
      <h1>ServerRoutePage</h1>
      <ImageSlider />
    </>
  );
}
