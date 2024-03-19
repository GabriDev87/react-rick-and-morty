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
      episode: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [firstEpisode, setFirstEpisode] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(character.episode[0]);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setFirstEpisode(response.data.name);
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
        className="flex items-center justify-center outline-none overflow-auto dark:bg-gray-800 rounded-lg px-8 py-6 w-1/3 h-1/3 mx-auto mt-8"
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
              Specie: {character.species}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Gender: {character.gender}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Origin: {character.origin.name}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Last known Location: {character.location.name}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              First Episode: {firstEpisode}
            </p>
          </div>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default Character;
