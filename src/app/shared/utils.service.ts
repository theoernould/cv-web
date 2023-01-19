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
