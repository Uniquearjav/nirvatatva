import Logo from '@/public/nirvatatva.svg'
import Image from 'next/image'
import { FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
    return (


<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <Image src={Logo} className="h-32 w-32 m-5" alt="FlowBite Logo" />
                  <span className="self-center text-5xl font-semibold whitespace-nowrap dark:text-white">Nirvatatva</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href={process.env.INSTAGRAM} className="hover:underline ">Instagram</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/" className="hover:underline">Facebook</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; 2024 <a href="https://flowbite.com/" className="hover:underline">Nirvatatva </a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href={process.env.FACEBOOK} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <FaFacebookF />
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href={process.env.INSTAGRAM} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <FaInstagram />
                  <span className="sr-only">Instagram Page</span>
              </a>
              <a href={process.env.TWITTER} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaXTwitter />
              <span className="sr-only">Twitter page</span>
              </a>
              <a href={process.env.GOOGLE} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaGoogle />
                  <span className="sr-only">Google</span>
              </a>
          </div>
      </div>
    </div>
</footer>

    )

}

