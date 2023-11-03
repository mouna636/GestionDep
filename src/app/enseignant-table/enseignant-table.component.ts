import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-enseignant-table',
  templateUrl: './enseignant-table.component.html',
  styleUrls: ['./enseignant-table.component.css']
})
export class EnseignantTableComponent implements OnInit{
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
  deleteEnseignant(id: any){
    this.enseignantService.deleteEnseignantById(id).subscribe(
      ()=>{
        console.log('Enseignant deleted successfully');
      
          this.getEnseignantsFromService();
        
        
      }
    )
  } 
}


