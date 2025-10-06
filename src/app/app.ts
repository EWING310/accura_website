import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface ImageItem {
  src: string;
  title: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Accura Scandinavian Store');

  modalActive = signal(false);
  modalImageSrc = signal('');
  modalImageTitle = signal('');

  images: ImageItem[] = [
    { src: 'assets/download.jpeg', title: 'Nordic Elegance' },
    { src: 'assets/download (1).jpeg', title: 'Scandinavian Style' },
    { src: 'assets/image_fx_.jpg', title: 'Minimalist Fashion' },
    { src: 'assets/image_fx_ (1).jpg', title: 'Contemporary Nordic' },
    { src: 'assets/image_fx_ (2).jpg', title: 'Refined Simplicity' },
    { src: 'assets/image_fx_ (3).jpg', title: 'Modern Scandinavian' },
    { src: 'assets/image_fx_ (4).jpg', title: 'Clean Lines' },
    { src: 'assets/image_fx_ (5).jpg', title: 'Nordic Sophistication' },
    { src: 'assets/image_fx_ (6).jpg', title: 'Timeless Design' },
    { src: 'assets/image_fx_ (7).jpg', title: 'Effortless Style' },
    { src: 'assets/image_fx_ (8).jpg', title: 'Scandinavian Chic' },
    { src: 'assets/image_fx_ (9).jpg', title: 'Pure Aesthetics' },
    { src: 'assets/image_fx_ (10).jpg', title: 'Nordic Grace' },
    { src: 'assets/image_fx_ (11).jpg', title: 'Minimalist Beauty' },
    { src: 'assets/image_fx_ (12).jpg', title: 'Contemporary Classic' },
    { src: 'assets/image_fx_ (13).jpg', title: 'Scandinavian Luxury' },
    { src: 'assets/image_fx_ (14).jpg', title: 'Refined Nordic' },
    { src: 'assets/woman trying on clothes.jpg', title: 'Nordic Fashion Experience' }
  ];

  openModal(src: string, title: string): void {
    this.modalImageSrc.set(src);
    this.modalImageTitle.set(title);
    this.modalActive.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.modalActive.set(false);
    document.body.style.overflow = 'auto';
  }
}