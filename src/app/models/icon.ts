export class Document {
  nom: string;
  lien: string;
  type: string;
  downloadName?: string;
  iconName?: string;

  constructor(nom: string, lien: string, type: string, downloadName?: string, iconName?: string) {
    this.nom = nom;
    this.lien = lien;
    this.type = type;
    this.downloadName = downloadName;
    this.iconName = iconName;
  }
}
