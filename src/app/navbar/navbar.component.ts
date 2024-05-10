import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay'
import { DarkmodeService } from '../service/darkmode.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 
  constructor(public darkmode: DarkmodeService) { }

  toggleMode() {
    this.darkmode.updateDarkMode();
  }



  ngOnInit() {
  

}
}