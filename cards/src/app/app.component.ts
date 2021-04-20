import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {title: "Neat Tree", userName:"@nature", content:"I saw this cool tree today", imageUrl:"assets/tree.jpeg"},
    {title: "Snowy Mountain", userName:"@mountainlover", content:"Here is a picture of a mountain", imageUrl:"assets/mountain.jpeg"},
    {title: "Biking", userName:"@biking1222", content:"I did some biking today", imageUrl:"assets/biking.jpeg"},
  ]


}
