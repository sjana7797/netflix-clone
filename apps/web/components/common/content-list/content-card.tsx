/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { useContentPreviewModal } from "@/store";
import { Info } from "lucide-react";
import type { TMDBContent } from "types";

type Props = {
  content: TMDBContent;
};

function ContentCard({ content }: Props) {
  const posterPath = `https://image.tmdb.org/t/p/w500/${content?.poster_path}`;

  const name = content.title || content.name || content.original_title;

  const { setIsOpen, setContent } = useContentPreviewModal();

  const previewContent = () => {
    setIsOpen(true);
    setContent(content);
  };
  return (
    <div className="group relative min-h-[300px] min-w-[200px] cursor-pointer snap-start overflow-hidden rounded-md bg-slate-950 shadow-xl">
      <img
        src={posterPath}
        alt={name}
        className="h-full min-w-[200px] cursor-pointer object-cover transition-transform duration-200 ease-in group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 hidden flex-col items-center justify-center gap-4 bg-slate-950/70 group-hover:flex">
        <h3 className="select-none text-center text-sm text-slate-200">
          {name}
        </h3>
        <Button
          variant="outline"
          size="sm"
          className="h-fit gap-1 border p-1"
          onClick={previewContent}
        >
          <Info className="h-4 w-4" />
          <span className="text-xs">Preview</span>
        </Button>
      </div>
    </div>
  );
}

export default ContentCard;
