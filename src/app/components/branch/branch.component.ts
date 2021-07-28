import {Component, OnInit} from '@angular/core';
import {BrandService} from "../../services/brand.service";
import {Brand} from "../../models/Brand";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {BrandModelComponent} from "./brand-model/brand-model.component";
import {RemoveComponent} from "./brand-model/remove/remove.component";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  index = 0;
  page = 1;
  itemsPerPage = 5;
  totalItems: number | any;
  brands: Brand[] = [];
  start: number = 1;
  search = "";

  constructor(private brandService: BrandService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.refreshPage();
  }

  gty(number: number) {
    this.start = number * this.itemsPerPage - this.itemsPerPage + 1;
    this.page = number;
    this.refreshPage();
  }

  private refreshPage() {
    this.brandService.getPagingBrand(this.itemsPerPage, this.page, this.search)
      .subscribe((response) => {
        this.totalItems = response.data.totalElements;
        this.brands = response.data.content;
      }, (error: HttpErrorResponse) => alert(error.message))
  }

  openModal(brand: Brand, title: string) {
    const modalRef = this.modalService.open(BrandModelComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        backdrop: "static",
      });
    modalRef.componentInstance.brand = brand;
    modalRef.componentInstance.title = title;
    if (title.toUpperCase() == 'ADD') {
      modalRef.result.then((result) => {
        this.brandService.addBrand({
          name: result.name,
          phone: result.phone,
          email: result.email,
          imgUrl: result.imgUrl,
        }).subscribe(() => {
          this.refreshPage();
        });
      }).catch(reason => alert(reason));
    } else {
      modalRef.result.then((result) => {
        this.brandService.updateBrand(result.id, {
          name: result.name,
          phone: result.phone,
          email: result.email,
          imgUrl: result.imgUrl,
        }).subscribe((response) => {
          this.refreshPage();

        });
      }).catch(reason => alert(reason));
    }

  }

  getEmptyBrand(): Brand {
    return {
      id: 0,
      email: "",
      imgUrl: "https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://lambanner.com/wp-content/uploads/2020/04/MNT-DESIGN-10-MEO-THIET-KE-LOGO-1130x570.jpg",
      phone: "",
      name: "",
      status: "ACTIVE"
    };

  }

  resetPage() {
    this.page = 1;
    this.start = 1;
    this.refreshPage();
  }

  remove(brand: Brand) {
    let ngbModalRef = this.modalService.open(RemoveComponent, {
      scrollable: true,
      windowClass: 'myCustomModalClass',
      backdrop: "static",
    });
    ngbModalRef.componentInstance.brand = brand
    ngbModalRef.result.then((currentBrand) => {
      this.brandService.removeBrand(currentBrand.id).subscribe(() => {
        this.refreshPage();
        if (this.brands.length <= 1) {
          this.resetPage();
        }
      }, (error: HttpErrorResponse) => alert(error.message));
    }).catch(reason => alert(reason))
  }

  searchBrand() {
    this.resetPage();
  }

}

