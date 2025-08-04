import {
  Component,
  EventEmitter,
  input,
  InputSignal,
  output,
  Output,
  OutputEmitterRef,
  signal,
  WritableSignal
} from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  tabChange: OutputEmitterRef<number> = output<number>();

  tabs: InputSignal<Array<string>> = input.required();

  activeIndex: WritableSignal<number> = signal(0);

  selectTab(index: number) {
    this.activeIndex.set(index);
    this.tabChange.emit(index)
  }
}
