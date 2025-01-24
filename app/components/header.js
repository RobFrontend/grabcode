import Navigation from "./navigation";

function Header() {
  return (
    <div className="flex justify-between items-center navigation">
      {" "}
      <h1 className="logoheading">
        {"<"}GrabCode{"/>"}
      </h1>
      <Navigation />
    </div>
  );
}

export default Header;
