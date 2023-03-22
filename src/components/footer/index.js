import React from "react";
import LogoRodaPé from '../../assets/logo-rodape.fw.png'
import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      <img className="LogoRodaPé" src={LogoRodaPé} alt="logo" />
    </div>
  );
}

export default Footer;
