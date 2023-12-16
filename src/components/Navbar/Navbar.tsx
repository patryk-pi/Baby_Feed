"use client";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Logo from "../Logo/Logo";
import NavLink from "./components/NavLink";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Image
                src={"/Logo.png"}
                height={100}
                width={100}
                alt="Jaworski Music Logo"
            />
            <div className="navbar__links">
                <NavLink title={"o mnie"} url={"/o-mnie"} />
                <NavLink title={"oferta"} url={"/oferta"} />
                <NavLink title={"galeria"} url={"/galeria"} />
                <NavLink title={"kontakt"} url={"/kontakt"} />
            </div>
        </nav>
    );
};

export default Navbar;
