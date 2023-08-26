import { Nav } from "./type";

const home: Nav = {
  title: "Home",
  id: 1,
};
const series: Nav = {
  title: "series",
  id: 2,
};
const films: Nav = {
  title: "films",
  id: 3,
};
const newPopular: Nav = {
  title: "new & popular",
  id: 4,
};
const myList: Nav = {
  title: "my list",
  id: 5,
};
const browseByLanguages: Nav = {
  title: "browse by languages",
  id: 6,
};
export const navs: Nav[] = [
  home,
  series,
  films,
  newPopular,
  myList,
  browseByLanguages,
];

export const TOP_OFFSET = 70;
