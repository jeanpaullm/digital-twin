import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFirestore) { }

  getTimestampData(): Observable<any[]> {
    return this.db.collection('registers', ref => ref.orderBy("timestamp").limit(5)).valueChanges();
  }

  getGravityData(): Observable<any[]> {
    return this.db.collection('registers', ref => ref.orderBy("gravity", "desc").limit(5)).valueChanges();
  }

}
