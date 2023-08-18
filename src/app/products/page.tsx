import { getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowArticle";
import Link from "next/link";
import ex from "../../../public/images/ex.jpeg";
import Image from "next/image";

// export const revalidate = 3;

export default async function ProductPage() {
  // throw new Error(); // 에러 메시지 체크
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그것을 보여주기

  const products = await getProducts();

  return (
    <>
      <h1 className="text-xl text-orange-300">제품 소개 페이지</h1>
      <Image
        src={ex}
        alt="Clothes"
      />
      <ul className="flex justif  y-between text-xl">
        {products.map((product, idx) => (
          <Link
            href={`products/${product.id}`}
            key={idx}
            className="p-2"
          >
            {product.name}
          </Link>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
