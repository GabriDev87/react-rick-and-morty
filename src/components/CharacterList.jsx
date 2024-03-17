import PropTypes from "prop-types";
import Character from "./Character";
import FilterAndShearchBar from "./FilterAndSearchBar";
import { useEffect, useState } from "react";

function LoadMore(props) {
  function handleClick() {
    props.setPage((page) => page + 1);
  }
  return (
    <div className="flex justify-center p-4">
      <button
        onClick={handleClick}
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-teal-300 focus:ring-4 focus:ring-teal-300  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-teal-700 dark:hover:border-teal-300 dark:focus:ring-teal-300"
      >
        LOAD MORE
      </button>
    </div>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [searchSpecies, setSearchSpecies] = useState("");
  const [searchGender, setSearchGender] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  const api = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchName}&status=${searchStatus}&gender=${searchGender}&species=${searchSpecies}`;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api);
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchData();
  }, [api]);

  return (
    <div>
      <FilterAndShearchBar
        setSearchName={setSearchName}
        setSearchSpecies={setSearchSpecies}
        setSearchGender={setSearchGender}
        setSearchStatus={setSearchStatus}
      />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {characters.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </div>
        <LoadMore page={page} setPage={setPage} />
      </div>
    </div>
  );
}

LoadMore.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default CharacterList;
