import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddproductsPage } from '../addproducts/addproducts';
import { SignupPage } from '../signup/signup';
import { Http , Headers, HttpModule} from '@angular/http';
import { ItemDetailsPage } from '../item-details/item-details';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {


  public username;
  public password;
  public data:any;
  
  public failmessage:string;


constructor(public navCtrl: NavController, public http:Http) {

  }

 
signin(){

   var body={
             username:this.username,
             password:this.password
            }

   
  this.http.post('https://salty-tundra-66474.herokuapp.com/Signup/login', body).map(res=>res.json()).subscribe(data=>{
    // this.data=data.message
     console.log(data);
  
     if(data.message == "Success"){
      
      this.navCtrl.push(AddproductsPage);
      
     }
     else{

       this.failmessage="Please provide valid credentials";
       
     }
    
   }, err=>{
     console.log("message herese"+err);
     alert('Login failed please provide valid credentials');
   }
 
 )



  //alert('hey hey')
  //this.navCtrl.push(AddproductsPage);
  
 }

signup(){
  this.navCtrl.push(SignupPage);
}



}
