import { Component,OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/widgets/layout/layout.component';
import { SplashComponent } from './layout/pages/splash/splash.component';
import { PreloadService } from './layout/services/preload.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutComponent,
    SplashComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  preload = inject(PreloadService);

  ngOnInit() {
    this.preload.loadImages([
      '/images/res-render-1.svg',
      '/images/res-render-2.svg',
      '/images/res-render-3.svg',
      '/images/res-render-4.svg',
      '/images/planets/moon.svg',
      '/images/planets/mars.svg',
      '/images/planets/europa.svg',
      '/images/planets/titan.svg'
    ]);
  }
}
