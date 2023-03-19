import { LiveFormComponent } from './../live-form/live-form.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor( 
    public dialog: MatDialog,
    public generalService: GeneralService
    ) { }
  
  ngOnInit(): void {
  } 

  openDialog(): void {
    const dialoRef =this.dialog.open(LiveFormComponent, {
      width: '500px'
    });

    dialoRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }
}
