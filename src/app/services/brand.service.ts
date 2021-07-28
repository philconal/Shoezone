import {Injectable} from '@angular/core';
import {Brand} from "../models/Brand";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyResponse} from "../models/MyResponse";
import {BrandRequest} from "../models/BrandRequest";
import {PagableBrand} from "../models/PagableBrand";

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  url = "http://localhost:8080/brand/list";

  constructor(private http: HttpClient) {
  }

  // getBrands(): Observable<MyResponse<Brand[]>> {
  //   return this.http.get<MyResponse<Brand[]>>(this.url);
  // }

  getPagingBrand(size: number, page: number, search: string): Observable<MyResponse<PagableBrand<Brand[]>>> {
    let paging = `http://localhost:8080/brand/paging?search=${search}&page=${page}&size=${size}&name=&sort=&sort_field=`;
    return this.http.get<MyResponse<PagableBrand<Brand[]>>>(paging);
  }


  getBrandById(brand: Brand): Observable<MyResponse<Brand>> {
    const url = "http://localhost:8080/brand";
    return this.http.get<MyResponse<Brand>>(`${url}/${brand.id}`);

  }

  addBrand(brand: BrandRequest): Observable<MyResponse<Brand>> {
    const url = "http://localhost:8080/brand";
    return this.http.post<MyResponse<Brand>>(url, brand);
  }

  updateBrand(id: number, brand: BrandRequest): Observable<MyResponse<Brand>> {
    const url = "http://localhost:8080/brand";
    return this.http.put<MyResponse<Brand>>(`${url}/${id}`, brand);
  }

  removeBrand(id: number): Observable<MyResponse<Brand>> {
    const url = "http://localhost:8080/brand";
    return this.http.delete<MyResponse<Brand>>(`${url}/${id}`);
  }
}
