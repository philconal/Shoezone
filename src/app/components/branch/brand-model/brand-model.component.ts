import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Brand} from "../../../models/Brand";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BrandService} from "../../../services/brand.service";


const {required, email, minLength} = Validators;

@Component({
  selector: 'app-brand-model',
  templateUrl: './brand-model.component.html',
  styleUrls: ['./brand-model.component.css']
},)

export class BrandModelComponent implements OnInit {
  @Input() brand!: Brand;
  @Input() title!: string;
  modifyForm!: FormGroup;
  isReadOnly: boolean = true;

  constructor(private brandService: BrandService,
              public activeModal: NgbActiveModal,
              private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.modifyForm = this.fb.group({
      id: new FormControl(this.brand.id, [required]),
      name: new FormControl(this.brand.name, [required, minLength(5)]),
      phone: new FormControl(this.brand.phone, [required]),
      imgUrl: new FormControl(this.brand.imgUrl,),
      email: new FormControl(this.brand.email, [email, required, minLength(5)]),
    });
    if (this.title.toUpperCase() == 'ADD'){
      this.isReadOnly = false;
    }

  }

  closeModal() {
    this.activeModal.dismiss('close');

  }

  onSubmit() {
    this.activeModal.close(this.modifyForm.value);
  }

}
