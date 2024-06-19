import Logo from "@images/logo.png";
import { Image } from "@nextui-org/react";

export const Footer = () => {
    return (
        <footer className="hidden md:flex items-center justify-center p-4 bg-[#040910] border-t-2 border-primary shadow-top shadow-primary-500">
            <Image
                src={Logo}
                alt="Logo"
                width={100}
                className="transform transition-transform duration-300 hover:scale-105"
                isBlurred
                radius="none"
            />
        </footer>
    )
}
