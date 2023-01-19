import { Component } from '@angular/core';
import {UtilsService} from "../../shared/utils.service";

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent {

  constructor(public utils: UtilsService) {
  }

}
