import { useParams } from "react-router-dom";
import ShimmerUi from "./shimmer/SimmerUi";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestrauntMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestrauntMenu(resId);
  const [showIndex, SetShowIndex] = useState(0);

  if (!resInfo) return <ShimmerUi />;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="m-5 font-sans text-center">
      <div className="mb-5 border w-2/5 mx-auto  rounded-3xl border-t-0 shadow text-left p-4">
        <h1 className="text-2xl font-bold mb-2">{name}</h1>
        <div className="border rounded-3xl shadow-2xl p-4 mt-4">
          <h3 className=" text-gray-600 text-lg mb-1 font-bold">
            ⭐ {avgRating} ({totalRatingsString}) ● {costForTwoMessage}
          </h3>
          <h3 className="restaurant-cuisines text-gray-700 text-lg mb-1">
            {cuisines?.join(", ")}
          </h3>
          <h4 className="restaurant-area text-gray-500 text-md mb-1">
            Outlet - {areaName}
          </h4>
          <h4 className="restaurant-sla text-gray-500 text-md">
            {sla?.deliveryTime} minutes
          </h4>
        </div>
      </div>
      <div className=" text-center">
        <h1 className="text-2xl font-bold mb-8 text-gray-400">⁜Menu⁜</h1>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={index === showIndex ? true : false}
            SetShowIndex={() => SetShowIndex(index != showIndex ? index : null)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestrauntMenu;
