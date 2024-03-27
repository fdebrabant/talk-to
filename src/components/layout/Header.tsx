import logo from "../../assets/logo.svg";
import profil from "../../assets/icons/profil.svg";

export default function Header() {
    return (
        <header role="banner" className="d-flex justify-content-between align-items-center">
            <img src={logo} alt="Talk to"/>
            <a href="/public"><img src={profil} alt=""/></a>
        </header>
    )
}