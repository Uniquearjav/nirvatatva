import Image from 'next/image';
import React from 'react';

const Store = async () => {
  // let products = [];
  // let error = null;

  // try {
  //   const response = await fetch(`${process.env.WEBSITE}/api/collection`, {
  //     cache: 'no-store', // Ensures the data is fetched fresh each time (no caching)
  //   });
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch data');
  //   }
  //   products = await response.json();
  // } catch (err) {
  //   error = err.message;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }
  const data = [
  {
    "_id": "66d98648db73e6be1b6f13df",
    "id": 1,
    "name": "Arjav",
    "price": 150000,
    "desc": "Hola",
    "count": 5,
    "cgry": "Furniture",
    "sku": 5,
    "slug": "arjav",
    "disc_price": 7000
  },
  {
    "_id": "670fe2fdb734a407fe16f41a",
    "id": 2,
    "name": "Metal Paris Eiffel Tower 3D",
    "price": 700,
    "desc": "Metal Paris Eiffel Tower Metal Craft Famous Landmark Building Metal Statue, Cabinet, Office, Gifts Decorative Showpiece",
    "count": 5,
    "cgry": "Home_Decor",
    "sku": 5,
    "slug": "metal_eiffel_tower",
    "disc_price": 200
  },
  {
    "_id": "66d98648db73e6be1b6f13df",
    "id": 1,
    "name": "Arjav",
    "price": 150000,
    "desc": "Hola",
    "count": 5,
    "cgry": "Furniture",
    "sku": 5,
    "slug": "arjav",
    "disc_price": 7000
  },
  {
    "_id": "670fe2fdb734a407fe16f41a",
    "id": 2,
    "name": "Metal Paris Eiffel Tower 3D",
    "price": 700,
    "desc": "Metal Paris Eiffel Tower Metal Craft Famous Landmark Building Metal Statue, Cabinet, Office, Gifts Decorative Showpiece",
    "count": 5,
    "cgry": "Home_Decor",
    "sku": 5,
    "slug": "metal_eiffel_tower",
    "disc_price": 200
  },
  {
    "_id": "66d98648db73e6be1b6f13df",
    "id": 1,
    "name": "Arjav",
    "price": 150000,
    "desc": "Hola",
    "count": 5,
    "cgry": "Furniture",
    "sku": 5,
    "slug": "arjav",
    "disc_price": 7000
  },
  {
    "_id": "670fe2fdb734a407fe16f41a",
    "id": 2,
    "name": "Metal Paris Eiffel Tower 3D",
    "price": 700,
    "desc": "Metal Paris Eiffel Tower Metal Craft Famous Landmark Building Metal Statue, Cabinet, Office, Gifts Decorative Showpiece",
    "count": 5,
    "cgry": "Home_Decor",
    "sku": 5,
    "slug": "metal_eiffel_tower",
    "disc_price": 200
  },
  {
    "_id": "66d98648db73e6be1b6f13df",
    "id": 1,
    "name": "Arjav",
    "price": 150000,
    "desc": "Hola",
    "count": 5,
    "cgry": "Furniture",
    "sku": 5,
    "slug": "arjav",
    "disc_price": 7000
  },
  {
    "_id": "670fe2fdb734a407fe16f41a",
    "id": 2,
    "name": "Metal Paris Eiffel Tower 3D",
    "price": 700,
    "desc": "Metal Paris Eiffel Tower Metal Craft Famous Landmark Building Metal Statue, Cabinet, Office, Gifts Decorative Showpiece",
    "count": 5,
    "cgry": "Home_Decor",
    "sku": 5,
    "slug": "metal_eiffel_tower",
    "disc_price": 200
  },
  {
    "_id": "66d98648db73e6be1b6f13df",
    "id": 1,
    "name": "Arjav",
    "price": 150000,
    "desc": "Hola",
    "count": 5,
    "cgry": "Furniture",
    "sku": 5,
    "slug": "arjav",
    "disc_price": 7000
  },
  {
    "_id": "670fe2fdb734a407fe16f41a",
    "id": 2,
    "name": "Metal Paris Eiffel Tower 3D",
    "price": 700,
    "desc": "Metal Paris Eiffel Tower Metal Craft Famous Landmark Building Metal Statue, Cabinet, Office, Gifts Decorative Showpiece",
    "count": 5,
    "cgry": "Home_Decor",
    "sku": 5,
    "slug": "metal_eiffel_tower",
    "disc_price": 200
  },
  {
    "_id": "66d98648db73e6be1b6f13df",
    "id": 1,
    "name": "Arjav",
    "price": 150000,
    "desc": "Hola",
    "count": 5,
    "cgry": "Furniture",
    "sku": 5,
    "slug": "arjav",
    "disc_price": 7000
  },
  {
    "_id": "670fe2fdb734a407fe16f41a",
    "id": 2,
    "name": "Metal Paris Eiffel Tower 3D",
    "price": 700,
    "desc": "Metal Paris Eiffel Tower Metal Craft Famous Landmark Building Metal Statue, Cabinet, Office, Gifts Decorative Showpiece",
    "count": 5,
    "cgry": "Home_Decor",
    "sku": 5,
    "slug": "metal_eiffel_tower",
    "disc_price": 200
  },
]
  return (
    <div>
      <h1 className='font-extrabold text-6xl text-center m-2'>Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {data.map((product) => {
          // Calculate discount percentage
          const originalPrice = product.price; // Assuming product.price is the original price
          const discountedPrice = product.disc_price; // Assuming product.disc_price is the discounted price
          const discountPercentage = originalPrice && discountedPrice
            ? Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)
            : 0; // Handle division by zero

          return (
            <div key={product._id} className=" m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <a className=" mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <Image
                  className="object-cover"
                  src={`/media/NT${product.id}.png`} // Make sure to use the correct image source
                  width={300}
                  height={300}
                  alt={`/media/NT${product.id}.png`}
                />
                
              </a>
              <div className="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl tracking-tight text-slate-900">{product.name}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                <span className=" top-0 left-0 m-2 rounded-sm bg-black px-2 text-center text-sm font-medium text-white">
                  {discountPercentage}% OFF
                </span>
                  <p>
                    <span className="text-3xl font-bold text-slate-900">&#8377;{discountedPrice}</span>
                    <span className="text-sm text-slate-900 line-through">&#8377;{originalPrice}</span>
                  </p>
                  
                </div>
                <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to cart
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
