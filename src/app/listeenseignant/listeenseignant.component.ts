import { Component, OnInit } from '@angular/core';
import { EnseignantService } from '../services/enseignant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listeenseignant',
  templateUrl: './listeenseignant.component.html',
  styleUrls: ['./listeenseignant.component.css']
})
export class ListeenseignantComponent implements OnInit{
  enseignants:any;
  
  constructor(private router:Router,private enseignantService:EnseignantService) {}


  ngOnInit() {
    this.getEnseignantsFromService();  
  }
  getEnseignantsFromService() {
    this.enseignantService.getAllEnseignants().subscribe((data)=>{
      this.enseignants=data; 
    })
  }
  goToEdit(x: any){
    this.router.navigate([`editEnseignant/${x}`])
  }
  deleteenseignant(id: any){
    this.enseignantService.deleteEnseignantById(id).subscribe(
      ()=>{
        console.log('Type deleted successfully');
      
          this.getEnseignantsFromService();
        
        
      }
    )
  }
}
