import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {
 
  title: string;
  description: string;
 
  constructor(public navCtrl: NavController, public view: ViewController) {
 
  }
 
  saveItem(){
 
    let newItem = {
      title: this.title,
      description: this.description
    };
 
    this.view.dismiss(newItem);
 
  }
 
  close(){
    this.view.dismiss();
  }
 
}