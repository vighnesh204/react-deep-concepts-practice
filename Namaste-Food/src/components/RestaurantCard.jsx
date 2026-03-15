import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
//   console.log(resData);

  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;

  const deliveryTime = sla?.deliveryTime;

  return (
    <div
      className="res-card flex-1 min-w-[250px] max-w-[300px] rounded-lg bg-white shadow-sm hover:shadow-md transition duration-300 p-3 cursor-pointer
"
    >
      {/* Image */}
      <div className="res-logo w-full h-48">
        <img
          className="w-full h-full object-cover rounded-md"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant"
        />
      </div>

      {/* Details */}
      <div className="mt-3">
        {/* Restaurant Name */}
        <h3 className="text-base font-semibold text-gray-800 truncate">
          {name}
        </h3>

        {/* Cuisines */}
        <p className="text-sm text-gray-500 mt-1 truncate">
          {cuisines.join(", ")}
        </p>

        {/* Delivery Time */}
        <p className="text-sm text-gray-500 mt-1 truncate">
          {deliveryTime} minutes
        </p>

        {/* Rating */}
        <p className="text-sm text-gray-500 mt-1 truncate">{avgRating} ⭐</p>

        {/* <div className="flex items-center mt-2 text-sm">
          <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs font-medium">
            ⭐ 4.3
          </span>
        </div> */}
        {/* costForTwo */}
        <p className="text-sm text-gray-500 mt-1 truncate">{costForTwo}</p>
      </div>
    </div>
  );
};

// Higher Order Component
// input => RestaurantCard => output => RestaunatCardPromoted 

export const withPromotedLabel = (RestaurantCard) =>{
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;