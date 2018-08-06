import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Geofence } from '@ionic-native/geofence';
//import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng } from 'ionic-native';
/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {


  @ViewChild('map') mapElement: ElementRef;
   map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private geofence: Geofence) {
  

     // initialize the plugin
  geofence.initialize().then(
    // resolved promise does not return a value
    () => console.log('Geofence Plugin Ready'),
    (err) => console.log(err)
  )

  
  
  }

  ionViewDidLoad() {
   // this.initMap();
     this.getLocation();
     
   // console.log('ionViewDidLoad MapsPage');
  }

// this to hard code the lat long to get perticular location. 
 initMap(){

  let coords = new google.maps.LatLng(18.000055, 79.588165);

  let mapOptions: google.maps.MapOptions ={
    center: coords,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  
  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

 // 32.912626,-96.999504


 }



 getLocation(){


  this.geolocation.getCurrentPosition().then((position) => {
    let coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    
    // resp.coords.latitude
    // resp.coords.longitude
    let mapOptions: google.maps.MapOptions ={
      center: coords,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

   }).catch((error) => {
     console.log('Error getting location', error);
   });
   

   /*
   let watch = this.geolocation.watchPosition();
   watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
     //data.coords.latitude
    // data.coords.longitude
   });

   */

 }


 addMarker(){
 
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });
 
  let content = "<h4>Information!</h4>";         
 
  this.addInfoWindow(marker, content);
  
  this.addGeofence();
}



addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
 
}



private addGeofence() {
  //options describing geofence
  let fence = {
    id: '69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb', //any unique ID
    latitude:       32.912626, //center of geofence radius
    longitude:      -96.999504,
    radius:         100, //radius to edge of geofence in meters
    transitionType: 3, //see 'Transition Types' below
    notification: { //notification settings
        id:             1, //any unique ID
        title:          'You crossed a fence', //notification title
        text:           'You just arrived to Gliwice city center.', //notification body
        openAppOnClick: true //open app when notification is tapped
    }
  }

  this.geofence.addOrUpdate(fence).then(
     () => console.log('Geofence added'),
     (err) => console.log('Geofence failed to add')
   );
}















}
