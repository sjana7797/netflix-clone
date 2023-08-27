import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {};

function Loading({}: Props) {
  return (
    <div className="relative h-[140vh] w-screen bg-slate-900/60">
      <div className="flex select-none flex-col space-y-2 py-16 pl-5 md:space-y-4 lg:justify-end lg:py-48 lg:pb-12 lg:pl-16">
        <Skeleton className="h-8 w-[65%] rounded-md md:h-10 lg:h-16"></Skeleton>
        <Skeleton className="h-4 max-w-xs rounded-md md:h-7 md:max-w-lg lg:h-8 lg:max-w-2xl"></Skeleton>
        <Skeleton className="h-4 max-w-xs rounded-md md:h-7 md:max-w-lg lg:h-8 lg:max-w-2xl"></Skeleton>
        <Skeleton className="h-4 max-w-xs rounded-md md:h-7 md:max-w-lg lg:h-8 lg:max-w-2xl"></Skeleton>
      </div>
    </div>
  );
}

export default Loading;
