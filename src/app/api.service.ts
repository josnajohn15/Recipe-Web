import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


getProducts(){
return this.http.get('https://dummyjson.com/recipes')
  
}

getProductsById(id:any){

return this.http.get(`https://dummyjson.com/recipes/${id}`)

}

}