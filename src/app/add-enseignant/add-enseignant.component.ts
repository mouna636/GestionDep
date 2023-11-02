import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnseignantService } from '../services/enseignant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit {
  enseignant:any={};
  addEnseignantForm: any;
  
  constructor( private formBuilder:FormBuilder,
    private enseignantService:EnseignantService,private router:Router  ) { }
  ngOnInit(){
    this.addEnseignantForm=this.formBuilder.group(
      {
       nom:[''],
       prenom:[''],
       email:[''],
       description:[''],
       telephone:[''],
       sexe:[''],
       grade:[''],
       specialite:['']
       
      }
    )
  }
  saveEnseignant(){
    console.log (this.enseignant);
    this.enseignantService.saveEnseignant(this.enseignant).subscribe(
      ()=>{
        this.router.navigate(['listeEnseignant']);
      }
    ) 
  } 
}
