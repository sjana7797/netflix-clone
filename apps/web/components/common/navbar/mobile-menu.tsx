import { navs } from "./constants";

type Props = {
  open?: boolean;
};

function MobileMenu({ open = false }: Props) {
  if (!open) return null;
  return (
    <div className="absolute left-0 top-8 flex w-56 flex-col overflow-hidden rounded-md border-2 border-slate-800 bg-slate-950 shadow-md">
      <div className="flex flex-col overflow-hidden text-sm">
        {navs.map((nav) => {
          return (
            <div
              key={nav.id}
              className="px-3 py-2 font-medium capitalize text-slate-100 transition-colors duration-200 ease-in-out hover:bg-primary-500/90"
            >
              {nav.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MobileMenu;
