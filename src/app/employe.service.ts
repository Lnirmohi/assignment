import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Employe } from './employe.module';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http: HttpClient) {}

  getEmployee() {
    this.http.get('https://60644181f0919700177854b2.mockapi.io/mockdemo/employee');
  }

  addEmployee(employe: Employe) {
    this.http.post(
      'https://60644181f0919700177854b2.mockapi.io/mockdemo/employee',
      employe
    );
  }
}
