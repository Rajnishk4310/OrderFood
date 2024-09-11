import { useContext } from "react";
import { RESTO_LOGO } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resName } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resName?.info;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className=" bg-white rounded-[15px] overflow-hidden cursor-pointer transition-transform duration-400 ease-in-out hover:transform hover:scale-[1.05] shadow-lg hover:shadow-2xl w-[270px]">
      <img
        className="w-full h-[160px] object-cover border-b-2 border-gray-300"
        alt="card"
        src={RESTO_LOGO + cloudinaryImageId}
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-[1.3rem] text-gray-800">{name}</h3>
        <div className="flex justify-between items-center">
          <p className="text-sm font-bold text-[#ad1017] inline-flex ">
            ⭐{avgRating} stars
          </p>
          <p className="text-sm font-bold text-[#ad1017] inline">
            {costForTwo}
          </p>
        </div>
        <p className="text-sm text-gray-600">
          {cuisines.slice(0, 3).join(", ")}
        </p>
        <p className="text-sm text-gray-600">{sla.slaString}</p>
        <p className="text-sm text-gray-600">{loggedInUser}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
