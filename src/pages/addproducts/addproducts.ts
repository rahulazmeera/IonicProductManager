import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
//import {Transfer, FileUploadOptions, TransferObject} from '@ionic-native/transfer';
/**
 * Generated class for the AddproductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addproducts',
  templateUrl: 'addproducts.html',
})
export class AddproductsPage {


public imageneed:any;
 public Myimage:any;
 public filed:any;
 FOLDER = 'jsa-s3/';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
               private camera:Camera) {


  }

  



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddproductsPage');
  }


 openCam(){
   

  const options: CameraOptions = {
    quality: 70,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  this.camera.getPicture(options).then((imageData) => {
   // imageData is either a base64 encoded string or a file URI
   // If it's base64 (DATA_URL):
   this.Myimage = 'data:image/jpeg;base64,' + imageData;

  }, (err) => {

    alert(err)
   // Handle error
  });



 }



 uploadfile() {
  //const file=this.Myimage
  this.filed="/Users/ivcmbp035adm/Desktop/awstest.png";
  const file=this.filed
  const bucket = new S3(
    {
      accessKeyId: 'AKIAIXU2S2GHYRP2RX4Q',
      secretAccessKey: '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',
      region: 'us-west-2'
    }
  );

  const params = {
    Bucket: 'rahulazmeera',
    Key: this.FOLDER + file.name,
    Body: file
  };

  bucket.upload(params, function (err, data) {
    if (err) {
      console.log('There was an error uploading your file: ', err);
      alert(err);
      return false;
    }
     alert(data);
    console.log('Successfully uploaded file.', data);
    return true;
  });
}










}
