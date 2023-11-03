import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnseignantService } from '../services/enseignant.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-edit-enseignant',
  templateUrl: './edit-enseignant.component.html',
  styleUrls: ['./edit-enseignant.component.css']
})
export class EditEnseignantComponent implements OnInit {
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

  editEnseignant() {
    this.enseignantService.updateEnseignant(this.enseignant).subscribe(
      () => {
        this.router.navigate(['enseignant-table']);
      }
    );

  }
}
