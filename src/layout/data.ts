import { ChefIcon } from "@/assets/icons/Chef";
import { ClockIcon } from "@/assets/icons/Clock";
import { FoodIcon } from "@/assets/icons/Food";
import Caribbean from "@/assets/images/caribbean.png";
import Jamaican from "@/assets/images/jamaicafood.png";
import Seafood from "@/assets/images/seafood.png";
export const foodData = [
  {
    id: 1,
    title: "Seafood",
    image: Seafood,
  },
  {
    id: 2,
    title: "Jamaican Food",
    image: Jamaican,
  },
  {
    id: 3,
    title: "Caribbean Food",
    image: Caribbean,
  },
];

export const whyUsData = [
  {
    id: 1,
    title: "FAST DELIVERY",
    description:
      "Everything you order at City Island Co Seafood Lounge will be quickly delivered to your door.",
    icon: ClockIcon,
  },
  {
    id: 2,
    title: "EXPERIENCED CHEFS",
    description:
      "Our staff consists of chefs and cooks with years of experience.",
    icon: ChefIcon,
  },
  {
    id: 3,
    title: "FRESH FOOD",
    description:
      "We use only the best ingredients to cook the tasty fresh food for you.",
    icon: FoodIcon,
  },
];
