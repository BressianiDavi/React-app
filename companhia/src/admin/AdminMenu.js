import React from "react";

const AdminMenu = (props) => {
  return (
    <div className="list-group">
      <a
        href="#"
        className="list-group-item list-group-item-action active"
        aria-current="true"
      >
        Selecione uma Opção
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        Portfolio{" "}
      </a>
    </div>
  );
};

export default AdminMenu;
