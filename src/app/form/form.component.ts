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
  employe: any;

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

  getEmploye() {
    this.employeService.getEmployee()
      .subscribe(response => {
        this.employe = response;
      });
  }

  onSubmit(employeeData: FormGroup) {

    const fullName = employeeData.value.fullname;
    const avatar = employeeData.value.avatar;
    const address = employeeData.value.address;
    const phoneNumber = employeeData.value.phoneNumber;
    const dob = employeeData.value.dob;
    const email = employeeData.value.email;

    this.employeService.addEmployee(
      {
        fullName,
        avatar,
        address,
        phoneNumber,
        dob,
        email,
      }
    );
  }
}
