import PropTypes from "prop-types";
import Modal from "react-modal";
import { useEffect, useState } from "react";

function Character({ character }) {
  Character.propTypes = {
    character: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      origin: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      location: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      episode: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [firstEpisode, setFirstEpisode] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(character.episode[0]);
      const data = await response.json();
      if (data.results != "") {
        setFirstEpisode(data.name + " - " + data.episode);
      } else {
        setFirstEpisode("Unknown");
      }
    }
    fetchData();
  }, [character]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div
      className={`w-full max-w-xs bg-white border ${
        character.status === "Dead"
          ? "border-red-500"
          : character.status === "Alive"
          ? "border-green-500"
          : "border-yellow-500"
      } rounded-lg shadow dark:bg-gray-800`}
    >
      <span
        className={`absolute px-2 py-1 text-xs font-bold uppercase rounded ${
          character.status === "Dead"
            ? "bg-red-500"
            : character.status === "Alive"
            ? "bg-green-500"
            : "bg-yellow-500"
        }`}
      >
        {character.status}
      </span>
      <a href="#">
        <img
          className="rounded-t-lg w-full"
          onClick={openModal}
          src={character.image}
          alt={character.name}
          height="300"
          width="300"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {character.name}
          </h5>
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {character.species}
        </p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Character Details"
        className="flex items-center justify-center outline-none overflow-auto dark:bg-gray-800 rounded-lg px-8 py-6 max-w-[500px] max-h-[900px] sm:w-1/2 sm:h-1/2 mx-auto mt-20"
      >
        <div
          className={`w-full max-w-xs bg-white border ${
            character.status === "Dead"
              ? "border-red-500"
              : character.status === "Alive"
              ? "border-green-500"
              : "border-yellow-500"
          } rounded-lg shadow dark:bg-gray-800`}
        >
          <span
            className={`absolute px-2 py-1 text-xs font-bold uppercase rounded ${
              character.status === "Dead"
                ? "bg-red-500"
                : character.status === "Alive"
                ? "bg-green-500"
                : "bg-yellow-500"
            }`}
          >
            {character.status}
          </span>
          <img
            className="rounded-t-lg w-full"
            onClick={openModal}
            src={character.image}
            alt={character.name}
            height="300"
            width="300"
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {character.name}
            </h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              Specie:
            </p>
            <p className="font-normal text-xl text-gray-700 dark:text-white">
              {character.species}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Gender:
            </p>
            <p className="font-normal text-xl text-gray-700 dark:text-white">
              {character.gender}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Last known Location:
            </p>
            <p className="font-normal text-xl text-gray-700 dark:text-white">
              {character.location.name}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              First Episode:
            </p>
            <p className="font-normal text-xl text-gray-700 dark:text-white pb-5">
              {firstEpisode}
            </p>
            <div className="grid justify-items-stretch ">
              <button
                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Character;
