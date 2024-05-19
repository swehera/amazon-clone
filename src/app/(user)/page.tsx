import Banner from "@/ui/Banner";
import ProductList from "@/ui/ProductList";

const getData = async () => {
  const response = await fetch("https://fakestoreapi.com/products/", {
    next: {
      revalidate: 10,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export default async function Home() {
  const products = await getData();
  // console.log("Data", product);

  return (
    <main>
      <Banner />
      <div className="max-w-screen-xl mx-auto  -mt-32 z-20">
        <ProductList products={products} />
      </div>
    </main>
  );
}
