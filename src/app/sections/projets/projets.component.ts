import {Component} from '@angular/core';
import {ProjectsData} from "../../models/staticData/projectsData";
import {Projet} from "../../models/projet";

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent {

  projets: Projet[] = ProjectsData.PROJECTS;

}
