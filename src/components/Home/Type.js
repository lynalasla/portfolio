import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Etudiante en IA et DS",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 90,
      }}
    />
      
  );
}

export default Type;
