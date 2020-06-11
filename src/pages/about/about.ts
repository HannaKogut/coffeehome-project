import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  imageUrl = '../../assets/imgs/watercolor-coffee-cup-1.png';

  constructor(public navCtrl: NavController) {

  }

}
