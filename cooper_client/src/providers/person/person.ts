import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { CooperProvider } from '../cooper/cooper';

@Injectable()
export class PersonProvider {
public gender: string;
public age: number;
public assessmentMessage: string;
public person: PersonProvider;


constructor(
  public navCtrl: NavController,
  
  ) {
  this.user = { distance: 1000, age: 20, gender: 'female' };
  }
  
  calculate() {
      this.person.age = this.user.age;
      this.person.gender = this.user.gender;
  
      this.person.doAssessment(this.user.distance);
      console.log(this.person.assessmentMessage);
  
  }

} 
