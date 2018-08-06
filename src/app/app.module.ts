import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera} from '@ionic-native/camera';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { AddproductsPage } from '../pages/addproducts/addproducts'; 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupPage } from '../pages/signup/signup';
import { SignupserviceProvider } from '../providers/signupservice/signupservice';
import { HttpModule } from '@angular/http';
import {HTTP} from '@ionic-native/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MapsPage } from '../pages/maps/maps'
import { Geolocation } from '@ionic-native/geolocation';
import { Geofence } from '@ionic-native/geofence';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AddproductsPage,
    SignupPage,
    MapsPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AddproductsPage,
    SignupPage,
    MapsPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera, 
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SignupserviceProvider,
    HTTP,
    HttpClient,
    Geolocation,
    Geofence
  ]
})
export class AppModule {}
