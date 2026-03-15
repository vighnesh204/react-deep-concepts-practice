import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    );
    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setfilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  // console.log("Body component render")

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Check your internet connection</h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body max-w-7xl mx-auto px-6 py-8">
      <div className="filter mb-8 flex flex-col md:flex-row items-center gap-4">
        {/* Search Section */}
        <div className="search flex items-center gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="search-box px-4 py-2 w-full md:w-72 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
          />
          <button
            className="search-btn px-5 py-2 bg-orange-500 hover:bg-orange-600 transition duration-200 rounded-xl text-white font-semibold cursor-pointer shadow-md"
            onClick={() => {
              // Filter the restaurants and Update the UI
              // searchText
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setfilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            // Filter Logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4,
            );

            setListOfRestaurants(filteredList);
          }}
          className="filter-btn px-6 py-2 bg-orange-500 rounded-xl text-white font-semibold cursor-pointer"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap gap-6">
        {/* <RestaurantCard resData={resList[0]} /> */}

        {filteredRestaurants.map((restaurant, idx) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/** if the restaurant is promoted then add a promoted label to it */}
            {restaurant.data.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} index={idx} />
            )}
          </Link>
        ))}
        {/* 
        {resList.map((restaurant, idx) => {
          return (
            <RestaurantCard
              resData={restaurant}
              key={restaurant.info.id}
              index={idx}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default Body;
