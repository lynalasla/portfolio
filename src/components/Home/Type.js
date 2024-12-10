import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Étudiante en AI et DS",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 90,
      }}
    />
      
  );
}

export default Type;
