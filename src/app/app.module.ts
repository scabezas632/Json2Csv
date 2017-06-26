import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//RUTAS
import { APP_ROUTING } from './app.routes';

//COMPONENTES
import { AppComponent } from './app.component';
import { DatosComponent } from './components/datos/datos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//SERVICIOS
import { DatosService } from './services/datos.service';
import { KeysPipe } from './pipes/keys.pipe';
import { OriginalComponent } from './components/original/original.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosComponent,
    NavbarComponent,
    KeysPipe,
    OriginalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    DatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
