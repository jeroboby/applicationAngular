import { Component } from '@angular/core';
import { resolve } from 'url';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  constructor() {
    var config = {
      apiKey: "AIzaSyBmkEsGhzZ458W28qMPvwmPG91lpUfDYSU",
      authDomain: "http-client-demo-fa96f.firebaseapp.com",
      databaseURL: "https://http-client-demo-fa96f.firebaseio.com",
      projectId: "http-client-demo-fa96f",
      storageBucket: "http-client-demo-fa96f.appspot.com",
      messagingSenderId: "356301626091"
    };
    firebase.initializeApp(config);
  
  }

}
