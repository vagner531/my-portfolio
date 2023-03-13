import { GeneralService } from './../services/general.service';
import { Experience, Education } from './../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  educationList: Education[] = [
    {
      institution: 'Faculdade de Informática e Administração Paulista (FIAP)',
      course:
        'Análise e Desenvolvimento de SistemasAnálise e Desenvolvimento de Sistemas',
      duration: '2019 - 2020',
    },
    {
      institution: 'React (Alura)',
      course: 'Componentes reutilizáveis para sua webappReact',
      duration: '2020',
    },
    {
      institution: 'Bootcamp Ignite - Rocketseat',
      course:
        'Programação fullstack passando por todo o processo do desenvolvimento de sistemas',
      duration: '2022-2023',
    },
  ];

  experienceList: Experience[] = [
    {
      role: 'Desenvolvedor front end',
      company: 'Agência Weber',
      duration: '2021-2022',
      description: [
        'Experiência em manutenção de projetos, incluindo desenvolvimento de sites e landing pages com enfoque em performance, SEO, experiência do usuário, design e design responsivo para adaptação em todas as plataformas e telas',
        'Competências incluem: Reactjs, Javascript, Typescript, Wordpress, Elementor, HTML5, CSS3, SASS, Grid, Flexbox, Bootstrap, JQuery, Figma, Adobe Photoshop, SEO e UX.'
      ],
    },
  ];

  constructor(public generalService: GeneralService) {}

  ngOnInit(): void {}
}
