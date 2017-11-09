import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['../css/component.css',
  '../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
  '../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  '../../node_modules/font-awesome/css/font-awesome.min.css'
]
})
export class HomeComponent {
  title = 'Corsec Tactical Home'; 
}
