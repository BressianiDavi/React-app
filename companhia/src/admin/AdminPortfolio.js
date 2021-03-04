import React, { Component } from "react";

import config, { storage } from "./../firebase-config";
class AdminPortfolio extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div style={{ padding: "120px" }}>
        <h2>Portfolio - Área Administrativa</h2>
        <form>
          <div className="form-group">
            <label for="titulo" className="form-label">
              Título
            </label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              placeholder="Titulo"
            />
          </div>
          <div className="form-group">
            <label for="descricao" className="form-label">
              Descrição
            </label>
            <textarea
              className="form-control"
              id="descricao"
              aria-label="With textarea"
            ></textarea>
          </div>
          <div className="form-group">
            <label for="imagem">example</label>
            <input type="file" className="form-control-file" id="imagem" />
          </div>
          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default AdminPortfolio;
