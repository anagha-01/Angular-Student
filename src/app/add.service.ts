import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http:HttpClient) { }

  insertdata(data){
    return this.http.post("",data)
  }
}
