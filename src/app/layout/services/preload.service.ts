import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})

export class PreloadService {
  private _ready = signal(false);
  ready = this._ready.asReadonly();

  loadImages(images: Array<string>): Promise<void> {
    const tasks = images.map(image => new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => resolve(img);
      img.src = image;
    }));

    return Promise.all(tasks).then(() => this._ready.set(true))
  }
}
