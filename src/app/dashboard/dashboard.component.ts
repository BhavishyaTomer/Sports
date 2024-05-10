import { Component } from '@angular/core';
import { DarkmodeService } from '../service/darkmode.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(public darkmode: DarkmodeService) { }

  toggleMode() {
    this.darkmode.updateDarkMode();
  }


}
