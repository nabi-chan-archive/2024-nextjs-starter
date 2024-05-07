import { Product } from "~/types/Product";

interface PageProps {
  products: Product[];
  total: number;
}

export default function Page({ products, total }: PageProps) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">총 {total} 개의 상품</h1>
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <div key={product.id}>
            <h2 className="text-xl font-bold mb-2">상품 {product.id} 번</h2>
            <pre key={product.id}>{JSON.stringify(product, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { products, total } = await fetch(
    "https://dummyjson.com/products"
  ).then((res) => res.json());

  return {
    props: {
      products: products,
      total: total,
    },
  };
}
