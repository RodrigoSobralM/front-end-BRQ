import React from "react";
import Cards from "../../components/Cards/Cards";
import "./index.css";
const Logado = ({ data }) => {
  return (
    <div>
      <header>
        <div className="logoHeader">
          <img src="/logo.svg" alt="" />
          <div className="list">
            <ul>
              <li>
                <b>Leilão</b>
              </li>
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
          <button>
            <img src="/lupaIcon.svg" alt="" />
          </button>
        </div>
      </header>
      <section>
        <div className="nav">
          <div className="navBar">
            <h1>Filtros</h1>
            <div>
              <ul>
                <div className="positionFIlter">
                  <li>Marca</li>
                  <img src="/setaIcon.svg" alt="" />
                </div>
                <div className="positionFIlter">
                  <li>Modelo</li>
                  <img src="/setaIcon.svg" alt="" />
                </div>
                <div className="positionFIlter">
                  <li>Ano</li>
                  <img src="/setaIcon.svg" alt="" />
                </div>
                <div className="positionFIlter">
                  <li>Preço</li>
                  <img src="/setaIcon.svg" alt="" />
                </div>
                <div className="positionFIlter">
                  <li>Tipo</li>
                  <img src="/setaIcon.svg" alt="" />
                </div>
                <div className="positionFIlter">
                  <li>Cor</li>
                  <img src="/setaIcon.svg" alt="" />
                </div>
                <div className="positionFIlter">
                  <li>Status</li>
                  <img src="/setaIcon.svg" alt="" />
                </div>
                <div className="positionFIlter">
                  <li>Combustível</li>
                  <img src="/setaIcon.svg" alt="" />
                </div>
                <div className="positionFIlter">
                  <li>Quilometragem</li>
                  <img src="/setaIcon.svg" alt="" />
                </div>
                <div className="positionFIlter">
                  <li>Localização</li>
                  <img src="/setaIcon.svg" alt="" />
                </div>
              </ul>
            </div>
            <p>+</p>
          </div>
        </div>
        <div className="cardsPosition">
          {data.map((card) => (
            <Cards key={card.id} data={card} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Logado;
