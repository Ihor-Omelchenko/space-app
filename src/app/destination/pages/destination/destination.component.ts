import { Component } from '@angular/core';
import { TabsComponent } from '../../components/tabs/tabs.component';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [
    TabsComponent
  ],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss'
})
export class DestinationComponent {

}
