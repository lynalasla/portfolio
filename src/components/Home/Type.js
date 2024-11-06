import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
   <div style={{ marginTop: '-20px' }}> {/* Ajustez la valeur selon vos besoins */}
    <Typewriter
      options={{
        strings: [
          "Etudiante en Intelligence Artificielle et Science des Données",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 90,
      }}
    />
      </>
  );
}

export default Type;
