import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './components/datos/datos.component';
import { OriginalComponent } from './components/original/original.component';

const APP_ROUTES: Routes = [
  { path: 'datos', component: DatosComponent },
  { path: 'original', component: OriginalComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
