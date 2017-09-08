import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public actionctrl:ActionSheetController) {

  }
  

  showactionsheet() {
    let actionsheet = this.actionctrl.create( {
      title: 'My favorite list',
      buttons : [
        {
          text:'Delete',
          role:'destructive',
          handler: () => {
            console.log("Hey deleted successfully")
          }
        },
        {
          text:'Share',
          handler: () => {
            console.log("Hey Shared successfully")
          }
        },
        {
          text:'Cancel',
          role:'cancel',
          handler: () => {
            console.log("Hey cancelled successfully")
          }
        }
      ]
    });

    actionsheet.present();
  }

}
