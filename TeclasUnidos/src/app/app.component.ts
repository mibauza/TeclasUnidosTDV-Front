import { Component } from '@angular/core';
import { VerificarInscripcionComponent } from './components/verificar-inscripcion/verificar-inscripcion.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HttpClientModule, VerificarInscripcionComponent]
})
export class AppComponent {
  title = 'TeclasUnidos';
}

