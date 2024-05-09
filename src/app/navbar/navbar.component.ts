import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 
  constructor(private overlay :OverlayContainer){

  }
  switchTheme=new FormControl(false)
  @HostBinding('class') className=''
  darkClass="theme-dark"
  lightClass="theme-light"


  ngOnInit() {
    this.switchTheme.valueChanges.subscribe((data)=>{
      this.className=data?this.darkClass:this.lightClass

      if (data) {
        document.body.classList.add('theme-dark');
      } else {
        document.body.classList.remove('theme-light');
      }
    })
  }

}
