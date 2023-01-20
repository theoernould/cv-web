import {Component, Input, OnInit} from '@angular/core';
import {Projet} from "../../../models/projet";

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent {
  @Input() projet!: Projet;

  joinArray(array: string[]): string {
    return array.join(', ');
  }
}
