import {Component, Input} from '@angular/core';
import {Experience} from "../../../models/experience";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() experience!: Experience;

  joinArray(array: string[]): string {
    return array.join(', ');
  }
}
