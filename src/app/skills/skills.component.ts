import { Skill } from './../model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skill: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Basico',
      duration: '2 semanas',
      rating: 65,
    },
    {
      name: 'Reactjs',
      level: 'Intermediario',
      duration: '1 ano 9 meses',
      rating: 65,
    },
    {
      name: 'Javascript',
      level: 'Intermediario',
      duration: '1 ano 9 meses',
      rating: 65,
    }
    ,
    {
      name: 'Typescript',
      level: 'Intermediario',
      duration: '1 ano 9 meses',
      rating: 65,
    }
    ,
    {
      name: 'HTML5',
      level: 'Expert',
      duration: '2 anos',
      rating: 85,
    },
    {
      name: 'CSS3',
      level: 'Expert',
      duration: '2 anos',
      rating: 85,
    },
    {
      name: 'CSS3',
      level: 'Expert',
      duration: '2 anos',
      rating: 85,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
