import Logo from "../Logo/Logo";
import NavLink from "./components/NavLink";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Logo />
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
