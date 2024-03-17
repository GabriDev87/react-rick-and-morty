import PropTypes from "prop-types";

function SearchBar() {
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
          className="block w-full h-12 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-300 focus:border-teal300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-300 dark:focus:border-teal-300"
          placeholder="Filter by name..."
          required
        />
      </div>
    </form>
  );
}

function Select(props) {
  return (
    <form className="max-w-md mx-auto w-full">
      <select
        id="countries"
        className="h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-300 focus:border-teal-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-300 dark:focus:border-teal-300"
      >
        <option value="" disabled selected>
          {props.type}
        </option>
        {props.list.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
    </form>
  );
}

Select.propTypes = {
  type: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function FilterAndShearchBar() {
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
    "Planet",
    "Unknown",
  ];

  return (
    <div className="flex items-center justify-center p-1 pb-4">
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SearchBar />
        <Select type="Species" list={speciesList} />
        <Select type="Gender" list={genderList} />
        <Select type="Status" list={statusList} />
      </div>
    </div>
  );
}

export default FilterAndShearchBar;
