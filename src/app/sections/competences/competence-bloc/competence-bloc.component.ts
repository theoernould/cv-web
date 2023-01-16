import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-competence-bloc',
  templateUrl: './competence-bloc.component.html',
  styleUrls: ['./competence-bloc.component.scss']
})
export class CompetenceBlocComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() ribbon: string | undefined;
  @Input() ribbonColor: string = 'is-primary';
}
