import { LocationItem } from "./types";

export const locationsData: LocationItem[] = [
  // Primary market
  { slug: "frisco-tx", name: "Frisco", route: "/locations/frisco-tx", type: "city" },
  
  // Major nearby cities
  { slug: "plano-tx", name: "Plano", route: "/locations/plano-tx", type: "city" },
  { slug: "mckinney-tx", name: "McKinney", route: "/locations/mckinney-tx", type: "city" },
  { slug: "little-elm-tx", name: "Little Elm", route: "/locations/little-elm-tx", type: "city" },
  { slug: "the-colony-tx", name: "The Colony", route: "/locations/the-colony-tx", type: "city" },
  { slug: "prosper-tx", name: "Prosper", route: "/locations/prosper-tx", type: "city" },
  { slug: "celina-tx", name: "Celina", route: "/locations/celina-tx", type: "city" },
  { slug: "aubrey-tx", name: "Aubrey", route: "/locations/aubrey-tx", type: "city" },
  { slug: "denton-tx", name: "Denton", route: "/locations/denton-tx", type: "city" },
  { slug: "lewisville-tx", name: "Lewisville", route: "/locations/lewisville-tx", type: "city" },
  { slug: "carrollton-tx", name: "Carrollton", route: "/locations/carrollton-tx", type: "city" },
  { slug: "coppell-tx", name: "Coppell", route: "/locations/coppell-tx", type: "city" },
  { slug: "flower-mound-tx", name: "Flower Mound", route: "/locations/flower-mound-tx", type: "city" },
  { slug: "highland-village-tx", name: "Highland Village", route: "/locations/highland-village-tx", type: "city" },
  { slug: "allen-tx", name: "Allen", route: "/locations/allen-tx", type: "city" },
  { slug: "fairview-tx", name: "Fairview", route: "/locations/fairview-tx", type: "city" },
  { slug: "lucas-tx", name: "Lucas", route: "/locations/lucas-tx", type: "city" },
  { slug: "parker-tx", name: "Parker", route: "/locations/parker-tx", type: "city" },
  { slug: "anna-tx", name: "Anna", route: "/locations/anna-tx", type: "city" },
  { slug: "melissa-tx", name: "Melissa", route: "/locations/melissa-tx", type: "city" },
  { slug: "princeton-tx", name: "Princeton", route: "/locations/princeton-tx", type: "city" },
  { slug: "richardson-tx", name: "Richardson", route: "/locations/richardson-tx", type: "city" },
  { slug: "dallas-tx", name: "Dallas", route: "/locations/dallas-tx", type: "city" },
  { slug: "addison-tx", name: "Addison", route: "/locations/addison-tx", type: "city" },
  { slug: "farmers-branch-tx", name: "Farmers Branch", route: "/locations/farmers-branch-tx", type: "city" },
  
  // Frisco neighborhoods and districts
  { slug: "frisco-square-tx", name: "Frisco Square", parent: "frisco-tx", route: "/locations/frisco-square-tx", type: "district" },
  { slug: "downtown-frisco-tx", name: "Downtown Frisco", parent: "frisco-tx", route: "/locations/downtown-frisco-tx", type: "district" },
  { slug: "west-frisco-tx", name: "West Frisco", parent: "frisco-tx", route: "/locations/west-frisco-tx", type: "neighborhood" },
  { slug: "east-frisco-tx", name: "East Frisco", parent: "frisco-tx", route: "/locations/east-frisco-tx", type: "neighborhood" },
  { slug: "north-frisco-tx", name: "North Frisco", parent: "frisco-tx", route: "/locations/north-frisco-tx", type: "neighborhood" },
  { slug: "south-frisco-tx", name: "South Frisco", parent: "frisco-tx", route: "/locations/south-frisco-tx", type: "neighborhood" },
  { slug: "stonebriar-tx", name: "Stonebriar", parent: "frisco-tx", route: "/locations/stonebriar-tx", type: "district" },
  { slug: "hall-park-tx", name: "Hall Park", parent: "frisco-tx", route: "/locations/hall-park-tx", type: "district" },
  { slug: "the-star-tx", name: "The Star", parent: "frisco-tx", route: "/locations/the-star-tx", type: "district" },
  { slug: "phillips-creek-ranch-tx", name: "Phillips Creek Ranch", parent: "frisco-tx", route: "/locations/phillips-creek-ranch-tx", type: "neighborhood" },
];
