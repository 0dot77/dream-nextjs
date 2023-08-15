import { Metadata } from "next";

export const metadata: Metadata = {
  title: "멋진 제품 사이트 | 전체 제품 확인",
  description: "멋진 제품을 확인해보세요.",
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="flex justify-start border p-4">
        <a
          href="/products/women"
          className="px-2"
        >
          여성옷
        </a>
        <a
          href="/products/men"
          className="px-2"
        >
          남성옷
        </a>
      </nav>
      <section className="p-2">{children}</section>
    </>
  );
}
