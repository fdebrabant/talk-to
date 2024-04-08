import logo from "../assets/logo.svg";
import profil from "../assets/icons/profil.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      role="banner"
      className="d-flex justify-content-between align-items-center"
    >
      <Link to="/">
        <img src={logo} alt="Talk to" />
      </Link>

      <a href="/profil">
        <img src={profil} alt="" />
      </a>
    </header>
  );
}
