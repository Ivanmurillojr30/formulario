import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class HomePage {

  vehicleForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.vehicleForm = this.fb.group({
      marca: ['', Validators.required],
      anio: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[0-9]+$/)]],
      placa: ['', [Validators.required, Validators.pattern(/^[A-Z]{3}[0-9]{4}$/)]]
    });
  }

  registrar() {
    console.log("Datos del formulario:", this.vehicleForm.value);
  }
}
