import { Routes } from '@angular/router';
import { VerificarInscripcionComponent } from './components/verificar-inscripcion/verificar-inscripcion.component';

export const routes: Routes = [
    {path:'inscripcion/verificar', component: VerificarInscripcionComponent},
    {path: '', redirectTo: 'inscripcion/verificar', pathMatch: 'full' }
];
