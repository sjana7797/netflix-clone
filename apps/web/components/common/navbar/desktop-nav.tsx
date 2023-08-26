import NavbarItem from "./navbar-item";
import { navs } from "./constants";

function DesktopNav() {
  return (
    <ul className="ml-8 hidden list-none gap-7 lg:flex">
      {navs.map((nav) => {
        return <NavbarItem nav={nav} key={nav.id} />;
      })}
    </ul>
  );
}

export default DesktopNav;
