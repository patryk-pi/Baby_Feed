import Link from "next/link";

type NavLinkProps = {
    title: string;
    url: string;
};

const NavLink = ({ title, url }: NavLinkProps) => {
    return (
        <Link href={url} className="navlink">
            {title}
        </Link>
    );
};

export default NavLink;
