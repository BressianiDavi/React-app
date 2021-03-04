import React from "react";

const ItemPortfolio = ({ conteudo }) => {
  const { imagem, titulo, descricao } = conteudo;
  return (
    <div className="col-sm-4">
      <div className="thumbnail">
        <img src={imagem} alt="Paris" width="400" height="100" />

        <p>
          <strong>{titulo}</strong>
        </p>
        <p>{descricao}</p>
        <p>{JSON.stringify(conteudo)}</p>
      </div>
    </div>
  );
};

export default ItemPortfolio;
