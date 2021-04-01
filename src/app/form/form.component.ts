import { Employe } from './../employe.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private employeService: EmployeService) { }

  formGroup: FormGroup;
  imgUrl = '';

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      dob: ['', Validators.required],
      avatar: ['', Validators.required]
    });
  }

  onUrlInput(event) {
    this.imgUrl = event.target.value;
  }

  onSubmit(employeeData: FormGroup) {

    console.log(employeeData);
    // this.employeService.addEmployee(
    //   {

    //   }
    // );
  }

}
