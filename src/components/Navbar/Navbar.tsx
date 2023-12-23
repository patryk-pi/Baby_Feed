"use client";

import NavLink from "./components/NavLink";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let currentScrollPosition: number = 0;
        let previousScrollPosition: number = 0;

        window.addEventListener("wheel", function () {
            currentScrollPosition = window.scrollY;

            if (currentScrollPosition > previousScrollPosition) setHidden(true);
            if (currentScrollPosition < previousScrollPosition)
                setHidden(false);

            previousScrollPosition = currentScrollPosition;
        });
    }, []);

    return (
        <section className={`navbar ${hidden && "hidden"}`}>
            <nav className="navbar__container">
                <Link href={"/"}>
                    <Image
                        src={"/Logo.png"}
                        height={100}
                        width={100}
                        alt="Jaworski Music Logo"
                    />
                </Link>
                <div className="navbar__links">
                    <NavLink title={"o mnie"} url={"/o-mnie"} />
                    <NavLink title={"oferta"} url={"/oferta"} />
                    <NavLink title={"galeria"} url={"/galeria"} />
                    <NavLink title={"kontakt"} url={"/kontakt"} />
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
