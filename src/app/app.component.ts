import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservaComponent } from './components/reserva/reserva.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedRest = {"id": 0,
  "nombre": "",
  "comida": "",
  "direccion": "",
  "reserva": "",
  "terraza": "",
  "tel": "",
  "afluencia": ""};
  public displayRests: boolean = false;
  constructor(
    public dialog: MatDialog
  ){}

  openDialog(): void{
    const dialogRef = this.dialog.open(ReservaComponent, {
      data: this.selectedRest
    })
    dialogRef.afterClosed().subscribe(res => {
      if(res){
        alert("Su reserva se ha realizado correctamente");
      }
    })
  }

  clickRest(id:number): void{
    this.displayRests = true;
    this.selectedRest = this.restaurantes[id];
  }

  filterRest = '';
  restaurantes = [
    {"id": 0,
    "nombre": "Casa Pepe",
    "comida": "casera",
    "direccion": "Calle del Señor, 1",
    "reserva": "obligatoria",
    "terraza": "si",
    "tel": "123456789",
    "afluencia": "70%"},

    {"id": 1,
    "nombre": "Pizza Hot",
    "comida": "pizza",
    "direccion": "Calle Hamood, 25",
    "reserva": "no-obligatoria",
    "terraza": "no",
    "tel": "111156789",
    "afluencia": "10%"},
  
    {"id": 2,
    "nombre": "Teriyaki Alley",
    "comida": "asiática",
    "direccion": "Calle del Zander, 97",
    "reserva": "se aconseja",
    "terraza": "si",
    "tel": "123451234",
    "afluencia": "90%"}
    ];
  
  ngOnInit(){

  }
}
