import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Setor } from './setor';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  private readonly API = `${environment.API}setor`;

  constructor(private http : HttpClient) {   }

  getList(){
    return this.http.get<Setor[]>(this.API);
  }
 
}
