import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog, private snackbar: MatSnackBar) {}

  goToTarget(target: string) {
    if(target === 'apropos') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      // @ts-ignore
      document.getElementById(target).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }

}
