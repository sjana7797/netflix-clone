"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import type { TMDBResults, TMDBContent } from "types";
import { Button } from "../ui/button";
import { Info, Play } from "lucide-react";
import { useContentPreviewModal } from "@/store";

type Props = {};

async function getTrendingContents(): Promise<TMDBResults> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API_URL}/api/trending/all`,
  );
  const data = await response.json();
  return data as TMDBResults;
}

function Hero({}: Props) {
  const [trendingContents, setTrendingContents] = useState<TMDBContent[]>([]);

  const [randomIndex, setRandomIndex] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(true);

  const randomContent = trendingContents[randomIndex];

  const posterPath = `https://image.tmdb.org/t/p/original/${randomContent?.backdrop_path}`;

  const { setIsOpen, setContent } = useContentPreviewModal();

  useEffect(() => {
    const fetchTrendingContents = async () => {
      try {
        const data = await getTrendingContents();
        if (!data) return;
        if (!data.results) return;
        if (!data.results.length) return;
        setTrendingContents(data.results);
        const randomIndex = Math.floor(Math.random() * data.results.length);
        setRandomIndex(randomIndex);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    void fetchTrendingContents();
  }, []);

  return loading ? (
    <h2>Loading…</h2>
  ) : (
    <section
      style={{ backgroundImage: `url(${posterPath})` }}
      className={cn(
        "relative h-[140vh] w-screen bg-cover bg-center bg-no-repeat",
      )}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0  bg-gradient-to-b from-slate-950/50 to-black/90 " />
      <div className="flex select-none flex-col space-y-2 py-16 pl-5 md:space-y-4 lg:justify-end lg:py-48 lg:pb-12 lg:pl-16">
        <h1 className="relative text-2xl md:text-4xl lg:text-7xl">
          {randomContent.title ||
            randomContent.name ||
            randomContent.original_title}
        </h1>
        <p className="relative line-clamp-4 max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          {randomContent.overview}
        </p>
        <div className="flex gap-2">
          <Button variant={"primary"} className="gap-2 capitalize">
            <Play className="h-4 w-4 md:h-7 md:w-7" fill="white" />
            play
          </Button>
          <Button
            variant={"ghost"}
            className="gap-2 capitalize"
            onClick={() => {
              setContent(randomContent);
              setIsOpen(true);
            }}
          >
            <Info className="h-4 w-4 md:h-7 md:w-7" />
            more info
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
