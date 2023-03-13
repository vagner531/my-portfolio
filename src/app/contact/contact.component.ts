import { GeneralService } from './../services/general.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public generalService: GeneralService) {}

  ngOnInit(): void {
  }

}
