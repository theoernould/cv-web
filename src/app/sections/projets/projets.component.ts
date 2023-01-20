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
      id: 1,
      image: 'assets/projets/arbscanner.png',
      titre: 'Détecteur d\'opportunités de spreading',
      description: 'Interface web permettant de détecter les opportunités de spreading sur le marchés des cryptomonnaies. Le spreading consiste à acquérir un actif sur une plateforme et à le revendre aussitôt sur une autre plateforme à un prix plus élevé afin de réaliser un bénéfice. L\'utilisateur pouvant sélectionner les cryptomonnaies (BTC, ETH, ...) et les plateformes d\'échanges (Binance, Coinbase, ...) et ainsi obtenir une liste des opportunités de spreading.',
      date: 'Septembre 2022',
      technologiesUsed: {
        langages: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java'],
        frameworks: ['Angular', 'Angular Material', 'Spring Boot'],
        outils: ['Git', 'Maven'],
        editeurs: ['IntelliJ IDEA']
      },
      documents: []
    },
    {
      id:2,
      image: '',
      titre: 'Chat sécurisé',
      description: 'Application de chat sécurisé avec chiffrement.',
      date: 'Mars 2022',
      technologiesUsed: {
        langages: ['HTML', 'CSS', 'Javascript', 'NodeJS'],
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
          nom: 'Compte-rendu',
          type: 'download',
          lien: 'assets/projets/compte-rendu.pdf',
          downloadName: 'Compte-rendu.pdf'
        },
        {
          nom: 'Démonstration',
          type: 'demo',
          lien: '',
        },
      ]
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
        }
      ]
    },
    {
      id: 6,
      titre: 'Bataille navale',
      description: 'Le fameux jeu de stratégie recréé en site web dans le cadre de la matière Informatique et Science du Numérique (ISN) en classe Terminale',
      date: 'Octobre 2019',
      technologiesUsed: {
        langages: ['HTML', 'CSS', 'Javascript', 'jQuery'],
        editeurs: ['Visual Studio Code']
      },
      documents: [
        {
          nom: 'Projet Github',
          type: 'github',
          lien: 'https://github.com/theoernould/bataille-navale',
        },
        {
          nom: 'Démo',
          type: 'demo',
          lien: 'https://theoernould.github.io/bataille-navale/',
        }
      ]
    },
    {
      id: 7,
      titre: 'Qui est-ce ?',
      description: 'Le jeu iconique créé sous la forme d\'un site web dans le cadre de la matière Informatique et Science du Numérique (ISN) en classe de Terminale',
      date: 'Octobre 2019',
      technologiesUsed: {
        langages: ['HTML', 'CSS', 'Javascript'],
        editeurs: ['Visual Studio Code']
      },
      documents: [
        {
          nom: 'Projet Github',
          type: 'github',
          lien: 'https://github.com/theoernould/qui-est-ce',
        },
        {
          nom: 'Démo',
          type: 'demo',
          lien: 'https://theoernould.github.io/qui-est-ce/',
        }
      ]
    },
    {
      id: 8,
      titre: 'Site TPE',
      description: 'Site web réalisé dans le cadre de mon TPE (Travaux Personnels Encadrés) en classe de Première au Lycée, servant de support pour la présentation de notre sujet, en l\'occurence le rôle des rayonnements ionisants dans les mutations génétiques.',
      date: 'Février 2019',
      technologiesUsed: {
        langages: ['HTML', 'CSS', 'Javascript'],
        editeurs: ['Visual Studio Code']
      },
      documents: [
        {
          nom: 'Projet Github',
          type: 'github',
          lien: 'https://github.com/theoernould/tpe',
        },
        {
          nom: 'Démo',
          type: 'demo',
          lien: 'https://theoernould.github.io/tpe/',
        }
      ]
    },
  ];

}
