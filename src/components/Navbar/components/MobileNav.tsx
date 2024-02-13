import NavLink from "./NavLink";
const MobileNav = () => {
    return (
        <nav className="mobilenav">
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
        </nav>
    );
};
export default MobileNav;
