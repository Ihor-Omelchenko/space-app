import { Component } from '@angular/core';
import { ExploreButtonComponent } from '../../components/explore-button/explore-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ExploreButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
