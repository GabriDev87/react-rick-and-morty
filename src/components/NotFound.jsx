import notFound from "../assets/notFound.svg";

function NotFound() {
  return (
    <div className="flex flex-col items-center h-screen p-10">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 p-10">
        OUCH!
      </h1>
      <img src={notFound} alt="notFound" />
      <h1 className="text-4xl font-bold items-center justify-center text-gray-800 dark:text-gray-200 p-10">
        404 NOT FOUND
      </h1>
    </div>
  );
}

export default NotFound;
