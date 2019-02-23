import { Component, Input, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, AbstractControl, ValidationErrors } from '@angular/forms';
import { GgAbstractControlComponent } from '../gg-abstract-control/abstract-control.component';

@Component({
  selector: 'gg-input',
  templateUrl: './gg-input.component.html',
  styleUrls: ['./gg-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => GgInputComponent),
    multi: true
  }]
})
export class GgInputComponent extends GgAbstractControlComponent<string | number>  {
  @Input() readonly type: 'text' | 'email' | 'password' | 'number' = 'text';
}
