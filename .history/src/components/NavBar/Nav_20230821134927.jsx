import ytLogo from "../../assets/logo/Youtube.256.png";
import "./Nav.css"

export default function NavBar() {
  return (
    <>
      <div className="header">
        <a href="https://resilient-daffodil-3af864.netlify.app/">
          <img src={ytLogo} className="logo" alt="YouTube logo" />
        </a>
        <nav>
          <ul>
            <li class="home page">
              <a href="#">HOME</a>
            </li>
            <li class="about page">
              <a href="#">About</a>
            </li>
            <li class="favorites page">
              <a href="#">✮Favorites</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
