import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioRestService {

  constructor(private http: HttpClient) { }

    // GET
    public get (url:string){
      return this.http.get(url);
    }

    // DELETE
    public delete (url:string){
      return this.http.delete(url);
    }
}
