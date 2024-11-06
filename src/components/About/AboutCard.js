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
            <br />
            <br />
            Je suis actuellement étudiante en 5ème année (3ème de cycle
            supérieur) à l'Ecole supérieure en Sciences et Technologies de
            l'Informatique et du Numérique (ESTIN) et je me suis spécialisée en
            IA et Science des Données.
            <br />
            <br />
            En parallèle de mes études, j'ai veillé à effectuer des stages pour
            renforcer mes compétences et acquérir de l'expérience dans mon
            domaine. J'ai également suivi des formations en ligne pour
            approfondir ma formation.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
