import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Foto01 from "../../assets/foto01.png";
import "./form.css";
import Footer from "../footer";

function Form() {
  const [nome, setNome] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [endereço, setEndereço] = useState("");
  const [cep, setCep] = useState("");
  const [bairo, setBairro] = useState("");
  const [estado, setEstado] = useState("");
  const [pai, setPai] = useState("");
  const [mae, setMae] = useState("");
  const [tel, setTel] = useState("");
  const [wpp, setWpp] = useState("");
  const [email, setEmail] = useState("");
  const [insta, setinsta] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [esp, setEsp] = useState("");
  const [idioma, setIdioma] = useState("");
  const [medidas, setMedidas] = useState("");

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    if (
      nome === "" ||
      municipio === "" ||
      endereço === "" ||
      cep === "" ||
      bairo === "" ||
      estado === "" ||
      pai === "" ||
      mae === "" ||
      tel === "" ||
      wpp === "" ||
      email === "" ||
      insta === "" ||
      cpf === "" ||
      rg === "" ||
      esp === "" ||
      idioma === "" ||
      medidas === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: nome,
      municipio: municipio,
      endereco: endereço,
      cep: cep,
      bairro: bairo,
      estado: estado,
      pai: pai,
      mae: mae,
      telefone: tel,
      whatsapp: wpp,
      insta: insta,
      cpf: cpf,
      rg: rg,
      esp: esp,
      idioma: idioma,
      medidas: medidas,
      email: email,
    };

    emailjs
      .send(
        "service_b5rgbp1",
        "template_hkf4cyl",
        templateParams,
        "VFKU74UYi2WOFJkVo"
      )

      .then(
        (response) => {
          console.log(" EMAIL ENVIADO", response.status, response.text);
          setNome("");
          setMunicipio("");
          setEndereço("");
          setCep("");
          setBairro("");
          setEstado("");
          setPai("");
          setMae("");
          setTel("");
          setWpp("");
          setEmail("");
          setinsta("");
          setCpf("");
          setRg("");
          setEsp("");
          setIdioma("");
          setMedidas("");
        },
        (err) => {
          console.log("error");
        }
      );
  }

  return (
    <div>
 <form className="fomulario" onSubmit={sendEmail}>
      <div style={{ marginLeft: "100px" }}>
        <h2>inscrição</h2>
        <h3>Informações Gerais: </h3>
      </div>
      <div className="form-input-container">
        <label className="form-label">
          Nome completo:
          <input
            className="form-input"
            type="text"
            name="nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
        </label>
        <label className="form-label">
          Município:
          <input
            className="form-input"
            type="text"
            name="municipio"
            onChange={(e) => setMunicipio(e.target.value)}
            value={municipio}
          />
        </label>
        <div className="form-row">
        <label className="form-label">
        Endereço:
          <input
            className="form-input"
            type="text"
            name="nome"
            onChange={(e) => setEndereço(e.target.value)}
            value={endereço}
          />
        </label>

        <label className="form-label"  style={{position: 'relative',marginLeft:'50px'}}>
         CPF:
          <input
            className="form-input"
            type="text"
            name="nome"
            onChange={(e) => setCpf(e.target.value)}
            value={cpf}
           
          />
        </label>
        </div>
        <div className="form-row">
        <label className="form-label">
        Bairoo:
          <input
            className="form-input"
            type="text"
            name="nome"
            onChange={(e) => setBairro(e.target.value)}
            value={bairo}
          />
        </label>

        <label className="form-label" style={{marginLeft:'70px'}}>
        Estado:
          <input
            className="form-input"
            type="text"
            name="nome"
            onChange={(e) => setEstado(e.target.value)}
            value={estado}
          />
        </label>
        </div>
        <label className="form-label">
          Nome do pai:
          <input
            className="form-input"
            type="text"
            name="pai"
            onChange={(e) => setPai(e.target.value)}
            value={pai}
          />
        </label>
        <label className="form-label">
          Nomw da mãe:
          <input
            className="form-input"
            type="text"
            name="mae"
            onChange={(e) => setMae(e.target.value)}
            value={mae}
          />
        </label>
        <div className="form-row">
        <label className="form-label">
        Telefone:
          <input
            className="form-input"
            type="text"
            name="nome"
            onChange={(e) => setTel(e.target.value)}
            value={tel}
          />
        </label>
        <label className="form-label" style={{marginLeft:'50px'}}>
        WhatsApp:
          <input
            className="form-input"
            type="text"
            name="nome"
            onChange={(e) => setWpp(e.target.value)}
            value={wpp}
          />
        </label>
        </div>{" "}
        <div className="form-row">
        <label className="form-label">
        E-mail:
          <input
            className="form-input"
            type="text"
            name="nome"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label className="form-label" style={{marginLeft:'65px'}}>
        Instagram:
          <input
            className="form-input"
            type="text"
            name="nome"
            onChange={(e) => setinsta(e.target.value)}
            value={insta}
          />
        </label>
        </div>
        <div>
          <div>
            <p>Documentação:</p>
          </div>
        </div>
        <div>
        <label className="form-label">
        CPF::
          <input
            className="form-input"
            type="text"
            name="nome"
            onChange={(e) => setCpf(e.target.value)}
            value={cpf}
          />
        </label>
        <label className="form-label">
        RG:
          <input
            className="form-input"
            type="text"
            name="nome"
            onChange={(e) => setRg(e.target.value)}
            value={rg}
          />
        </label>
        </div>
        <div>
          <p>Informações especifica:</p>
        </div>
        <div>
          <textarea
            className="form-input-inline"
            type="text"
            name="esp"
            onChange={(e) => setEsp(e.target.value)}
            value={esp}
          />
        </div>
        <div>
          <p>Idioma:</p>
        </div>
        <div>
          <input
            type="text"
            name="idioma"
            placeholder="Idioma"
            onChange={(e) => setIdioma(e.target.value)}
            value={idioma}
          />
        </div>
        <div>
          <p>Medidas:</p>
        </div>
        <div>
          <input
            type="text"
            name="idioma"
            placeholder="Medidas"
            onChange={(e) => setMedidas(e.target.value)}
            value={medidas}
          />
        </div>
      </div>

      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            checked={checked1}
            onChange={() => setChecked1(!checked1)}
          />
          A Candidata declara estar ciente das condições para efetuar sua
          inscrição. <a href="https://www.missuniversebrazil.com.br/images/documentos/termo_aceite1.pdf" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>Leia mais</a>

        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={checked2}
            onChange={() => setChecked2(!checked2)}
          />
          A Candidata declara, sob pena da lei, que as informações prestadas são
          verdadeiras, corretas,<br/> atuais e completas sobre si mesma,
          responsabilizando-se civil e criminalmente por toda omissão e/ou
          imprecisão de seus dados pessoais.
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={checked3}
            onChange={() => setChecked3(!checked3)}
          />
        A candidata declara que está ciente das regras do concurso e que deverá providenciar material<br/> a ser enviado à empresa Miss Brasil Organização de Eventos Ltda por meio deste portal.
        </label>
      </div>

      <div className="div-row">
        <img src={Foto01} alt="foto" />
      </div>

      <button className="form-submit" type="submit">
        Enviar
      </button>
      <div><Footer/></div>
    </form>
    </div>
   
  );
}

export default Form;
