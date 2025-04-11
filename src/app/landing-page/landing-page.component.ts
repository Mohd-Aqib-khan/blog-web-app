import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  activeTab: 'login' | 'signup' = 'login';

  switchTab(tab: 'login' | 'signup') {
    this.activeTab = tab;
  }
}
