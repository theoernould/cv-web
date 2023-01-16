import {Component, HostListener, OnInit} from '@angular/core';
import {UtilsService} from "./shared/utils.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CV-Web';

  constructor(public utils: UtilsService) {
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.utils.refreshMobileStatus();
  }

  ngOnInit(): void {
    this.utils.refreshMobileStatus();
  }
}
