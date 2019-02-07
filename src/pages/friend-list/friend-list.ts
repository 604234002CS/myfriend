import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Friend } from '../../models/friend.model';
import { FriendRestProvider } from '../../providers/friend-rest/friend-rest';
import { FrienddetailPage } from '../frienddetail/frienddetail';

/**
 * Generated class for the FriendListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
})
export class FriendListPage {

  Friends:Friend;
  classroom:string;

  constructor(public friendrest:FriendRestProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.classroom=this.navParams.get("classroom");
    this.friendrest.getfriendList().subscribe(data=>{
      this.Friends=data.filter(friends => friends.classroom === this.classroom);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendListPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  showDetail(studentid:number){
    this.navCtrl.push(FrienddetailPage,
      {studentid:studentid}
      );
  }

}
