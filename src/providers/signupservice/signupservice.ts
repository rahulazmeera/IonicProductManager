//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

/*
  Generated class for the SignupserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SignupserviceProvider {


 

  constructor(public http: Http) {
    console.log('Hello SignupserviceProvider Provider');
  }



  Signup(body: any){


   return this.http.post('http://localhost:6000/Signup', body);
    


  }




}
