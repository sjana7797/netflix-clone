import { Separator } from "@/components/ui/separator";

type Props = {
  open?: boolean;
};

function AccountMenu({ open = false }: Props) {
  if (!open) return null;
  return (
    <div className="absolute right-0 top-14 flex w-56 flex-col overflow-hidden rounded-md border-2 border-slate-800 bg-slate-950 shadow-md">
      <div className="flex flex-col overflow-hidden text-sm">
        <div className="flex items-center gap-2 px-3 py-2 font-medium capitalize text-slate-100 transition-colors duration-200 ease-in-out hover:bg-slate-900/90">
          <img
            src="/images/default-blue.png"
            alt="profile"
            className="h-8 w-8 rounded-md"
          />
          <span className="truncate text-sm font-medium">Username</span>
        </div>
        <Separator className="bg-gray-800" />
        <div className="px-3 py-2 text-center font-medium capitalize text-slate-100 transition-colors duration-200 ease-in-out hover:bg-primary-500/90">
          sign out
        </div>
      </div>
    </div>
  );
}

export default AccountMenu;
