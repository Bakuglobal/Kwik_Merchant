import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  hiddenTabs = false ;
  constructor(
    private fauth: AngularFireAuth
  ) { }

  async UserID(){
    let id = this.fauth.auth.currentUser.uid ;
    return  id ;
  }
  

}
