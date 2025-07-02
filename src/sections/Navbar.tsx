import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { Menu } from "lucide-react";



const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return <>
        <section className="py-4 lg:py-8">
            <div className="container max-w-5xl">
                <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center">
                    <div>
                        <Image src={logoImage} alt="Layers logo" className="h-9 md:h-auto w-auto " />
                    </div>
                    <div className="lg:flex justify-center items-center hidden">
                        <nav className="flex gap-6 font-medium">
                            {navLinks.map((link) => (
                                <a href={link.href} key={link.label}>{link.label}</a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-end gap-4">
                        <Menu size={32} color="#ffffff" strokeWidth={1.7} absoluteStrokeWidth className="md:hidden" />
                        <Button variant="secondary" className="hidden md:inline-flex items-center border-2">Log In</Button>
                        <Button variant="primary" className="hidden md:inline-flex items-center border-2 border-white">Sign Up</Button>
                    </div>
                </div>

            </div>
        </section>

    </>;
}
