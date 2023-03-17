import { MatDialogModule } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(public generalService: GeneralService) { }
  // MatDialogModule
  ngOnInit(): void {
    this.generalService.showDialog=true;
    this.generalService.getEmailData().subscribe((data: any) => {
      this.generalService.emailData = data;
      console.log(this.generalService.emailData);
      console.log("2 - " + data);
      
    });
  }
   email = '@google';  
}
