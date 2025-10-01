import { Component, inject } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-navbar',
  imports: [TranslocoModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  private readonly translocoService = inject(TranslocoService);

  public trocarLinguagem(locale: string) {
    this.translocoService.setActiveLang(locale);

    localStorage.setItem('portfolio:locale', locale);
  }
}
