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

  getEmployee(id) {
    return this.http.get('https://60644181f0919700177854b2.mockapi.io/mockdemo/employee/' + id);
  }

  addEmployee(employe: Employe) {
    return this.http.post(
      'https://60644181f0919700177854b2.mockapi.io/mockdemo/employee',
      employe
    );
  }
}
