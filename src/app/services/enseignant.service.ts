import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enseignant } from '../Models/enseignant';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  enseignantUrl:string ='http://localhost:8080/enseignants'

  constructor(private httpClient:HttpClient) {}
  
  getAllEnseignants(): Observable<any> {
    return this.httpClient.get(this.enseignantUrl);
  }
 
saveEnseignant(enseignant:any): Observable<any> {
  return this.httpClient.post(this.enseignantUrl,enseignant);
}
 updateEnseignant(enseignant:any):Observable<any>{
  return this.httpClient.put(`${this.enseignantUrl}/${enseignant.id}`,enseignant);
 }
deleteEnseignantById(id:any):Observable<any>{
  return this.httpClient.delete(`${this.enseignantUrl}/${id}`);
} 
 }