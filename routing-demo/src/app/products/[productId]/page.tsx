import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => resolve(`Product: ${params.productId}`), 100);
  });
  return {
    title: `Product: ${title}`,
  };
};

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product: ${params.productId}`,
//   };
// };

export default function ProductDetails({ params }: Props) {
  console.log({ params });
  return <h1>Product details {params.productId}</h1>;
}
