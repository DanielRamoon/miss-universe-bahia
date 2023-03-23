import SliderHeader from "../../assets/slide-site.fw.png";
import Logo from "../../assets/logo.png";
import "./header.css";

function Header() {
  return (
    <div className="container">
      <div className="div-container-header">
        <img src={SliderHeader}></img>
        <div className="nav">
        <h1>MISS-UNIVERSE</h1>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Inscrições</a>
            </li>
            <li>
              <a href="#">Regulamento</a>
            </li>
            <li>
              <a href="#">Patrocinadores</a>
            </li>
            <li>
              <a href="#">Mídia</a>
            </li>
            <li>
              <a href="#">contato</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
