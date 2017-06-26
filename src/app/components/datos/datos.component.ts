import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html'
})
export class DatosComponent implements OnInit {

  datos:any[] = [];
  loading:boolean = true;

  constructor( private _datosServices:DatosService ) {

    this._datosServices.getDatos()
          .subscribe( data => {
              this.datos = data;
              this.loading = false;
          })
  }

  ngOnInit() {
  }

}
