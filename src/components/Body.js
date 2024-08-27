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
    <div>
      <div>
        <input
          type="text"
          value={searchText}
          aria-label="Search Restaurants"
          placeholder="Search for restaurants..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          aria-label="Search Restaurants"
          onClick={filterSearchRestaurants}
        >
          Search
        </button>
      </div>
      <div className="TopFilter">
        <button onClick={filterTopRestaurants}>Top Rated Restaurants</button>
      </div>
      <div className="card-items">
        {filterRestaurantList.map((restaurant) => (
          <Link
            to={"/restraunts/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resName={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
