import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Banner } from './components/banner/banner';
import { Sobre } from './components/sobre/sobre';
import { Habilidades } from './components/habilidades/habilidades';
import { Portfolio } from './components/portfolio/portfolio';
import { Contato } from './components/contato/contato';
import { IconesHabilidades } from './components/icones-habilidades/icones-habilidades';

@Component({
  selector: 'app-root',
  imports: [Navbar, Banner, Sobre, Habilidades, Portfolio, Contato, IconesHabilidades],
  templateUrl: './app.html',
})
export class App {}
