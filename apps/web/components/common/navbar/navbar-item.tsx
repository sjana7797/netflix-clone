import { FC } from "react";
import { Nav } from "./type";

type Props = {
  nav: Nav;
};

const NavbarItem: FC<Props> = ({ nav }) => {
  return (
    <li className="relative cursor-pointer pb-1 capitalize text-slate-100 transition before:absolute before:bottom-0 before:h-0.5 before:w-0 before:bg-slate-300 before:transition-all before:duration-300 before:ease-in-out before:content-[''] hover:text-slate-300 hover:before:w-full">
      {nav.title}
    </li>
  );
};

export default NavbarItem;
