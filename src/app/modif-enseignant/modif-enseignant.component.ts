import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-modif-enseignant',
  templateUrl: './modif-enseignant.component.html',
  styleUrls: ['./modif-enseignant.component.css']
})
export class ModifEnseignantComponent  implements OnInit {
  editEnseignantForm:any;
  id: any;
  enseignant: any = {};
  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private enseignantService: EnseignantService,
    private router: Router) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.enseignantService.getEnseignantById(this.id).subscribe(
      (data)=>{
        this.enseignant=data;
      }
    )
    
  }

  modifEnseignant() {
   this.enseignantService.updateEnseignant(this.enseignant).subscribe(
      () => {
        this.router.navigate(['enseignant-table']);
      }
    ); 


  }

}
