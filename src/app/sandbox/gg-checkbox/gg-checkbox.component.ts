import { Component, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { GgAbstractControlComponent } from "../gg-abstract-control/abstract-control.component";

@Component({
  selector: "gg-checkbox",
  templateUrl: "./gg-checkbox.component.html",
  styleUrls: ["./gg-checkbox.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GgCheckboxComponent),
      multi: true
    }
  ]
})
export class GgCheckboxComponent extends GgAbstractControlComponent<boolean> {}
