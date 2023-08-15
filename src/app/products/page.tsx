import Link from "next/link";

const products = ["shirt", "pants", "skirt", "shoes"];

export default function ProductPage() {
  return (
    <>
      <h1 className="text-xl text-orange-300">제품 소개 페이지</h1>
      <ul className="flex justify-between text-xl">
        {products.map((product, idx) => (
          <Link
            href={`products/${product}`}
            key={idx}
            className="p-2"
          >
            {product}
          </Link>
        ))}
      </ul>
    </>
  );
}
