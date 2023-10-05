import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-requirement-list',
  templateUrl: './requirement-list.component.html',
  styleUrls: ['./requirement-list.component.scss']
})
export class RequirementListComponent implements OnInit {
  requirementForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.requirementForm = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
      description1: [''],
    });
  }
  onSubmit(){

  }
  // Implement form submission logic here
}