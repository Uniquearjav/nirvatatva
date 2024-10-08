import ProductCard from "@/components/productcard"


export function metadata(){
  return {
    title: "Store | Horizaura",
    description: "Horizaura: Enhancing homes with beautifully crafted elegance. Explore our stunning selection of sofas, home decor, and captivating resin plates. Experience the blend of artistic craftsmanship and comfort in every aspect. Welcome to a world where creativity meets refined style.",
  }
}


export default async function Store() {
  // fetch data from the API
  const res = await fetch(`http://${process.env.DOMAIN}/api/products/all`, { cache: 'no-store'})
  const data = await res.json()
  return (
    <div className="container mt-30">
      <h1 className="m-10 text-center text-6xl font-semibold">Store</h1>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {data.map((product) => (
        <ProductCard key={product.asin1} product={product} />
      ))
      }
      </div>
    </div>
  )
}