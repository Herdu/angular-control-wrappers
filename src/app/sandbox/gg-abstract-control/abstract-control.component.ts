import { FormControl, AbstractControl, ControlValueAccessor, ValidationErrors } from '@angular/forms';
import { Input } from '@angular/core';

export abstract class GgAbstractControlComponent<T> implements ControlValueAccessor {
  @Input() private formControl: FormControl;
  @Input() readonly name: string;

  value: T;


  get disabled(): boolean {
    return this.formControl.disabled;
  }

  get touched(): boolean {
    return this.formControl.touched;
  }

  get errors(): ValidationErrors {
    return (this.touched && !this.disabled ? this.formControl.errors : null);
  }

  get required(): boolean {
    if(this.formControl.validator) {
      const validator = this.formControl.validator({}as AbstractControl);
      return validator && validator.required;
    }
    return false;
  }


  writeValue(obj: T): void {
    this.value = obj;
    this.propagateChange(this.value);
    this.propagateTouch();
  }

  private propagateChange(obj: any): void {}
  private propagateTouch(): void {}

  registerOnChange(fn: ((obj: any) => void)): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: ()=>void): void {
    this.propagateTouch = fn;
  }
 }
