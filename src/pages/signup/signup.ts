import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SignupserviceProvider } from '../../providers/signupservice/signupservice';
import { Http , Headers, HttpModule} from '@angular/http';
import {Observable} from 'rxjs/observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AddproductsPage } from '../addproducts/addproducts';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  
  public email:string;
  public password:any;
  public mobileno:number;
  public address:string;
  public data:string;



  constructor(public navCtrl: NavController, public navParams: NavParams, public sigunpservice: SignupserviceProvider, public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


 



 
Register(){

    var body={
      username:this.email,
      password :this.password,
      mobileno:this.mobileno,
      address:this.address
              }



  this.http.post('https://salty-tundra-66474.herokuapp.com/Signup', body).map(res=>res.json()).subscribe(data=>{
   // this.data=data.message
    console.log(data.message);

    if(data.message == "user aleredy exists"){
      alert(this.data);
    }else{
      this.navCtrl.push(HelloIonicPage);
      console.log("redirect to login page")
    }
   
  }, err=>{
    console.log(err)
  }

)


  }




}
