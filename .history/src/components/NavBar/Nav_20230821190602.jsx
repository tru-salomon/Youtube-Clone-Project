import ytLogo from "../../assets/logo/Youtube.256.png";
import "./Nav.css"

export default function NavBar() {
  return (
    <>
      <div className="header">
        <a href="https://resilient-daffodil-3af864.netlify.app/">
          <img src={ytLogo} className="logo" alt="YouTube logo" />
        </a>
        <h2>Home &nbsp;&nbsp;&nbsp;About &nbsp;&nbsp;&nbsp;Favorites</h2>
      </div>
    </>
  );
}
