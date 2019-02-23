import { FormSelectOption } from "./../gg-select/gg-select.component";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.scss"]
})
export class ContainerComponent {
  formGroup: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    sex: [null, Validators.required],
    terms: [null, Validators.requiredTrue]
  });

  sexOptions: FormSelectOption[] = [
    { value: "MEN", name: "Mężczyzna" },
    { value: "WOMEN", name: "Kobieta" },
    { value: "OTHER", name: "Inne" }
  ];

  constructor(private formBuilder: FormBuilder) {}
}
