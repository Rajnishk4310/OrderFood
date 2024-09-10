import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./shimmer/SimmerUi";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurantList, setfilterRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filterTopRestaurants = () => {
    const filteredData = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating >= 4.2
    );
    setfilterRestaurantList(filteredData);
  };

  const filterSearchRestaurants = () => {
    const filteredData = restaurantList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilterRestaurantList(filteredData);
  };

  // Conditional Rendering-shimmerUi Effect
  if (restaurantList.length === 0) {
    return <ShimmerUi />;
  }

  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={searchText}
          aria-label="Search Restaurants"
          placeholder="Search for restaurants..."
          onChange={(e) => setSearchText(e.target.value)}
          className="px-4 py-2 w-1/2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ad1017] focus:border-transparent"
        />
        <button
          aria-label="Search Restaurants"
          onClick={filterSearchRestaurants}
          className="ml-3 px-6 py-2 bg-[#ad1017] text-white font-semibold rounded-md shadow-sm hover:bg-[#8c0f13] transition-colors duration-200"
        >
          Search
        </button>
      </div>

      {/* Top Filter */}
      <div className="flex justify-center mb-8">
        <button
          onClick={filterTopRestaurants}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-200"
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {filterRestaurantList.map((restaurant) => (
          <Link
            to={"/restraunts/" + restaurant.info.id}
            key={restaurant.info.id}
            className="block"
          >
            <RestaurantCard resName={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
