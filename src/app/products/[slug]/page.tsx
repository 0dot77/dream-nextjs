import NotFound from "@/app/not-found";
import { getProduct, getProducts } from "@/service/products";
import Image from "next/image";

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default async function ProductsPage({ params: { slug } }: Props) {
  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그것을 보여줌
  const product = await getProduct(slug);
  if (!product) {
    NotFound();
  }
  return (
    <>
      <Image
        src={`/images/${product?.image}`}
        alt={`${product?.name}`}
        width="400"
        height="400"
      />
      <h1>{product?.name} Page</h1>
    </>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄 것 (SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
