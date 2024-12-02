import React, { useState } from "react";
import "../LuzDeTrafico.css";
import { ControlButon } from "./ControlButon";

export const TrafficLight = () => {
  // Estado inicial: rojo
  const [activeLight, setActiveLight] = useState("red");

  // Define las luces en un array de objetos
  const lights = [
    { color: "red", label: "Rojo" },
    { color: "yellow", label: "Amarillo" },
    { color: "green", label: "Verde" },
  ];

  //  orden de las luces
  const lightsOrder = ["red", "yellow", "green"];

  // cambio de luz al siguiente
  const handleNextLight = () => {
    const currentIndex = lightsOrder.indexOf(activeLight);
    const nextIndex = (currentIndex + 1) % lightsOrder.length; // Vuelve inicio
    setActiveLight(lightsOrder[nextIndex]);
  };

  const isActive = (color) => activeLight === color;

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        {lights.map((light) => (
          <div
            key={light.color}
            className={`light ${light.color} ${isActive(light.color) ? "active" : ""}`}
          ></div>
        ))}
      </div>

      <ControlButon handleNextLight={handleNextLight} />
    </div>
  );
};
