import React from "react";
import Card from "react-bootstrap/Card";
/*import { ImPointRight } from "react-icons/im";*/

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ marginTop: "20px" }}>
          <p style={{ textAlign: "justify" }}>
            Salut, je m'appelle <span className="purple">Lasla Lyna</span> !
            <br/>
            <br/>
            Je suis actuellement étudiante en Mastère Data & IA à l’École Multimédia à Paris,
            avec une spécialisation en Data Science, Machine Learning, intelligence artificielle et développement web.
            <br/>
            <b/>
            En parallèle de mon parcours académique, j’ai développé une expérience concrète à travers plusieurs stages
            et une expérience en tant que Data Scientist, me permettant de renforcer mes compétences en analyse de données, 
            modélisation, développement web et mise en place de pipelines data. J’ai également complété ma formation par 
            des projets pratiques et des apprentissages complémentaires afin d’approfondir mes compétences techniques.
            <br/>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
