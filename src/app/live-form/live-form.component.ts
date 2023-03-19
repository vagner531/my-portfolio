import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-live-form',
  templateUrl: './live-form.component.html',
  styleUrls: ['./live-form.component.scss']
})
export class LiveFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LiveFormComponent>
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
