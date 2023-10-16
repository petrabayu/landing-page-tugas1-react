import "./Header.css";

function Header() {
  return (
    <>
      <nav>
        <ul>
          <li className="nav-title">
            <a href="#home"> Home</a>
          </li>
          <li className="nav-title">
            <a href="#register"> Register</a>
          </li>
          <li className="nav-title">
            <a href="#about"> About</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
