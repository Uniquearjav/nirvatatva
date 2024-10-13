import { FaAddressCard, FaRegClock, FaPhoneAlt } from "react-icons/fa";
import { TiMail } from "react-icons/ti";


export default function Contact() {
    return (
        <div className="py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase">Location</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                Our Store
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-slate-400 lg:mx-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis
                in, accusamus quisquam.
            </p>
        </div>

        <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <FaAddressCard />

                        </div>
                    </div>
                    <div className="ml-4">
                        <dt className="text-2xl leading-6 font-bold">
                            Address
                        </dt>
                        <dd className="mt-2 text-base text-gray-500 dark:text-slate-200">
                            123 Main St, Suite 100<br />
                            Anytown, USA 12345
                        </dd>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <FaPhoneAlt />
                        </div>
                    </div>
                    <div className="ml-4">
                        <dt className="text-2xl leading-6 font-bold">
                            Phone number
                        </dt>
                        <dd className="mt-2 text-base text-gray-500 dark:text-slate-200">
                            (555) 555-5555
                        </dd>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <TiMail />

                        </div>
                    </div>
                    <div className="ml-4">
                        <dt className="text-2xl leading-6 font-bold">
                            Email
                        </dt>
                        <dd className="mt-2 text-base text-gray-500 dark:text-slate-200">
                            info@ourstore.com
                        </dd>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <FaRegClock />

                        </div>
                    </div>
                    <div className="ml-4">
                        <dt className="text-2xl leading-6 font-bold ">
                            Store Hours
                        </dt>
                        <dd className="mt-2 text-base text-gray-500 dark:text-slate-200">
                            Monday - Friday: 9am to 8pm<br />
                            Saturday: 10am to 6pm<br />
                            Sunday: 12pm to 4pm
                        </dd>
                    </div>
                </div>
            </dl>
        </div>
    </div>
</div>
    )
}