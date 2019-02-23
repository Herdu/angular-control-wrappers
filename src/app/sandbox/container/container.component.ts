import { FormSelectOption } from './../gg-select/gg-select.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  formGroup: FormGroup = this.formBuilder.group({
    email: ['abc', [Validators.required, Validators.email]],
    sex: [null, [Validators.required]],
   })

   sexOptions: FormSelectOption[] = [
     {value: 'MEN', name: 'Mężczyzna'},
     {value: 'WOMEN', name: 'Kobieta'},
     {value: 'OTHER', name: 'Inne'}
   ];

  constructor(private formBuilder: FormBuilder) {

  }


  toggleDisabledHandler(): void {
    this.formGroup.get('email').disabled ?
    this.formGroup.get('email').enable()
    :
    this.formGroup.get('email').disable();
  }

  toggleTouchedHandler(): void {
    this.formGroup.get('email').touched ?
    this.formGroup.get('email').markAsUntouched()
    :
    this.formGroup.get('email').markAsTouched();
  }
}
