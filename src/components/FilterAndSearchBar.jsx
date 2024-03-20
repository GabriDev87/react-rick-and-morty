import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function SearchBar({ setSearchName, setPage, searchName }) {
  SearchBar.propTypes = { setSearchName: PropTypes.func.isRequired };
  SearchBar.propTypes = { setPage: PropTypes.func.isRequired };
  SearchBar.propTypes = { searchName: PropTypes.string.isRequired };

  const [inputValue, setInputValue] = useState(searchName);
  
  useEffect(() => {
    setInputValue(searchName);
  }, [searchName]);

  function handleSearchName(event) {
    setSearchName(event.target.value);
    setPage(1);
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
          value={inputValue}
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
    setPage: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  const [selectedValue, setSelectedValue] = useState(props.value);

  useEffect(() => {
    setSelectedValue(props.value);
  }, [props.value]);

  function handleSelectedValue(event) {
    props.setPage(1);
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
  setPage,
  setSearchName,
  setSearchSpecies,
  setSearchGender,
  setSearchStatus,
  searchSpecies,
  searchGender,
  searchStatus,
  searchName
}) {
  FilterAndShearchBar.propTypes = {
    setPage: PropTypes.func.isRequired,
    setSearchName: PropTypes.func.isRequired,
    setSearchSpecies: PropTypes.func.isRequired,
    setSearchGender: PropTypes.func.isRequired,
    setSearchStatus: PropTypes.func.isRequired,
    searchSpecies: PropTypes.string.isRequired,
    searchGender: PropTypes.string.isRequired,
    searchStatus: PropTypes.string.isRequired,
    searchName: PropTypes.string.isRequired,
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

  function handleClearFilters() {
    setPage(1);
    setSearchName("");
    setSearchSpecies("");
    setSearchGender("");
    setSearchStatus("");
  }
  return (
    <div className="flex items-center justify-center p-1 pb-4">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <SearchBar setSearchName={setSearchName} setPage={setPage} searchName={searchName} />
        <Select
          type="Species"
          list={speciesList}
          function={setSearchSpecies}
          setPage={setPage}
          value={searchSpecies}
        />
        <Select
          type="Gender"
          list={genderList}
          function={setSearchGender}
          setPage={setPage}
          value={searchGender}
        />
        <Select
          type="Status"
          list={statusList}
          function={setSearchStatus}
          setPage={setPage}
          value={searchStatus}
        />
        <button
          type="button"
          onClick={handleClearFilters}
          className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default FilterAndShearchBar;
