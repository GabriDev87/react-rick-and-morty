import CharacterList from "./components/CharacterList";
import FilterAndShearchBar from "./components/FilterAndSearchBar";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="dark:bg-gray-800">
      <NavBar />
      <Logo />
      <FilterAndShearchBar />
      <CharacterList />
      <Footer />
    </div>
  );
}

export default App;
