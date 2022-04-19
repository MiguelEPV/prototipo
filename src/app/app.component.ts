import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservaComponent } from './components/reserva/reserva.component';

declare function imageMapResize(): void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedRest = {"id": 0,
  "nombre": "",
  "comida": "",
  "precio": "",
  "direccion": "",
  "reserva": "",
  "terraza": "",
  "tel": "",
  "afluencia": "",
  "puntuacion": "",
  "horas": [""],
  "mesas": [0]
  };

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
    "precio": "€€€",
    "direccion": "Calle del Señor, 1",
    "reserva": "obligatoria",
    "terraza": "si",
    "tel": "123456789",
    "afluencia": "70%",
    "puntuacion": "★★★★★",
    "horas": ["14:30", "15:00", "20:00", "22:30"],
    "mesas": [1,3,7]},

    {"id": 1,
    "nombre": "Pizza Hot",
    "comida": "pizza",
    "precio": "€",
    "direccion": "Calle Hamood, 25",
    "reserva": "no-obligatoria",
    "terraza": "no",
    "tel": "111156789",
    "afluencia": "10%",
    "puntuacion": "★★★★",
    "horas": ["14:00", "15:30", "21:00", "22:00"],
    "mesas": [1,3,4,5]},
  
    {"id": 2,
    "nombre": "Teriyaki Alley",
    "comida": "asiática",
    "precio": "€€",
    "direccion": "Calle del Zander, 97",
    "reserva": "se aconseja",
    "terraza": "si",
    "tel": "123451234",
    "afluencia": "90%",
    "puntuacion": "★★★",
    "horas": ["13:30", "15:00", "22:00"],
    "mesas": [2,3]}
    ];
    
  imageResized() {
    imageMapResize(); // Javascript function in imageMapResizer.min.js 
  }
  ngOnInit(){
  
  }
}
