import { fetchAllPOrducts } from "@/actions";
import Header from "@/components/header";
import ProductCard from "@/components/produt-card";

export default async function Home() {
  const getAllProducts = await fetchAllPOrducts();
  return (
    <div>
      <div className="min-h-[80vh] grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto p-2 ">
        {getAllProducts &&
          getAllProducts.data &&
          getAllProducts.data.length > 0 &&
          getAllProducts.data.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
