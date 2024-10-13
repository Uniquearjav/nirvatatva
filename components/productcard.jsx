/**
 * v0 by Vercel.
 * @see https://v0.dev/t/o6vcCSQCXX9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function productcard() {
  const products = [
    {
      id: 1,
      name: "Cozy Fleece Pullover",
      sku: "SKU-123",
      originalPrice: 59.99,
      discountedPrice: 39.99,
      description: "Soft and warm fleece pullover for everyday wear.",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Vintage Leather Backpack",
      sku: "SKU-456",
      originalPrice: 149.99,
      discountedPrice: 99.99,
      description: "Durable and stylish leather backpack for work or travel.",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      sku: "SKU-789",
      originalPrice: 29.99,
      discountedPrice: 19.99,
      description: "Soft and sustainable organic cotton t-shirt.",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Minimalist Desk Lamp",
      sku: "SKU-012",
      originalPrice: 79.99,
      discountedPrice: 59.99,
      description: "Sleek and energy-efficient desk lamp for your workspace.",
      image: "/placeholder.svg",
    },
  ]
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6 grid gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Featured Products</h1>
            <p className="text-muted-foreground">Discover our latest collection of stylish and practical products.</p>
          </div>
          <div className="w-full md:w-auto">
            <Input
              placeholder="Search products..."
              className="w-full bg-background shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="border rounded-lg overflow-hidden">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View {product.name}</span>
              </Link>
              <img
                src="/placeholder.svg"
                alt={product.name}
                width={300}
                height={300}
                className="w-full aspect-square object-cover"
              />
              <CardContent className="p-4 grid gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm line-through text-muted-foreground">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="font-semibold">${product.discountedPrice.toFixed(2)}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">SKU: {product.sku}</span>
                  <Button variant="outline" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}