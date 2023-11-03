import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../service-etudiant/etudiant.service';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {
  editEtudiantForm: any;
  id: any;
  etudiant: any = {};
  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private etudiantService : EtudiantService,
    private router: Router) { }



  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.etudiantService.getEtudiantById(this.id).subscribe(
      (data:any)=>{
        this.etudiant=data;
      }
    )
  }

  editEtudiant() {
    this.etudiantService.updateEtudiant(this.etudiant).subscribe(
      () => {
        this.router.navigate(['list-etudiants']);
      }
    );

  }

}
