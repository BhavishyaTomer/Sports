import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  darkModeSignal = new BehaviorSubject<string>(this.loadDarkModePreference());

  constructor() {
    this.darkModeSignal.subscribe(mode => {
      localStorage.setItem('darkMode', mode);
    });
  }

  private loadDarkModePreference(): string {
    const storedMode = localStorage.getItem('darkMode');
    return storedMode !== null ? storedMode : 'light';
  }

  updateDarkMode() {
    const currentMode = this.darkModeSignal.value;
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    this.darkModeSignal.next(newMode);
  }
}
