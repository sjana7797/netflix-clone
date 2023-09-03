// import ContentList from "@/components/common/content-list";
import ContentPreview from "@/components/home/content-preview";
import Hero from "@/components/home/hero";
import React from "react";

type Props = {};

function Home({}: Props) {
  return (
    <div className="">
      <Hero />
      {/* <ContentList title="Trending Now" apiKey="trending/all" />
      <ContentList title="Popular Movies" apiKey="movie/popular" />
      <ContentList title="Popular Series" apiKey="tv/popular" />
      <ContentList title="Top Rated Movies" apiKey="movie/top_rated" />
      <ContentList
        title="Action Thrillers"
        apiKey="discover/movie?with_genres=28"
      />
      <ContentList title="Top Rated Series" apiKey="tv/top_rated" /> */}
      <ContentPreview />
    </div>
  );
}

export default Home;
