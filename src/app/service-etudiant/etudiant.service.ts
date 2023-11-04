import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'

})
export class EtudiantService {

    etudiantUrl:string ='http://localhost:1500/etudiants'

    constructor(private httpClient:HttpClient) {}

    getAllEtudiants(): any {
        return this.httpClient.get(this.etudiantUrl);
    }

    saveEtudiant(etudiant:any): any {
        return this.httpClient.post(this.etudiantUrl,etudiant);
    }

    getEtudiantById(id:any): any {
        return this.httpClient.get(`${this.etudiantUrl}/${id}`);
    }

    updateEtudiant(etudiant:any):any {
        return this.httpClient.put(`${this.etudiantUrl}/${etudiant.id}`,etudiant);
    }

    deleteEtudiantById(id:any):any{
        return this.httpClient.delete(`${this.etudiantUrl}/${id}`);
    }


}
