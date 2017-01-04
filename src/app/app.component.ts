import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  /*template: `

  <nav>
    <a routerLink="/pessoa" routerLinkActive="active">Crisis Center</a>
    <a routerLink="/login" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
`,*/

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app works!!!';
}
