import { Component, inject } from '@angular/core';
import { DarkmodeService } from './service/darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment';
  darkmode:DarkmodeService=inject(DarkmodeService);
constructor(){

} 


}
