import {
  ChangeEvent,
  FC,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";

type Props = {
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: HTMLInputTypeAttribute;
  id: string;
  inputClassName?: string;
  labelClassName?: string;
  className?: string;
};

const FloatingInput: FC<Props> = ({
  label,
  onChange,
  value,
  type = "text",
  id,
  inputClassName = "",
  labelClassName = "",
  className = "",
}) => {
  return (
    <div className={cn("relative w-full", className)}>
      <Input
        className={cn(
          "peer block h-full w-full appearance-none rounded-md border border-slate-800 bg-slate-950/50 px-4 pb-1 pt-6 text-base text-white focus-visible:ring-1 focus-visible:ring-slate-200",
          inputClassName,
        )}
        placeholder=" "
        id={id}
        value={value}
        type={type}
        onChange={onChange}
      />
      <Label
        className={cn(
          "absolute left-4 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-base capitalize text-slate-400 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75",
          labelClassName,
        )}
        htmlFor={id}
      >
        {label}
      </Label>
    </div>
  );
};

export default FloatingInput;
