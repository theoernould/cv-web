import { Component } from '@angular/core';
import {Projet} from "../../models/projet";

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent {
  projets: Projet[] = [
    {
      id:1,
      image: '',
      titre: 'Chat sécurisé',
      description: 'Application de chat sécurisé avec chiffrement.',
      date: 'Mars 2022',
      technologiesUsed: {
        langages: ['NodeJS', 'Javascript'],
        frameworks: ['ExpressJS', 'Socket.io'],
        outils: ['Git', 'npm'],
        editeurs: ['Intellij IDEA']
      },
      documents: [
        {
          nom: 'Projet Github',
          type: 'github',
          lien: 'https://github.com/theoernould/hermes-website',
        },
        {
          nom: 'Démonstration',
          type: 'demo',
          lien: '',
        },
      ]
    },
    {
      id: 2,
      video: 'https://www.youtube.com/embed/nOYWxa42C5g',
      titre: 'Logiciel de visualisation 3D',
      description: 'Logiciel de visualisation 3D développé en groupe dans le cadre du DUT Informatique. Le but étant de pouvoir visualiser un fichier .ply et d\'y appliquer des transformations géométriques comme la rotation, l\'homothétie, le calcul des ombres, le lissage ou encore le zoom.',
      date: 'Janvier 2022',
      technologiesUsed: {
        langages: ['Java'],
        frameworks: ['JavaFX'],
        outils: ['Git', 'Maven'],
        editeurs: ['IntelliJ IDEA']
      },
      documents: [
        {
          nom: 'Projet Github',
          type: 'github',
          lien: 'https://github.com/theoernould/Visualisateur-3D',
        },
        {
          nom: 'Application',
          type: 'download',
          lien: 'assets/projets/Projet Modélisation.jar',
          downloadName: 'Projet Modélisation.jar'
        }
      ]
    },
    {
      id: 3,
      titre: 'Jeu du moulin',
      description: 'Jeu du moulin développé en groupe dans le cadre du DUT Informatique sous la forme d\'un logiciel. Le but étant de pouvoir jouer au jeu du moulin à deux sur un même ordinateur.',
      date: 'Juin 2021',
      technologiesUsed: {
        langages: ['Java'],
        frameworks: ['JavaFX'],
        outils: ['Git'],
        editeurs: ['IntelliJ IDEA']
      },
      documents: [
        {
          nom: 'Projet Github',
          type: 'github',
          lien: 'https://github.com/theoernould/Jeu-Du-Moulin',
        },
        {
          nom: 'Application',
          type: 'download',
          lien: 'assets/projets/Jeu du moulin.jar',
          downloadName: 'Jeu du moulin.jar'
        }
      ]
    },
    {
      id: 4,
      titre: 'Convertisseur de couleurs',
      description: 'Convertisseur de couleurs développé en groupe pendant mon DUT Informatique. L\'objectif est d\'obtenir des teintes de couleur (visibles les unes par par rapport aux autres en nuance de gris) en fonction d\'une couleur donnée.',
      date: 'Juin 2021',
      technologiesUsed: {
        langages: ['Java'],
        frameworks: ['JavaFX'],
        outils: ['Git'],
        editeurs: ['IntelliJ IDEA']
      },
      documents: [
        {
          nom: 'Projet Github',
          type: 'github',
          lien: 'https://github.com/theoernould/convertisseur-couleurs',
        },
        {
          nom: 'Application',
          type: 'download',
          lien: '',
          downloadName: ''
        }
      ]
    },
  ];

}
