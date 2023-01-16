import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService implements OnInit {
  isMobile: boolean = false;
  constructor() { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    this.refreshMobileStatus();
  }

  refreshMobileStatus() {
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
}
