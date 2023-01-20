export class Technologies {
  langages?: string[];
  frameworks?: string[];
  outils?: string[];
  editeurs?: string[];

  constructor(langages?: string[], frameworks?: string[], outils?: string[], editeurs?: string[]) {
    this.langages = langages;
    this.frameworks = frameworks;
    this.outils = outils;
    this.editeurs = editeurs;
  }
}
