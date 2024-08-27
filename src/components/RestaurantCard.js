import { RESTO_LOGO } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resName } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resName?.info;
  return (
    <div className="card">
      <img alt="card" src={RESTO_LOGO + cloudinaryImageId} />
      <div className="card-contents">
        <h3>{name}</h3>
        <p>{cuisines.slice(0, 3).join(", ")}</p>
        <p>{avgRating} stars</p>
        <p>{costForTwo}</p>
        <p>{sla.slaString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
