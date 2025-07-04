import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InscripcionService } from '../../services/InscripcionService.service';

@Component({
  selector: 'app-verificar-inscripcion',
  templateUrl: './verificar-inscripcion.component.html',
  styleUrls: ['./verificar-inscripcion.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class VerificarInscripcionComponent {
  dni: string = '';
  actividad: string = '';
  mensaje: string = '';

  constructor(private inscripcionService: InscripcionService) {}

  verificarInscripcion(): void {
    this.inscripcionService.verificarInscripcion(this.dni, this.actividad)
      .subscribe({
        next: (respuesta) => {
          this.mensaje = respuesta;
          console.log('Respuesta del servidor:', respuesta);
        },
        error: () => {
          this.mensaje = 'Error al verificar la inscripción.';
        }
      });
  }
}

