import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {
  public selected :any;
  public hours: string[] = ["14:30", "15:00", "20:00", "22:30"]
  public tables: number[] = [1,3,7,9]

  constructor(
    public dialogRef: MatDialogRef<ReservaComponent>,
    @Inject(MAT_DIALOG_DATA) public message: any) { }

  ngOnInit(): void {
  }

  onClickClose():void{
    this.dialogRef.close();
  }

}
