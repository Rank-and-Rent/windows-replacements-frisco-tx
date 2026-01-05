import { LocationItem } from "./types";

export const locationsData: LocationItem[] = [
  // Primary market
  { slug: "irving-tx", name: "Irving", route: "/locations/irving-tx", type: "city" },

  // Major nearby cities
  { slug: "dallas-tx", name: "Dallas", route: "/locations/dallas-tx", type: "city" },
  { slug: "grand-prairie-tx", name: "Grand Prairie", route: "/locations/grand-prairie-tx", type: "city" },
  { slug: "coppell-tx", name: "Coppell", route: "/locations/coppell-tx", type: "city" },
  { slug: "euless-tx", name: "Euless", route: "/locations/euless-tx", type: "city" },
  { slug: "bedford-tx", name: "Bedford", route: "/locations/bedford-tx", type: "city" },
  { slug: "grapevine-tx", name: "Grapevine", route: "/locations/grapevine-tx", type: "city" },
  { slug: "carrollton-tx", name: "Carrollton", route: "/locations/carrollton-tx", type: "city" },
  { slug: "farmers-branch-tx", name: "Farmers Branch", route: "/locations/farmers-branch-tx", type: "city" },
  { slug: "addison-tx", name: "Addison", route: "/locations/addison-tx", type: "city" },
  { slug: "richardson-tx", name: "Richardson", route: "/locations/richardson-tx", type: "city" },
  { slug: "plano-tx", name: "Plano", route: "/locations/plano-tx", type: "city" },
  { slug: "lewisville-tx", name: "Lewisville", route: "/locations/lewisville-tx", type: "city" },
  { slug: "flower-mound-tx", name: "Flower Mound", route: "/locations/flower-mound-tx", type: "city" },
  { slug: "arlington-tx", name: "Arlington", route: "/locations/arlington-tx", type: "city" },
  { slug: "fort-worth-tx", name: "Fort Worth", route: "/locations/fort-worth-tx", type: "city" },
  { slug: "hurst-tx", name: "Hurst", route: "/locations/hurst-tx", type: "city" },
  { slug: "north-richland-hills-tx", name: "North Richland Hills", route: "/locations/north-richland-hills-tx", type: "city" },
  { slug: "colleyville-tx", name: "Colleyville", route: "/locations/colleyville-tx", type: "city" },
  { slug: "southlake-tx", name: "Southlake", route: "/locations/southlake-tx", type: "city" },
  { slug: "duncanville-tx", name: "Duncanville", route: "/locations/duncanville-tx", type: "city" },
  { slug: "desoto-tx", name: "DeSoto", route: "/locations/desoto-tx", type: "city" },
  { slug: "cedar-hill-tx", name: "Cedar Hill", route: "/locations/cedar-hill-tx", type: "city" },
  { slug: "garland-tx", name: "Garland", route: "/locations/garland-tx", type: "city" },
  { slug: "mesquite-tx", name: "Mesquite", route: "/locations/mesquite-tx", type: "city" },

  // Irving neighborhoods and districts
  { slug: "las-colinas-tx", name: "Las Colinas", parent: "irving-tx", route: "/locations/las-colinas-tx", type: "district" },
  { slug: "valley-ranch-tx", name: "Valley Ranch", parent: "irving-tx", route: "/locations/valley-ranch-tx", type: "neighborhood" },
  { slug: "heritage-district-irving-tx", name: "Heritage District", parent: "irving-tx", route: "/locations/heritage-district-irving-tx", type: "district" },
  { slug: "north-irving-tx", name: "North Irving", parent: "irving-tx", route: "/locations/north-irving-tx", type: "neighborhood" },
  { slug: "south-irving-tx", name: "South Irving", parent: "irving-tx", route: "/locations/south-irving-tx", type: "neighborhood" },
  { slug: "west-irving-tx", name: "West Irving", parent: "irving-tx", route: "/locations/west-irving-tx", type: "neighborhood" },
  { slug: "east-irving-tx", name: "East Irving", parent: "irving-tx", route: "/locations/east-irving-tx", type: "neighborhood" },
  { slug: "downtown-irving-tx", name: "Downtown Irving", parent: "irving-tx", route: "/locations/downtown-irving-tx", type: "district" },
  { slug: "hackberry-creek-tx", name: "Hackberry Creek", parent: "irving-tx", route: "/locations/hackberry-creek-tx", type: "neighborhood" },
  { slug: "cottonwood-valley-tx", name: "Cottonwood Valley", parent: "irving-tx", route: "/locations/cottonwood-valley-tx", type: "neighborhood" },
];
