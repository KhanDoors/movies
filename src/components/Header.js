import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      ππ¬ Movie App πΊπ½{" "}
    </span>
  );
};

export default Header;
