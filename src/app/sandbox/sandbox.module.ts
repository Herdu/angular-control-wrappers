import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { GgInputComponent } from './gg-input/gg-input.component';
import { GgSelectComponent } from './gg-select/gg-select.component';

@NgModule({
  declarations: [ContainerComponent, GgInputComponent, GgSelectComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ]
})
export class SandboxModule { }
