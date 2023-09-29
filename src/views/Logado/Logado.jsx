import React from "react";
import "./index.css";
const Logado = () => {
  return (
    <div>
      <header>
        <div className="logoHeader">
          <img src="/logo.svg" alt="" />
          <div className="list">
            <ul>
              <li>Leilão</li>
              <li>Contato</li>
              <li>Venda</li>
            </ul>
            <div className="user">
              <img src="/userIcon.svg" alt="" />
              <p>Olá, User!</p>
              <img src="/setaIcon.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="headerSearch">
          <input
            type="text"
            placeholder="Pesquisar por: Marca, Nome, Ano, Cor..."
            name=""
            id=""
          />
          <button><img src="/lupaIcon.svg" alt="" /></button>
        </div>
      </header>
    </div>
  );
};

export default Logado;
