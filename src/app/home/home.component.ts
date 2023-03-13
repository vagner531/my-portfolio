import { GeneralService } from './../services/general.service';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostBinding('class.pc') pcMode = false;

  constructor(public generalService: GeneralService) {}

  ngOnInit(): void {
    
  }

}
