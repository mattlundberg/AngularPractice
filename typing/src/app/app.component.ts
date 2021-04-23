import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  sentence = '';

  displaySuccess(){
    return this.randomText == this.sentence;
  }

  onInput(event: Event){
    const target = event.target as HTMLInputElement;
    this.sentence = target.value;
  }

  getClass(letter: string, enteredLetter: string){
    if (!enteredLetter){
      return 'pending';
    }
    return letter === enteredLetter ? 'correct' : 'incorrect';
  }
}
