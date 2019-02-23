import { Component, Input, forwardRef } from "@angular/core";
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";
import { GgAbstractControlComponent } from "../gg-abstract-control/abstract-control.component";


export type FormSelectValue = string | number | boolean;

export interface FormSelectOption {
  value: FormSelectValue;
  name: string;
}

@Component({
  selector: "gg-select",
  templateUrl: "./gg-select.component.html",
  styleUrls: ["./gg-select.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GgSelectComponent),
      multi: true
    }
  ]
})
export class GgSelectComponent extends GgAbstractControlComponent<
  FormSelectValue
> {
  @Input() options: FormSelectOption[];
  @Input() placeholder: string;
}
