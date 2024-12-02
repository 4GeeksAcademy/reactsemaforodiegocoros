import React from "react";
import "../LuzDeTrafico.css"; // Ajusta la ruta si es necesario

export const ControlButon = ({ handleNextLight }) => {
  return (
    <button className="control-button" onClick={handleNextLight}>
      Cambiar Luz
    </button>
  );
};
