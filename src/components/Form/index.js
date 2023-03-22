import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Foto01 from "../../assets/foto01.png";
import "./form.css";

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
    <form className="fomr" onSubmit={sendEmail}>
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
          <label className="form-label-inline">Endereço:</label>
          <input
            className="form-input-inline"
            type="text"
            name="endereco"
            onChange={(e) => setEndereço(e.target.value)}
            value={endereço}
          />

          <label className="form-label-inline">CEP:</label>
          <input
            className="form-input-inline"
            type="text"
            name="cep"
            onChange={(e) => setCep(e.target.value)}
            value={cep}
          />
        </div>
        <div className="form-row">
          <label className="form-label-inline">Bairro:</label>
          <input
            className="form-input-inline"
            type="text"
            name="endereco"
            onChange={(e) => setBairro(e.target.value)}
            value={bairo}
            style={{ marginLeft: "60px" }}
          />

          <label className="form-label-inline">Estado:</label>
          <input
            className="form-input-inline"
            type="text"
            name="estado"
            onChange={(e) => setEstado(e.target.value)}
            value={estado}
            style={{ right: "15px", position: "relative" }}
          />
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
          <label className="form-label-inline">Telefone:</label>
          <input
            className="form-input-inline"
            type="text"
            name="telefone"
            onChange={(e) => setTel(e.target.value)}
            value={tel}
          />

          <label className="form-label-inline">WhatsApp:</label>
          <input
            className="form-input-inline"
            type="text"
            name="whatsapp"
            onChange={(e) => setWpp(e.target.value)}
            value={wpp}
          />
        </div>{" "}
        <div className="form-row">
          <label className="form-label-inline">E-mail:</label>
          <input
            className="form-input-inline"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            style={{ marginLeft: "50px" }}
          />

          <label className="form-label-inline">Instagram:</label>
          <input
            className="form-input-inline"
            type="text"
            name="instagram"
            onChange={(e) => setinsta(e.target.value)}
            value={insta}
            style={{ left: "8 px", position: "relative" }}
          />
        </div>
        <div>
          <div>
            <p>Documentação:</p>
          </div>
        </div>
        <div>
          <label style={{ marginLeft: "20px" }}>CPF</label>
          <input
            style={{ marginLeft: "20px" }}
            type="text"
            name="cpf"
            onChange={(e) => setCpf(e.target.value)}
            value={cpf}
          />
          <label style={{ marginLeft: "20px" }}>RG</label>
          <input
            style={{ marginLeft: "20px" }}
            type="text"
            name="rg"
            onChange={(e) => setRg(e.target.value)}
            value={rg}
          />
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
    </form>
  );
}

export default Form;
