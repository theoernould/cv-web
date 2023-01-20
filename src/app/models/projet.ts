import {Technologies} from "./technologies";
import {Document} from "./icon";

export class Projet {
  id: number;
  image?: string;
  video?: string;
  titre: string;
  description: string;
  date: string;
  technologiesUsed: Technologies;
  documents: Document[];

  constructor(id: number, image: string, video: string, titre: string, description: string, date: string, technologiesUsed: Technologies, documents: { nom: string; lien: string; type: string; downloadName?: string }[]) {
    this.id = id;
    this.image = image;
    this.video = video;
    this.titre = titre;
    this.description = description;
    this.date = date;
    this.technologiesUsed = technologiesUsed;
    this.documents = documents;
  }
}
