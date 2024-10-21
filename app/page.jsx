import Hero from "@/components/hero_image";
import Image from "next/image";
import React from "react";
import { LuInstagram } from "react-icons/lu";
import Paris from "../public/media/NT2.png";

export default function Page() {
  return (
    <div>
      <Hero />
      <section className="">
        <div className=" items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter md:text-5xl lg:text-6xl lg:max-w-7xl">
                  Premium products in <br className="hidden lg:block" />
                  Affordable Price
                </h1>
                <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed ">
                Nirvatatva: Premium products, blending tradition and affordability.</p>
                <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  <div className="mt-3 rounded-lg sm:mt-0">
                    <a className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl ">
                      Get bundle
                    </a>
                  </div>
                  <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                    <a className="items-center px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl ">
                      See features
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="font-bold text-5xl text-center">Featured Products</h1>
        
        <div className="ok">
          <div className="container bg-slate-500 w-1/3 h-10 rounded-lg p-10 m-10">

          </div>
        </div>
      </section>
      <section className="">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Building digital <br />
              products &amp; brands.
            </h1>

            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              This free and open-source landing page template was built using
              the utility classes from
            </p>

            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                href={process.env.INSTAGRAM}
                target="_blank"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <LuInstagram className="h-8 w-8 mx-2" /> View on Instagram
              </a>

              <a
                href={process.env.GOOGLE}
                target="_blank"
                className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                See us on Google !!
              </a>
            </div>
          </div>

          <div className="hidden  lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={Paris} alt='Paris' className="rounded-md" />
          </div>
        </div>
      </section>
    </div>
  );
}
