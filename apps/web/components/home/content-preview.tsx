"use client";
import { useContentPreviewModal } from "@/store";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import type { Genre, TMDBVideosResults } from "types";
import { useEffect, useState } from "react";
import YoutubeReactPlayer from "react-player/youtube";
import { Button } from "../ui/button";
import { Pause, Play, Plus, ThumbsUp, VolumeX } from "lucide-react";
import { Toggle } from "../ui/toggle";

type Props = {};

function ContentPreview({}: Props) {
  const { isOpen, setIsOpen } = useContentPreviewModal();

  const { content } = useContentPreviewModal();

  const [trailer, setTrailer] = useState<string>("");
  const [genres, setGenres] = useState<Genre[]>([]);

  // controls
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    if (!content) return;

    async function fetchContent() {
      const response = await fetch(
        `https://api.themoviedb.org/3/${
          content?.media_type === "movie" ? "movie" : "tv"
        }/${content?.id}?api_key=${
          process.env.NEXT_PUBLIC_TMDB_API_KEY
        }&language=en-US&append_to_response=videos`,
      );
      const data: TMDBVideosResults = await response.json();

      if (!data) return;

      if (data?.videos && data?.videos?.results) {
        const videoIndex = data.videos.results.findIndex((video) => {
          return video.type === "Trailer";
        });

        if (videoIndex === -1) return;
        setTrailer(data?.videos.results[videoIndex]?.key);
      }

      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    fetchContent();
  }, [content]);

  useEffect(() => {
    if (!isOpen) {
      setTrailer("");
      setGenres([]);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} modal onOpenChange={setIsOpen}>
      <DialogContent className="h-full max-h-[80vh] w-full max-w-2xl overflow-hidden overflow-y-scroll scrollbar-hide">
        <DialogHeader>
          <h2 className="truncate text-base font-semibold">
            {content?.title || content?.name || content?.original_title}
          </h2>
        </DialogHeader>
        <div className="relative pt-[56.25%]">
          <YoutubeReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}?rel=0`}
            controls={false}
            muted={isMuted}
            playing={isPlaying}
            width={"100%"}
            height={"100%"}
            style={{ top: 0, left: 0, position: "absolute" }}
          />
          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <Button
                className="flex items-center gap-2"
                size={"sm"}
                onClick={() => {
                  setIsPlaying((prev) => !prev);
                }}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" fill="currentColor" />
                ) : (
                  <Play className="h-5 w-5" fill="currentColor" />
                )}

                <span>{isPlaying ? "Pause" : "Play"}</span>
              </Button>
              <Button
                variant={"outline"}
                size={"sm"}
                className="h-fit rounded-full p-1"
              >
                <Plus className="h-5 w-5" />
              </Button>
              <Button
                variant={"outline"}
                size={"sm"}
                className="h-fit rounded-full p-1"
              >
                <ThumbsUp className="h-5 w-5" />
              </Button>
            </div>
            <Toggle
              className="h-fit rounded-full border-2 p-1"
              onPressedChange={setIsMuted}
            >
              <VolumeX className="h-5 w-5" />
            </Toggle>
          </div>
        </div>
        <div className="flex space-x-16">
          <div className="space-y-2 text-lg">
            <div className="flex items-center gap-2 text-sm">
              <p className="font-semibold text-green-500">
                {((Math.round(content?.vote_average ?? 0) * 100) / 100) * 10}%
                Match
              </p>
              <p className="font-light">
                {content?.release_date || content?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded border border-slate-200/50 px-1.5 text-xs">
                HD
              </div>
            </div>
            <div>
              <p className="w-5/6">{content?.overview}</p>
              <div className="flex flex-col space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-slate-300">Genres:</span>
                  <span className="flex flex-wrap items-center gap-2 text-slate-400">
                    {genres.map((genre, index) => {
                      return (
                        <span
                          className="cursor-pointer rounded-md border border-slate-400 px-2 py-0.5 text-xs transition-colors duration-200 ease-in hover:bg-slate-200 hover:text-slate-700"
                          key={genre.id}
                        >
                          {genre.name}
                        </span>
                      );
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ContentPreview;
