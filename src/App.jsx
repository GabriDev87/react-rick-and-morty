import CharacterList from "./components/CharacterList";
import FilterAndShearchBar from "./components/FilterAndSearchBar";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
        <NavBar />
      <div className="dark:bg-gray-800 flex flex-col items-center justify-center min-h-screen">
        <Logo />
        <FilterAndShearchBar />
        <CharacterList />
      </div>
    </div>
  );
}

export default App;
