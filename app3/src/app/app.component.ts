import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app3';

  ngOnInit(): void{
    var firebaseConfig = {
      apiKey: "AIzaSyDOetNSi6-G2djUUSINjL_XXgAdwcXjAHI",
      authDomain: "instagram-clone-788ff.firebaseapp.com",
      databaseURL: "https://instagram-clone-788ff.firebaseio.com",
      projectId: "instagram-clone-788ff",
      storageBucket: "gs://instagram-clone-788ff.appspot.com/",
      messagingSenderId: "48294425874",
      appId: "1:48294425874:web:13cc046f41c7022f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
