export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  console.log({ params });
  return <h1>Product details {params.productId}</h1>;
}
