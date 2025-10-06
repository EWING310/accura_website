import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ImageItem {
  src: string;
  title: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Accura Scandinavian Store');

  modalActive = signal(false);
  modalImageSrc = signal('');
  modalImageTitle = signal('');

  // Login/Navigation state
  isLoggedIn = signal(false);
  showLoginModal = signal(false);
  showMobileMenu = signal(false);

  // Loading states for social logins
  googleLoading = signal(false);
  facebookLoading = signal(false);
  appleLoading = signal(false);

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

  openLoginModal(): void {
    this.showLoginModal.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeLoginModal(): void {
    this.showLoginModal.set(false);
    document.body.style.overflow = 'auto';
  }

  toggleMobileMenu(): void {
    this.showMobileMenu.set(!this.showMobileMenu());
  }

  login(): void {
    this.isLoggedIn.set(true);
    this.closeLoginModal();
  }

  logout(): void {
    this.isLoggedIn.set(false);
  }

  // Social Login Methods
  loginWithGoogle(): void {
    if (this.googleLoading()) return;

    this.googleLoading.set(true);
    console.log('Google login initiated...');

    // Simulate Google OAuth flow
    setTimeout(() => {
      this.googleLoading.set(false);
      this.isLoggedIn.set(true);
      this.closeLoginModal();
      this.showSuccessMessage('Successfully logged in with Google!');
    }, 2000);
  }

  loginWithFacebook(): void {
    if (this.facebookLoading()) return;

    this.facebookLoading.set(true);
    console.log('Facebook login initiated...');

    // Simulate Facebook OAuth flow
    setTimeout(() => {
      this.facebookLoading.set(false);
      this.isLoggedIn.set(true);
      this.closeLoginModal();
      this.showSuccessMessage('Successfully logged in with Facebook!');
    }, 2000);
  }

  loginWithApple(): void {
    if (this.appleLoading()) return;

    this.appleLoading.set(true);
    console.log('Apple login initiated...');

    // Simulate Apple Sign-In flow
    setTimeout(() => {
      this.appleLoading.set(false);
      this.isLoggedIn.set(true);
      this.closeLoginModal();
      this.showSuccessMessage('Successfully logged in with Apple!');
    }, 2000);
  }

  private showSuccessMessage(message: string): void {
    // You can implement a toast/notification system here
    alert(message);
  }
}