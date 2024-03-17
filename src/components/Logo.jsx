import logo from "../assets/logo.svg";

function Logo() {
  return (
    <div className="flex items-center justify-center p-10">
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;
