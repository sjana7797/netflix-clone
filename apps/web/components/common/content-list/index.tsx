import type { TMDBApiKey } from "@/constants/tmdb/apiKey";
import ContentCard from "./content-card";
import type { TMDBResults } from "types";

type Props = {
  title: string;
  apiKey: TMDBApiKey;
};

async function fetchContent(apiKey: TMDBApiKey) {
  console.log(apiKey, "apiKey");
  const response = await fetch(`http://localhost:3000/api/tmdb/${apiKey}`);
  const data: TMDBResults = await response.json();

  return data;
}

async function ContentList({ title, apiKey }: Props) {
  const { results: contents } = await fetchContent(apiKey);
  return (
    <div className="mx-auto my-5 flex max-w-7xl flex-col gap-4 px-5 py-4">
      <h2 className="text-base font-semibold lg:text-2xl">{title}</h2>
      <div className="flex snap-x gap-3 overflow-x-scroll scrollbar-hide">
        {contents.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
      </div>
    </div>
  );
}

export default ContentList;
