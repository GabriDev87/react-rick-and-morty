import PropTypes from "prop-types";

function Character({ character }) {
  Character.propTypes = {
    character: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
    }).isRequired,
  };
  return (
    <div className="w-full max-w-xs bg-white border border-teal-300 rounded-lg shadow dark:bg-gray-800 dark:border-teal-300">
      <a href="#">
        <img
          className="rounded-t-lg w-full"
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
    </div>
  );
}

export default Character;
