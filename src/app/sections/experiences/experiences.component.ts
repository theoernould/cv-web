import { Component } from '@angular/core';
import {UtilsService} from "../../shared/utils.service";
import {Experience} from "../../models/experience";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {
  constructor(public utils: UtilsService) {
  }

  experiences: Experience[] = [
    {
      id: 'leroymerlinfullstack',
      poste: 'Développeur Full Stack en alternance',
      dates: 'Septembre 2022 - Aujourd\'hui',
      entreprise: 'Leroy Merlin - IMT Nord Europe',
      description: 'Amélioration d\'un outil interne à Leroy Merlin qui s’appelle SOS Data dont le but est de servir d’interface pour remonter les erreurs descriptives présentes sur les produits hors marketplace, ces derniers pouvant ensuite être traitées par des équipes spécialisées. L’application est composée d’une API Rest développée avec Spring Boot pour la partie serveur et d\'un site web conçu avec Angular.',
      technologiesUsed: {
        langages: ['Java', 'TypeScript'],
        frameworks: ['Spring Boot', 'Angular', 'Angular Material'],
        outils: ['Maven', 'Github', 'Jira', 'MongoDB', 'SonarQube', 'Postman'],
        editeurs: ['IntelliJ IDEA']
      }
    },
    {
      id: 'norsysweb',
      poste: 'Stagiaire en développement web',
      dates: 'Avril 2022 - Juin 2022',
      entreprise: 'norsys',
      description: 'Amélioration d’un site web de gestion de stocks pour l’association « Le Vestiaire Solidaire » basée à Marcq-en-Barœul dont l’objectif est de collecter et redistribuer des vêtements pour les personnes dans le besoin. L’interface a été conçue avec l’aide d’Angular et le serveur en Java avec Spring Boot.',
      technologiesUsed: {
        langages: ['Java', 'TypeScript'],
        frameworks: ['Spring Boot', 'Angular'],
        outils: ['Maven', 'Gitlab', 'Jira', 'PostgreSQL', 'Postman'],
        editeurs: ['IntelliJ IDEA']
      }
    }
  ];

}
