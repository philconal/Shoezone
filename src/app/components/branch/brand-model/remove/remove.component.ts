import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Brand} from "../../../../models/Brand";

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
  @Input() brand!: Brand

  constructor(public modal: NgbActiveModal) {
  }

  ngOnInit(): void {
    console.table(this.brand)
  }

  remove(brand: Brand) {
    this.modal.close(brand)
  }
}
