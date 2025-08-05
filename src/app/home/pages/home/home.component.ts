import { Component } from '@angular/core';
import { ExploreButtonComponent } from '../../components/explore-button/explore-button.component';
import { RouterLink } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ExploreButtonComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {

}
