import { GeneralService } from './../services/general.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(public generalService: GeneralService) {

  }

  ngOnInit(): void {
    this.generalService.getEmailData().subscribe((data: any) => {
      this.generalService.emailData = data;
    });
  }

}
