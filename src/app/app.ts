import { Component } from '@angular/core';

interface ItemHabilidade {
  icone: string;
  titulo: string;
  descricao?: string;
}

interface IconeHabilidade {
  imagem: string;
  titulo: string;
}

interface ItemPortfolio {
  titulo: string;
  descricao: string;
  urlImagem: string;
  urlGif: string;
  urlRepositorio: string;
  stack: string[];
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
})
export class App {
  public itensHabilidades: ItemHabilidade[] = [
    {
      icone: 'bi-window-fullscreen',
      titulo: 'Web Design',
      descricao: `Design e desenvolvimento de sistemas web atraentes e responsivos.`,
    },
    {
      icone: 'bi-server',
      titulo: 'Aplicações Back-End',
      descricao: `Desenvolvimento de sistemas robustos para solucionar problemas simples ou complexos.`,
    },
    {
      icone: 'bi-graph-up',
      titulo: 'Testes Automatizados',
      descricao: `Criação de testes automatizados que facilitam a manutenção e melhoram as entregas das aplicações.`,
    },
    {
      icone: 'bi-wrench',
      titulo: 'Engenharia de Software',
      descricao: `Planejamento e execução de sistemas multi-camadas, integrando várias tecnologias de forma organizada e escalável.`,
    },
    {
      icone: 'bi-people',
      titulo: 'Liderança',
      descricao: `Habilidade de liderar e tomar decisões técnicas em projetos em equipe.`,
    },
    {
      icone: 'bi-building-up',
      titulo: 'Implantação',
      descricao: `Implantação e manutenção de sistemas em servidores VPS e em nuvem.`,
    },
  ];

  public iconesHabilidades: IconeHabilidade[] = [
    {
      imagem: 'https://skillicons.dev/icons?i=html&theme=dark',
      titulo: 'HTML',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=css&theme=dark',
      titulo: 'CSS',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=scss&theme=dark',
      titulo: 'SCSS',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=js&theme=dark',
      titulo: 'JavaScript',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=ts&theme=dark',
      titulo: 'TypeScript',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=bootstrap&theme=dark',
      titulo: 'Bootstrap',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=angular&theme=dark',
      titulo: 'Angular',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=rxjs&theme=dark',
      titulo: 'RxJS',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=net&theme=dark',
      titulo: '.NET',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=cs&theme=dark',
      titulo: 'C#',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=selenium&theme=dark',
      titulo: 'Selenium',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=cypress&theme=dark',
      titulo: 'Cypress',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=sqlite&theme=dark',
      titulo: 'SQLite',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=postgres&theme=dark',
      titulo: 'Postgres',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=redis&theme=dark',
      titulo: 'Redis',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=docker&theme=dark',
      titulo: 'Docker',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=powershell&theme=dark',
      titulo: 'PowerShell',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=git&theme=dark',
      titulo: 'Git',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=github&theme=dark',
      titulo: 'GitHub',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=azure&theme=dark',
      titulo: 'Azure',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=visualstudio&theme=dark',
      titulo: 'Visual Studio',
    },
    {
      imagem: 'https://skillicons.dev/icons?i=vscode&theme=dark',
      titulo: 'VSCode',
    },
  ];

  public itensPortfolio: ItemPortfolio[] = [
    {
      titulo: 'Controle de Medicamentos',
      urlImagem: 'controle-de-medicamentos.png',
      urlGif: 'https://i.imgur.com/SDgwx8m.gif',
      urlRepositorio:
        'https://github.com/academiadoprogramador-fullstack/controle-de-medicamentos-2025',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      descricao: `O sistema de Controle de Medicamentos apresenta o conceito de gerenciamento de um posto de saúde, com o controle de fornecimento, estoque, funcionários, pacientes e retirada de prescrições — com foco na rastreabilidade das movimentações de estoque.`,
    },
    {
      titulo: 'Gestão de Equipamentos',
      urlImagem: 'gestao-de-equipamentos.png',
      urlGif: '',
      urlRepositorio:
        'https://github.com/academiadoprogramador-fullstack/gestao-de-equipamentos-2025',
      stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      descricao: `O sistema de Gestão de Equipamentos controla o estoque de um almoxarifado, com a gestão de equipamentos e o registro de chamados de manutenção que eventualmente ocorrem durante o uso dos equipamentos. Também são inclusas informações sobre os fabricantes dos equipamentos para contato de suporte ou compras.`,
    },
  ];

  public itemPortfolioSelecionado?: ItemPortfolio;
}
