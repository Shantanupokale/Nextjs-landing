import Button from "@/components/Button";
import designExample1Image from '@/assets/images/design-example-1.png';
import designExample2Image from '@/assets/images/design-example-2.png';
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative ">
                <div className="absolute -left-64 top-10 hidden lg:block">
                    <Image src={designExample1Image} alt="design example 1 "  className="h-18 "/>
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block ">
                    <Image src={designExample2Image} alt="design example 2 "  className=" " />
                </div>
                <div className="absolute left-56 top-96">
                    <Pointer name="Shannx" />
                </div>
                <div className="absolute right-80 -top-4">
                    <Pointer name="Marie" color="blue"/>
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1  px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full  text-neutral-950 font-semibold">
                        ✨ $7.5 seed round raised
                    </div>
                </div>

                <h1 className="text-6xl md:text-7xl  font-medium  text-center mt-6">Impactful design, created effortlessly</h1>
                <p className="mx-auto px-4 text-center text-xl text-white/50 mt-8 max-w-3xl">
                    Design tools shouldn&apos;t slow you down. Layers combines powerful features with an intuitive interface that keeps you in your creative flow.
                </p>


                <form className="flex border border-white/15 rounded-full p-1 mt-8 max-w-full md:max-w-lg mx-auto" action="">
                    <input type="email" placeholder="Enter your Email" className="bg-transparent px-3 py-2 flex-1 min-w-0 text-white outline-none" />
                    <Button variant="primary" size="sm" type="submit" className="ml-0 sm:ml-4 whitespace-nowrap">Sign Up</Button>
                </form>
            </div>
        </section>
    );
}
