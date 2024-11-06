import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import amlak from "../../Assets/Projects/amlak.png";
import porto from "../../Assets/Projects/portfolio.png";
import sa from "../../Assets/Projects/SAinterface.png";
import predict from "../../Assets/Projects/predict.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong> récents
        </h1>
        <p style={{ color: "#002F48" }}>
          Vous trouverez ci-joints cetains de mes projets.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={porto}
              isBlog={false}
              title="Portfolio"
              description="Ce portfolio présente une sélection de mes projets en data science, chacun conçu pour résoudre des problèmes concrets. Les projets incluent des analyses approfondies et des modèles prédictifs appliqués à des jeux de données réels."
              ghLink="https://github.com/lynalasla/portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={predict}
              isBlog={false}
              title="Prédiction du Décrochage et du Succès Académique des Étudiants"
              description="Ce projet de data science analyse les données académiques pour prédire le risque de décrochage et le succès des étudiants. En utilisant un jeu de données spécifique, un modèle prédictif a été élaboré pour identifier les facteurs clés qui influencent les performances académiques. Les résultats de l'analyse offrent des recommandations utiles aux institutions éducatives, leur permettant de mieux cibler leurs interventions pour accompagner les étudiants en difficulté."
              ghLink="https://github.com/lynalasla/Prediction-du-Decrochage-et-du-Succes-Academique-des-etudiants"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sa}
              isBlog={false}
              title="analyse de sentiments d'avis amazon"
              description="Développement d'une application web interactive permettant d'analyser les sentiments des avis de produits Amazon. L'outil utilise des techniques de traitement du langage naturel (NLP) et un modèle de machine learning pour classer chaque avis comme positif, négatif ou neutre. L'interface est simple et offre une expérience utilisateur fluide et professionnelle."
              ghLink="https://github.com/lynalasla/analyse-de-sentiments-d-avis-amazon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amlak}
              isBlog={false}
              title="Amlak"
              description=" Un site web sur mesure pour une agence immobilière, 
              alliant une interface intuitive à une recherche de biens performante pour offrir une expérience
               fluide aux utilisateurs. La plateforme met en avant une sélection de biens actualisée, 
               permet de filtrer les propriétés selon divers critères, et facilite la prise de contact avec 
               l'agence. L'ensemble a été pensé pour répondre aux attentes des clients tout en mettant en avant
                l'image de marque de l'agence, avec un design à la fois élégant et fonctionnel qui valorise 
                l’expérience utilisateur."
              ghLink="https://github.com/lynalasla/amlak"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
