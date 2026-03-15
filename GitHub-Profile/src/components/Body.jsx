import { useState, useEffect } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { GITHUB_API } from "../utils/constants";


const Body = () => {
  // Profile data state all data will be stored here
  const [profileData, setProfileData] = useState([]);

  // Filtered data state => this will be used to store the filtered data based on search query
  const [filteredData, setFilteredData] = useState([]);

  // Search state => this will be used to store the search query entered by the user in the input field
  const [searchData, setSearchData] = useState("");

  // Number of profiles state => this will be used to store the number of profiles to fetch from the API
  const [numberOfProfiles, setNumberOfProfiles] = useState("");

  // Loading state => this will be used to show the shimmer effect while the data is being fetched from the API
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData(numberOfProfiles);
  }, []);

  const fetchData = async (numProfiles) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${ GITHUB_API }?since=0&per_page=${numProfiles || 10}`,
      );
      const data = await response.json();
      setProfileData(data);
      setFilteredData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return isLoading ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex items-center justify-center mt-4 gap-4">
        <input
          type="text"
          placeholder="Search here..."
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          className="px-4 py-2 rounded-xl text-white w-60 border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="px-4 py-2 bg-blue-500 rounded-xl font-semibold"
          onClick={() => {
            const filteredData = profileData.filter((profile) =>
              profile.login.toLowerCase().includes(searchData.toLowerCase()),
            );
            setFilteredData(filteredData);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex items-center justify-center mt-4 gap-4">
        <input
          type="text"
          placeholder="Number of profiles to fetch"
          value={numberOfProfiles}
          onChange={(e) => {
             setNumberOfProfiles(e.target.value);
            // const value = e.target.value;
            // if (value === "") {
            //   setNumberOfProfiles("");
            // } else if (Number(value) > 0) {
            //   setNumberOfProfiles(Number(value));
            // }
          }
        }
          className="px-4 py-2 rounded-xl text-white w-60 border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="px-4 py-2 bg-blue-500 rounded-xl font-semibold"
          onClick={() => {
            fetchData(Number(numberOfProfiles));
          }}
        >
          Fetch Profiles
        </button>
      </div>
      <div className="card-container flex flex-wrap justify-center items-start gap-6 mt-6 px-6 max-w-7xl ">
        {filteredData.map((profile) => (
          <Card key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
  // <div className="p-4">
  //     {profileData && (
  //         <div className="bg-zinc-700 p-4 rounded-lg">
  //             <h2 className="text-xl font-bold">{profileData.login}</h2>
  //             <p className="text-gray-300">{profileData.url}</p>
  //             <img src={profileData.avatar_url} alt="Profile" className="w-16 h-16 rounded-full mt-2" />
  //         <div className="flex justify-center">
  //             <button className="px-4 py-2 bg-blue-500 rounded-xl font-semibold mt-4"><a href={profileData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></button>

  //         </div>
  //         </div>
  //     )}
  // </div>
};

export default Body;
