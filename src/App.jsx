import CharacterList from "./components/CharacterList";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="dark:bg-gray-800">
      <NavBar />
      <Logo />
      <CharacterList />
      <Footer />
    </div>
  );
}

export default App;
