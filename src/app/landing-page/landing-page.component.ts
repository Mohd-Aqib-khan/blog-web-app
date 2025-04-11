import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  activeTab: 'login' | 'signup' = 'login';
  constructor(private router: Router, private activeRouter: ActivatedRoute){}

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
   this.activeRouter.queryParams.subscribe(params => {
    if (params['token']) {
      localStorage.setItem('token', params['token']);
      this.router.navigate(['/dashboard'])
    }
   })
   const isLoggedIn = localStorage.getItem('token');
   if (isLoggedIn) {
    this.router.navigate(['/dashboard']);
   }
 }

  switchTab(tab: 'login' | 'signup') {
    this.activeTab = tab;
  }
}
