import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Friend } from '../../models/friend.model';
import { FriendRestProvider } from '../../providers/friend-rest/friend-rest';

/**
 * Generated class for the FrienddetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-frienddetail',
  templateUrl: 'frienddetail.html',
})
export class FrienddetailPage {

  studentid:number;
  friend:Friend;

  constructor(public friendrest:FriendRestProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.studentid=this.navParams.get("studentid");
    this.friendrest.getfriendList().subscribe(data=>{
      this.friend=data.filter(friend => friend.studentid === this.studentid)[0];
    })
  }

  ionViewDidLoad() {
    this.studentid=this.navParams.get("studentid");
    console.log(this.studentid);
  }
  goBack(){
    this.navCtrl.pop();
  }

}
