import CharacterList from "./components/CharacterList";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import Modal from "react-modal";
import { useState  } from "react";

Modal.setAppElement("#root");

function App() {
  
  const [navState, setNavState] = useState("Characters");

  return (
    <div className="dark:bg-gray-800">
      <NavBar navState={navState} setNavState={setNavState}/>
      <Logo />
      <CharacterList />
      <Footer />
    </div>
  );
}

export default App;
