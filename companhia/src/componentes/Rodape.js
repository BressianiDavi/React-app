/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const Rodape = (props) => {
  return (
    <footer className="container-fluid text-center">
      <a href="#myPage" title="To Top">
        <span className="glyphicon glyphicon-chevron-up"></span>
      </a>
      <p>
        <a
          href="https://github.com/BressianiDavi"
          target="_blank"
          rel="external"
          title="visit my gitHub">  
          {" "}
          Acesse o meu repositório no GitHub
        </a>
      </p>
      <p>
        Meu primeiro site convertido de um template html para 100% React usando
        Bootstrap Theme Made By{" "}
        <a href="https://www.w3schools.com" title="Visit w3schools">
          www.w3schools.com
        </a>
      </p>
    </footer>
  );
};

export default Rodape;
