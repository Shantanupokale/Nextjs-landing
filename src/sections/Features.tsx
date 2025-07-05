import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg"
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg"
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>

                </div>
                <h2 className="text-6xl font-medium text-center mt-6">Where power meets <span className=" text-lime-400">simplicity</span></h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard title="Real-time Collaboration" description="Work together seamlessly with conflict-free team editing" className="col-span-2 lg:col-span-1">
                        <div className=" aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image src={avatar1} alt="avatar1" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image src={avatar2} alt="avatar2" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image src={avatar3} alt="avatar3" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent">
                                <div className="size-full bg-neutral-700 inline-flex justify-center items-center gap-1 rounded-full">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span className=" size-1.5 rounded-full inline-flex bg-white" key={i}></span>
                                    ))}


                                </div>

                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard title="Interactive Prototyping" description="Engage your clients with prototypes that react to user actions" className="col-span-2 lg:col-span-1">
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-bold text-white/20 text-center"> We&apos;ve achieved <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible</span> growth this year</p>
                        </div>
                    </FeatureCard>
                    <FeatureCard title="Keyboard Quick Actions" description="Powerful commands to help you create designs more quickly" className="col-span-2 col-start-2 lg:col-span-1 lg:col-start-auto">
                        <div className="aspect-video flex items-center gap-4     justify-center ">
                           <Key className=" w-28">shift</Key>
                           <Key>alt</Key>
                           <Key>C</Key>
                        </div>
                        
                    </FeatureCard>


                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center ">
                            {features.map((feature) => (
                                <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 py-1.5 rounded-2xl gap-3 items-center md:px-4 md:py-2">
                                    <span className="bg-lime-400 text-neutral-950 rounded-full size-5 inline-flex justify-center text-xl items-center">&#10038;</span>
                                    <span className="font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
            </div>
        </section>
    );
}
