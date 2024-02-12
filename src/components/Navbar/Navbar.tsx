"use client";

import NavLink from "./components/NavLink";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
    const [hidden, setHidden] = useState<boolean>(false);
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    useEffect(() => {
        let currentScrollPosition: number = 0;
        let previousScrollPosition: number = 0;

        window.addEventListener("scroll", function () {
            currentScrollPosition = window.scrollY;

            if (currentScrollPosition > previousScrollPosition) setHidden(true);
            if (currentScrollPosition < previousScrollPosition)
                setHidden(false);
            if (this.window.scrollY === 0) setHidden(false);

            previousScrollPosition = currentScrollPosition;
        });
    }, []);

    const mobileButton = useRef<HTMLDivElement | null>(null);

    const toggleOpen = () => {
        setMobileOpen(!mobileOpen);
        mobileButton.classList;
    };

    return (
        <section className={`navbar ${hidden && "hidden"}`}>
            <nav className="navbar__container">
                <Link href={"/"}>
                    <Image
                        src={"/Logo.png"}
                        height={100}
                        width={100}
                        alt="Jaworski Music Logo"
                        className="navbar__logo"
                    />
                </Link>

                <div className="navbar__links">
                    <ul>
                        <li>
                            <NavLink title={"o mnie"} url={"/o-mnie"} />
                        </li>
                        <li>
                            <NavLink title={"oferta"} url={"/oferta"} />
                        </li>
                        {/* <NavLink title={"galeria"} url={"/galeria"} /> */}
                        <li>
                            <NavLink title={"kontakt"} url={"/kontakt"} />
                        </li>
                    </ul>
                </div>
                <div
                    className={`navbar__mobile ${mobileOpen && `open`}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    ref={mobileButton}
                >
                    <span className="navbar__line"></span>
                    <span className="navbar__line"></span>
                    <span className="navbar__line"></span>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
