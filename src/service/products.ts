import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
};

// 요청할 때 데이터를 가져오는 것이기 때문에 async를 사용한다.
// 타입스크립트의 함수 부분의 Promise는 비동기를 수행한 후에 <> 제네릭 값을 반환한다고 이해할 수 있겠다.
export async function getProducts(): Promise<Product[]> {
  // 아래의 코드는 짧지만, data를 처리하는 방법을 담고 있다.
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  // 제품의 객체를 리턴하기
  const products = await getProducts();
  return products.find((item) => item.id === id);
}
