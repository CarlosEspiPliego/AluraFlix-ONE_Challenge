import { Navbar as NavbarUI, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image } from "@nextui-org/react";
import Logo from "@images/logo.png";

export const Navbar = () => {
    return (
        <NavbarUI maxWidth="full" isBlurred className="border-b-2 border-primary shadow-md shadow-primary-500">
            <NavbarBrand className="justify-center md:justify-start">
                <Link href="/AluraFlix-ONE_Challenge">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={100}
                        className="transform transition-transform duration-300 hover:scale-105"
                        isBlurred
                        radius="none"
                    />
                </Link>
            </NavbarBrand>
            <NavbarContent justify="end" className="hidden md:flex">
                <NavbarItem className="">
                    <Link href="/AluraFlix-ONE_Challenge" className="uppercase">Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="AluraFlix-ONE_Challenge/addVideo" variant="flat" className="uppercase">
                        Nuevo Video
                    </Button>
                </NavbarItem>

            </NavbarContent>
        </NavbarUI>
    )
}
