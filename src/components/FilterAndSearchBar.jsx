import PropTypes from "prop-types";
import { useState } from "react";

function SearchBar({ setSearchName }) {
  SearchBar.propTypes = { setSearchName: PropTypes.func.isRequired };

  function handleSearchName(event) {
    console.log(event.target.value);
    setSearchName(event.target.value);
  }

  return (
    <form className="max-w-md mx-auto w-full">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          onChange={handleSearchName}
          className="block w-full h-12 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-300 focus:border-teal300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-300 dark:focus:border-teal-300"
          placeholder="Filter by name..."
          required
        />
      </div>
    </form>
  );
}

function Select(props) {
  Select.propTypes = {
    type: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
    function: PropTypes.func.isRequired,
  };

  const [selectedValue, setSelectedValue] = useState("");

  function handleSelectedValue(event) {
    if (event.target.value === "All") {
      setSelectedValue("");
      props.function("");
    } else {
      setSelectedValue(event.target.value);
      props.function(event.target.value);
    }
  }

  return (
    <form className="max-w-md mx-auto w-full">
      <select
        id="selection"
        value={selectedValue}
        onChange={handleSelectedValue}
        className="h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-300 focus:border-teal-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-300 dark:focus:border-teal-300"
      >
        <option value="" disabled>
          {props.type}
        </option>
        {props.list.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </form>
  );
}

function FilterAndShearchBar({
  setSearchName,
  setSearchSpecies,
  setSearchGender,
  setSearchStatus,
}) {
  FilterAndShearchBar.propTypes = {
    setSearchName: PropTypes.func.isRequired,
    setSearchSpecies: PropTypes.func.isRequired,
    setSearchGender: PropTypes.func.isRequired,
    setSearchStatus: PropTypes.func.isRequired,
  };

  const statusList = ["All", "Alive", "Dead", "Unknown"];
  const genderList = ["All", "Female", "Male", "Genderless", "Unknown"];
  const speciesList = [
    "All",
    "Human",
    "Alien",
    "Humanoid",
    "Mythological Creature",
    "Animal",
    "Robot",
    "Cronenberg",
    "Poopybutthole",
    "Mythological Creature",
    "Disease",
    "Unknown",
  ];

  return (
    <div className="flex items-center justify-center p-1 pb-4">
      
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SearchBar setSearchName={setSearchName} />
        <Select type="Species" list={speciesList} function={setSearchSpecies} />
        <Select type="Gender" list={genderList} function={setSearchGender} />
        <Select type="Status" list={statusList} function={setSearchStatus} />
      </div>
    </div>
  );
}

export default FilterAndShearchBar;
