import { GeneralService } from './../services/general.service';
import { ProjectData } from './../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  isOpen = false;

  projectsList: ProjectData[]  = [
    {
      title: 'Finance',
      image: './assets/cover/05.png',
      templateUrl: 'https://finance-lyart.vercel.app/',
      description:
        'Este projeto é uma aplicação web de gerenciamento financeiro que permite aos usuários registrar e acompanhar suas transações financeiras.',
      technologies: [
        'Reactjs Nextjs Typescript Tailwind StyledComponents' ,
      ],
    },
    {
      title: 'Portfólio',
      image: './assets/cover/04.png',
      templateUrl: 'https://vagnersantos.netlify.app',
      description:
        'Meu site pessoal de portfólio para mostrar minhas habilidades, experiência e projetos que publiquei...',
      technologies: [
        'Reactjs Nextjs Typescript' ,
      ],
    },
    {
      title: 'Dashgo.',
      image: './assets/cover/03.png',
      templateUrl: 'https://dashgo-snaw.vercel.app/dashboard',
      description:
        'Este projeto é baseado no 4º módulo da trilha ReactJS do Ignite e inclui um banco de dados com Prisma, um sistema CRUD para usuários e autenticação.',
      technologies: [
        'Reactjs Nextjs Typescript' ,
      ],
    },
    
  ];

  constructor(public generalService: GeneralService) {}

  ngOnInit(): void {}
}
