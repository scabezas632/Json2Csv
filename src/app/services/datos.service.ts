import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class DatosService {

  datosUrl:string = "https://paralela-2fcd6.firebaseio.com/Profesores.json";

  constructor( private http:Http ) { }

  getDatos(){

    return this.http.get( this.datosUrl )
        .map( res=>res.json() );
  }

}
