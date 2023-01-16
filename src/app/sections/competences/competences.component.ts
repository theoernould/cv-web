import { Component } from '@angular/core';
import {UtilsService} from "../../shared/utils.service";

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss']
})
export class CompetencesComponent {
  constructor(public utils: UtilsService) {
  }

}
