export class Experience {
  id: string;
  poste: string;
  dates: string;
  entreprise: string;
  description: string;
  technologiesUsed: {
    langages: string[],
    frameworks: string[],
    outils: string[]
    editeurs: string[]
  };

  constructor(id: string, poste: string, dates: string, entreprise: string, description: string, technologiesUsed: { langages: string[]; frameworks: string[]; outils: string[]; editeurs: string[] }) {
    this.id = id;
    this.poste = poste;
    this.dates = dates;
    this.entreprise = entreprise;
    this.description = description;
    this.technologiesUsed = technologiesUsed;
  }
}
