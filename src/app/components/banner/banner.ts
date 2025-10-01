import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-banner',
  imports: [TranslocoModule],
  templateUrl: './banner.html',
})
export class Banner {}
