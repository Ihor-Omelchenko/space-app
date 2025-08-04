import { Component, signal, WritableSignal } from '@angular/core';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { Planet, planets } from '../../data/planets';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [
    TabsComponent
  ],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease', style({ opacity: 1 }))
      ]),
      transition('* => *', [
        style({ opacity: 0 }),
        animate('1000ms ease', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class DestinationComponent {
  activePlanet: WritableSignal<Planet> = signal(planets[0]);

  onTabChange(index: number): void {
    this.activePlanet.set(planets[index]);
  }
}
