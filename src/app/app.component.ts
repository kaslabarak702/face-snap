import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap1!:FaceSnap;
  mySnap2!:FaceSnap;
  mySnap3!:FaceSnap;
  ngOnInit(): void {
    this.mySnap1=new FaceSnap("archibald","mon meilleur ami","https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843__480.png",new Date(),100000);
    this.mySnap2=new FaceSnap("francis","mon pire ami","https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843__480.png",new Date(),2);
    this.mySnap3=new FaceSnap("jean","pas mon ami","https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843__480.png",new Date(),400000000000);
  }
}
