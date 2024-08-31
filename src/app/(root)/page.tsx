import { getLatestProducts } from "@/lib/actions/product.actions";
import ProductList from "@/lib/custom/Product/product-list";

export default async function Home() {
   const latestProducts = await getLatestProducts()

  return (
     <div className="space-y-8">
      <ProductList title="Latest Products" data={latestProducts} />
     </div> 
  );
}
