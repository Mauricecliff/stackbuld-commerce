import ProductList from "@/lib/custom/Product/product-list";
import sampleData from "@/lib/sample-product";

export default function Home() {
  return (
     <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList data={sampleData.products} />
     </div> 
  );
}
