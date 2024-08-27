import { useParams } from "react-router-dom";
import ShimmerUi from "./shimmer/SimmerUi";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestrauntMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestrauntMenu(resId);

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

  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards ||
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards ||
    [];

  return (
    <div className="restaurant-menu-container">
      <div className="restaurant-info">
        <h1 className="restaurant-name">{name}</h1>
        <h3 className="restaurant-details">
          ⭐{avgRating} ({totalRatingsString}) ● {costForTwoMessage}
        </h3>
        <h3 className="restaurant-cuisines">{cuisines?.join(", ")}</h3>
        <h4 className="restaurant-area">Outlet - {areaName}</h4>
        <h4 className="restaurant-sla">{sla?.deliveryTime} minutes</h4>
      </div>
      <div className="restaurant-menu">
        <h1 className="menu-title">Menu</h1>
        <ul className="menu-items">
          {itemCards.map((item) => (
            <li key={item.card.info.id} className="menu-item">
              {item.card.info.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
