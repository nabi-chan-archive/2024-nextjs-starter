import { GetStaticPropsContext } from "next";
import { Product } from "~/types/Product";

interface PageProps {
  product: Product;
}

export default function Page({ product }: PageProps) {
  return <pre>{JSON.stringify(product, null, 2)}</pre>;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const product = await fetch(
    `https://dummyjson.com/products/${context.params?.["product-id"]}`
  ).then((res) => res.json());

  return {
    props: {
      product: product,
    },
  };
}

export async function getStaticPaths() {
  const { products } = await fetch("https://dummyjson.com/products").then(
    (res) => res.json()
  );

  return {
    paths: products.map((product: Product) => ({
      params: {
        "product-id": product.id.toString(),
      },
    })),
    fallback: false,
  };
}
