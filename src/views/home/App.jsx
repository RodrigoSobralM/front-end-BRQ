import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  const [cpfCnpj, setCpfCnpj] = useState("");
  const handleCpfChange = (event) => {
    const { value } = event.target;
    const numericValue = value.replace(/\D/g, "");

    if (numericValue.length <= 11) {
      const maskedValueCpf = numericValue.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
        "$1.$2.$3-$4"
      );
      setCpfCnpj(maskedValueCpf);
    } else {
      const maskedValueCnpj = numericValue.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
        "$1.$2.$3/$4-$5"
      );
      setCpfCnpj(maskedValueCnpj);
    }

    if (value.trim() !== "" && pass.trim() !== "") {
      setErrorMessage("");
    }
  };
  return (
    <div className="geral">
      <div className="container">
        <img className="logo" src="/logo.svg" alt="" />
        <h1>Área de login do administrador </h1>
        <form action="" className="forms">
          <div className="form-group">
            <label htmlFor="">CPF/CPNJ:</label>
            <input type="text" placeholder="Insira seu CPF/CNPJ" value={cpfCnpj} onChange={handleCpfChange} />
          </div>
          <div className="form-group">
            <label htmlFor="">SENHA:</label>
            <input type="password" placeholder="Insira sua senha"/>
          </div>
          <Link to={'/logado'}>
            <button>ENTRAR</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default App;
