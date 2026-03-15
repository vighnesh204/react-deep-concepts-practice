import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  {
    /*  const [resInfo, setResInfo] = useState(null); */
  }
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  /**
   * put fetchData logic in this custom hook => useRestaunatMenu()
   * this hook fetch the data and will give it to <RestaurantMenu />
   * RestaurantMenu component does not have to manage its own state
   * const [resInfo, setResInfo] = useState(null);
   * It somehow magically get access to the resInfo
   * now, <RestaurantMenu /> is just concerned about that i have got my resId
   * now with this resId, for that particular restaurant i just want my restaurant menu
   * basically, i will just give my resId to this hook
   * useRestaurantMenu(resId)
   * const resInfo = useRestaurantMenu(resId)
   * now, the single responsibility of RestaurantMenu is to get the data and display it
   * how to get the data is abstracted
   */
  {
    /*
    useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  */
  }

  const { name, cuisines, costForTwo } = resInfo?.cards[0].card?.card?.info;
  //   resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  console.log(categories);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-sm rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-1">{name}</h2>
      <h2 className="text-xl font-semibold text-gray-800 mb-1">
        {cuisines.join(", ")}
      </h2>
      {/** categories accordion */}
      
    </div>
  );
};

export default RestaurantMenu;
