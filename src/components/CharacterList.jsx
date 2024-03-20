import Character from "./Character";
import NotFound from "./NotFound";
import FilterAndShearchBar from "./FilterAndSearchBar";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [searchSpecies, setSearchSpecies] = useState("");
  const [searchGender, setSearchGender] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [dataFound, setDataFound] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  const api = `https://rickandmortyapi.com/api/character?page=${page}&name=${searchName}&status=${searchStatus}&gender=${searchGender}&species=${searchSpecies}`;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setCharacters(data.results);
        setDataFound(true);
        setTotalPages(data.info.pages);
      } else {
        setDataFound(false);
      }
    }
    fetchData();
  }, [api]);

  function handleClick(data) {
    setPage(data.selected + 1);
  }

  return (
    <div>
      <FilterAndShearchBar
        setPage={setPage}
        setSearchName={setSearchName}
        setSearchSpecies={setSearchSpecies}
        setSearchGender={setSearchGender}
        setSearchStatus={setSearchStatus}
        searchSpecies = {searchSpecies}
      />
      {dataFound ? (
        <div>
          <div className="flex flex-col items-center min-h-screen pb-5">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {characters.map((character) => (
                <Character key={character.id} character={character} />
              ))}
            </div>
            <ReactPaginate
              forcePage={page - 1}
              previousLabel={"Prev"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={
                "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={4}
              onPageChange={handleClick}
              containerClassName={
                "flex items-center justify-center text-base h-10 p-10 pb-10"
              }
              previousLinkClassName={
                "flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }
              nextLinkClassName={
                "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }
              pageLinkClassName={
                "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }
              activeClassName={
                "flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-gray-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              }
            />
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default CharacterList;
